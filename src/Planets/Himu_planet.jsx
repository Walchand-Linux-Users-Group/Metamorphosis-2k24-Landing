import { useGLTF, useTexture } from '@react-three/drei';
import React, { useEffect, useRef } from 'react'
const Himu_planet = () => {
    const { nodes } = useGLTF('/Planets/Himu/bluePlanet.glb')
    // const texture = useTexture('/Planets/1.png')
    const texture = useTexture('/Planets/neon_text1.png')
    const meshRef = useRef();

    useEffect(() => {
        const animateRotation = () => {
            if (meshRef.current) {
                meshRef.current.rotation.x += 0.005; // Adjust rotation speed as needed
            }
            requestAnimationFrame(animateRotation);
        };

        animateRotation(); // Start animation loop

        return () => cancelAnimationFrame(animateRotation);
    }, []);

    return (
        <>
            {/* <primitive object={uranus.scene} position={[-100, 20, 0]} scale={10} /> */}
            {/*Rotate this mesh as a planet*/}
            <mesh
                geometry={nodes.Blue_Giant.geometry}
                position={[470.76, -10.44, -400.83]}
                rotation={[-0.44, 0.29, 1.18]}
                scale={35} 
                ref={meshRef}
            >
                <meshBasicMaterial map={texture} map-flipY={false} />
            </mesh>
        </>
    )
}

export default Himu_planet
