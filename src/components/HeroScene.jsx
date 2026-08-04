import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Icosahedron, Line } from '@react-three/drei'
import * as THREE from 'three'

function NeuralCore() {
  const coreRef = useRef()
  const latticeRef = useRef()
  const target = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.18
      coreRef.current.rotation.x = Math.sin(t * 0.3) * 0.15
    }
    if (latticeRef.current) {
      latticeRef.current.rotation.y = -t * 0.08
      latticeRef.current.rotation.z = t * 0.05
    }

    target.current.x += (state.pointer.x - target.current.x) * 0.04
    target.current.y += (state.pointer.y - target.current.y) * 0.04
    if (coreRef.current) {
      coreRef.current.rotation.y += target.current.x * 0.4
      coreRef.current.rotation.x += -target.current.y * 0.3
    }
  })

  const nodes = useMemo(() => {
    const pts = []
    const count = 10
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      const r = 2.4
      pts.push(
        new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        )
      )
    }
    return pts
  }, [])

  const lines = useMemo(() => {
    const segs = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 2.6) {
          segs.push([nodes[i], nodes[j]])
        }
      }
    }
    return segs
  }, [nodes])

  return (
    <group>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
        <group ref={coreRef}>
          <Icosahedron args={[1.15, 1]}>
            <MeshDistortMaterial
              color="#ff5a5f"
              emissive="#7f1d1d"
              roughness={0.15}
              metalness={0.4}
              distort={0.35}
              speed={1.6}
              transparent
              opacity={0.92}
            />
          </Icosahedron>
          <Icosahedron args={[1.16, 1]}>
            <meshBasicMaterial color="#ff5a5f" wireframe transparent opacity={0.15} />
          </Icosahedron>
        </group>
      </Float>

      <group ref={latticeRef}>
        {lines.map(([a, b], i) => (
          <Line key={i} points={[a, b]} color="#7f1d1d" transparent opacity={0.35} lineWidth={1} />
        ))}
        {nodes.map((p, i) => (
          <mesh position={p} key={i}>
            <sphereGeometry args={[0.045, 8, 8]} />
            <meshBasicMaterial color="#ffb4b4" />
          </mesh>
        ))}
      </group>
    </group>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 4]} intensity={40} color="#ff5a5f" />
      <pointLight position={[-4, -2, -3]} intensity={30} color="#7f1d1d" />
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      className="!touch-none"
    >
      <Lights />
      <NeuralCore />
    </Canvas>
  )
}
