import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Shadow, ContactShadows, Billboard, Environment, BakeShadows, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { LayerMaterial, Depth } from 'lamina'
import Uranus from '../Planets/Uranus'
import Himu_planet from '../Planets/Himu_planet'


const Planets = () => {
    const { nodes } = useGLTF('/Planets/scene.glb')
    console.log();
    const rocketTexture = useTexture('/Planets/rocket2.png')
    return (
        <>
            <mesh  geometry={nodes.Rocket_Ship_01.geometry} material={nodes.Rocket_Ship_01.material} position={[300.76, 210.44, -400.83]} rotation={[-0.44, 0.29, 1.18]} scale={1} >
                <meshBasicMaterial map={rocketTexture} map-flipY={false} />
            </mesh>
            <Uranus />
            <Himu_planet />
       </>
    )
}

export default Planets

