import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Shadow, ContactShadows, Billboard, Environment, BakeShadows, OrbitControls } from '@react-three/drei'
import { LayerMaterial, Depth } from 'lamina'

import React from 'react'

const XD = () => {
    return (
        <>
                <hemisphereLight intensity={0.5} color="white" groundColor="black" />
                <Sphere color="white" amount={5} emissive="red" glow="purple" size={0.25} position={[5.5, 1.2, 8.5]} />
                <Sphere color="white" amount={3} emissive="purple" glow="#ff90f0" size={0.5} position={[-1.5, 0.5, -2]} />
                <Sphere color="lightpink" amount={2} emissive="orange" glow="#ff9f50" size={0.25} position={[8.5, 1, 7.5]} />
                {/* <OrbitControls autoRotateSpeed={0.85} zoomSpeed={0.75} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.55} /> */}
            </>
    )
}

export default XD


const Sphere = ({ size = 1, amount = 50, color = 'white', emissive, glow, ...props }) => (
    <mesh {...props}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshPhysicalMaterial roughness={0} color={color} emissive={emissive || color} envMapIntensity={0.2} />
        <Glow scale={size * 1.2} near={-25} color={glow || emissive || color} />
        <Sparkles count={amount} scale={size * 2} size={6} speed={0.4} />
        <Shadow rotation={[-Math.PI / 2, 0, 0]} scale={size * 1.5} position={[0, -size, 0]} color="black" opacity={1} />
    </mesh>
)

const Glow = ({ color, scale = 0.5, near = -2, far = 1.4 }) => (
    <Billboard>
        <mesh>
            <circleGeometry args={[2 * scale, 16]} />
            <LayerMaterial
                transparent
                depthWrite={false}
                blending={THREE.CustomBlending}
                blendEquation={THREE.AddEquation}
                blendSrc={THREE.SrcAlphaFactor}
                blendDst={THREE.DstAlphaFactor}>
                <Depth colorA={color} colorB="black" alpha={1} mode="normal" near={near * scale} far={far * scale} origin={[0, 0, 0]} />
                <Depth colorA={color} colorB="black" alpha={0.5} mode="add" near={-40 * scale} far={far * 1.2 * scale} origin={[0, 0, 0]} />
                <Depth colorA={color} colorB="black" alpha={1} mode="add" near={-15 * scale} far={far * 0.7 * scale} origin={[0, 0, 0]} />
                <Depth colorA={color} colorB="black" alpha={1} mode="add" near={-10 * scale} far={far * 0.68 * scale} origin={[0, 0, 0]} />
            </LayerMaterial>
        </mesh>
    </Billboard>
)
