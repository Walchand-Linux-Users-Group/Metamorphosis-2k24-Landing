import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sparkles, Shadow, ContactShadows, Billboard, Environment, BakeShadows, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { LayerMaterial, Depth } from 'lamina'
import Uranus from '../Planets/Uranus'
import Himu_planet from '../Planets/Himu_planet'
import { useRef, useState } from 'react'


const Planets = () => {
    const { nodes } = useGLTF('/Planets/scene.glb')
    const rocketTexture = useTexture('/Planets/rocket2.png')
    const meshRef = useRef()
    const [moving, setMoving] = useState(false)
    const rocketClicked = () => {
        if (moving) {
            setMoving(false)
        }
        else
            setMoving(true)
    }
    useFrame((state, delta) => {
        if (moving) {
            meshRef.current.position.x += Math.sin(state.clock.getElapsedTime()) * 3
            meshRef.current.position.y -= Math.sin(state.clock.getElapsedTime()) 
        }
    })

    return (
        <>
            <mesh
                geometry={nodes.Rocket_Ship_01.geometry}
                material={nodes.Rocket_Ship_01.material}
                position={[350.76, 180.44, -400.83]}
                rotation={[-0.44, 0.29, 1.18]} scale={1.5}
                ref={meshRef}
                onClick={() => rocketClicked()}
            >
                <meshBasicMaterial map={rocketTexture} map-flipY={false} />
            </mesh>
            <Uranus />
            <Himu_planet />


        </>
    )
}

export default Planets

