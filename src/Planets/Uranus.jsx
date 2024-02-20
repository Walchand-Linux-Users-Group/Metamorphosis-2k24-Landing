import { useGLTF, useTexture } from '@react-three/drei';
import React from 'react'

const Uranus = () => {
    const uranus = useGLTF('/Planets/urnus.glb')
    console.log(uranus);
    const { nodes } = useGLTF('/Planets/urnus.glb')
    console.log(nodes);
    const rocketTexture = useTexture('/Planets/rocket2.png')

    return (
        <>
            <mesh geometry={nodes.Circle_Material003_0.geometry} material={nodes.Circle_Material003_0.material} position={[-300.76, 10.44, -400.83]} rotation={[-0.44, 0.29, 1.18]} scale={1} >
                <meshBasicMaterial map={rocketTexture} map-flipY={false} />
            </mesh>
            <mesh geometry={nodes.Sphere_Material_0.geometry} material={nodes.Sphere_Material_0.material} position={[-300.76, 10.44, -400.83]} rotation={[-0.44, 0.29, 1.18]} scale={0.1} >
                <meshBasicMaterial map={rocketTexture} map-flipY={false} />
            </mesh>
            {/* <primitive object={uranus.scene} position={[-50, 5, -50]} scale={0.01} /> */}
        </>
    )
}

export default Uranus
