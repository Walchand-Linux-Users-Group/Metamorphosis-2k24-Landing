import { useGLTF, useTexture } from '@react-three/drei';
import React from 'react'

const Himu_planet = () => {
    const uranus = useGLTF('/Planets/Himu/bluePlanet.glb')
    const { nodes } = useGLTF('/Planets/Himu/bluePlanet.glb')
    const texture = useTexture('/Planets/Himu/himu.png')

    console.log(nodes);
    return (
        <>
            {/* <primitive object={uranus.scene} position={[-100, 20, 0]} scale={10} /> */}
            <mesh geometry={nodes.Blue_Giant.geometry} position={[-100, 20, 0]} rotation={[-0.44, 0.29, 1.18]} scale={10} >
                <meshBasicMaterial map={texture} map-flipY={false} />
            </mesh>
        </>
    )
}

export default Himu_planet
