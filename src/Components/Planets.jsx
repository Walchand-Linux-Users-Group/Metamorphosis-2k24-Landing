import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sparkles, Shadow, ContactShadows, Billboard, Environment, BakeShadows, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { LayerMaterial, Depth } from 'lamina'
import Uranus from '../Planets/Uranus'
import Himu_planet from '../Planets/Himu_planet'
import { useRef, useState } from 'react'
import RandomComets from '../Planets/RandomComets'
import Sword from '../Planets/Sword'

const Planets = () => {
    const { nodes } = useGLTF('/Planets/scene.glb')
    const rocketTexture = useTexture('/Planets/rocket2.png')
    const [moving, setMoving] = useState(false)
    const rocketClicked = () => {
        if (moving) {
            setMoving(false)
        }
        else
            setMoving(true)
    }
    const rocketRef = useRef();

    // useFrame((state, delta) => {
    //     // Calculate rotation angle based on time
    //     const angle = state.clock.getElapsedTime() * 2; // Adjust the speed of rotation as needed

    //     // Calculate the rotation around a point other than the origin (0, 0, 0)
    //     const centerX = 55.76; // x-coordinate of the center point
    //     const centerY = 18.44; // y-coordinate of the center point
    //     const centerZ = -40.83; // z-coordinate of the center point
    //     const radius = 1; // Radius of the circular motion
    //     const newX = centerX + radius * Math.cos(angle);
    //     const newY = centerY + radius * Math.sin(angle);
    //     const newZ = centerZ; // Assuming rotation is in the xy-plane

    //     // Set the position of the rocket
    //     rocketRef.current.position.set(newX, newY, newZ);

    //     // Set the rotation of the rocket (adjust the Euler angles as needed)
    //     rocketRef.current.rotation.set(-5, angle, 0);

    // });

    return (
        <>
            <mesh
                geometry={nodes.Rocket_Ship_01.geometry}
                material={nodes.Rocket_Ship_01.material}
                position={[5.56, 1.1, 0.83]}
                rotation={[0, 0, 0]} scale={0.02}
                // ref={rocketRef}
                onClick={() => rocketClicked()}
            >
                <meshBasicMaterial map={rocketTexture} map-flipY={false} />
            </mesh>
            {/* <Himu_planet /> */}
            <RandomComets  />
            <Sword />

        </>
    )
}

export default Planets


{/* <Uranus /> */ }