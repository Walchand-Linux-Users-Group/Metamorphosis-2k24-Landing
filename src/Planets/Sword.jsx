import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Sword = () => {
    const { nodes, materials } = useGLTF('/Wargame/devilish_sword.glb')
    const texture = useTexture('/Wargame/Text_0.png')
    // console.log(nodes);
    const rocketRef1 = useRef();
    const rocketRef2 = useRef();
    const handleSword1 = () => {
        window.location.href = 'https://gopherboard.wcewlug.org/'
    }
    const handleSword2 = () => {
      window.location.href = 'https://metagames.wcewlug.org/'
  } 

    useFrame((state, delta) => {
        rocketRef1.current.rotation.z += 0.005; 
    });
    useFrame((state, delta) => {
        rocketRef2.current.rotation.z -= 0.005; 
    });
  return (
    <>
    <group  >
      <group scale={0.60} rotation={[-3*Math.PI/8,Math.PI,0]} position={[-100,35,-90]} ref={rocketRef1} onClick={handleSword1} >
        <mesh geometry={nodes.flame__0.geometry} material={materials.flame__0} />
        <mesh geometry={nodes.Devilish_sword_Material_0.geometry} >
            <meshBasicMaterial map={texture} map-flipY={false} />
        </mesh>
      </group>
      <group scale={0.6} rotation={[-3*Math.PI/8,Math.PI,0]} position={[110,35,-90]} ref={rocketRef2} onClick={handleSword2}>
        {/* <mesh geometry={nodes.flame__0.geometry} material={materials.flame__0} /> */}
        <mesh geometry={nodes.Devilish_sword_Material_0.geometry}  >
            <meshBasicMaterial map={texture} map-flipY={false} />
        </mesh>
      </group>
     
    </group>
    </> 
  )
}

export default Sword
