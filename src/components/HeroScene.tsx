import { useEffect, useRef } from 'react'
import * as THREE from 'three'

type Particle = {
  position: THREE.Vector3
  velocity: THREE.Vector3
}

export default function HeroScene() {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(host.clientWidth, host.clientHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.setAttribute('aria-hidden', 'true')
    host.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(52, host.clientWidth / host.clientHeight, 0.1, 100)
    camera.position.z = 8

    const particleCount = window.innerWidth < 700 ? 44 : 84
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      position: new THREE.Vector3((Math.random() - 0.5) * 13, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 3),
      velocity: new THREE.Vector3((Math.random() - 0.5) * 0.0007, (Math.random() - 0.5) * 0.0007, 0),
    }))
    const pointPositions = new Float32Array(particleCount * 3)
    const pointGeometry = new THREE.BufferGeometry()
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3))
    const pointMaterial = new THREE.PointsMaterial({
      color: 0xc4a8ff,
      size: 0.045,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    })
    const points = new THREE.Points(pointGeometry, pointMaterial)
    scene.add(points)

    const maxSegments = particleCount * 8
    const linePositions = new Float32Array(maxSegments * 6)
    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x9875ff,
      transparent: true,
      opacity: 0.17,
    })
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lines)

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frameId = 0
    let visible = true
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    visibilityObserver.observe(host)

    const resizeObserver = new ResizeObserver(() => {
      const { clientWidth, clientHeight } = host
      if (!clientWidth || !clientHeight) return
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(clientWidth, clientHeight)
    })
    resizeObserver.observe(host)

    const render = () => {
      if (!reducedMotion) frameId = window.requestAnimationFrame(render)
      if (!visible) return

      let segmentCount = 0
      particles.forEach((particle, index) => {
        if (!reducedMotion) {
          particle.position.add(particle.velocity)
          if (particle.position.x < -6.5 || particle.position.x > 6.5) particle.velocity.x *= -1
          if (particle.position.y < -4 || particle.position.y > 4) particle.velocity.y *= -1
        }
        const offset = index * 3
        pointPositions[offset] = particle.position.x
        pointPositions[offset + 1] = particle.position.y
        pointPositions[offset + 2] = particle.position.z

        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex]
          if (particle.position.distanceToSquared(other.position) > 2.4) continue
          if (segmentCount >= maxSegments) break
          const lineOffset = segmentCount * 6
          linePositions[lineOffset] = particle.position.x
          linePositions[lineOffset + 1] = particle.position.y
          linePositions[lineOffset + 2] = particle.position.z
          linePositions[lineOffset + 3] = other.position.x
          linePositions[lineOffset + 4] = other.position.y
          linePositions[lineOffset + 5] = other.position.z
          segmentCount += 1
        }
      })

      pointGeometry.attributes.position.needsUpdate = true
      lineGeometry.setDrawRange(0, segmentCount * 2)
      lineGeometry.attributes.position.needsUpdate = true
      renderer.render(scene, camera)
    }

    render()
    return () => {
      window.cancelAnimationFrame(frameId)
      visibilityObserver.disconnect()
      resizeObserver.disconnect()
      pointGeometry.dispose()
      pointMaterial.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div className="hero-scene" ref={hostRef} aria-hidden="true" />
}
