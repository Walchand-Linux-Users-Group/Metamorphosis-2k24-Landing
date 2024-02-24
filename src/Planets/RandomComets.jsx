import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Comet = ({ position }) => {
  const cometRef = useRef();
  const tailRef = useRef();
  const velocity = new THREE.Vector3(
    (Math.random() - 0.5) * 5,
    (Math.random() - 0.5) * 5,
    (Math.random() - 0.5) * 5
  );
  const tailSegments = 100; // Number of segments in the tail
  const tailGeometry = new THREE.BufferGeometry().setFromPoints(new Array(tailSegments).fill().map(() => new THREE.Vector3()));
  const tailPositions = tailGeometry.attributes.position.array;

  useEffect(() => {
    cometRef.current.add(tailRef.current);
    tailRef.current.position.set(0, 0, 0);
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const tailLine = new THREE.Line(tailGeometry, material);
    tailRef.current.add(tailLine);
  }, []);

  useFrame((state, delta) => {
    cometRef.current.position.add(velocity);

    // Update tail geometry
    tailPositions.copyWithin(3, 0);
    tailPositions[0] = cometRef.current.position.x;
    tailPositions[1] = cometRef.current.position.y;
    tailPositions[2] = cometRef.current.position.z;
    tailGeometry.attributes.position.needsUpdate = true;
  });

  return (
    <group ref={cometRef} position={position}>
      <mesh scale={0.0001}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="black" />
      </mesh>
      <group ref={tailRef} />
    </group>
  );
};

const RandomComets = ({ numberOfComets }) => {
  const [comets, setComets] = useState([]);

  const spawnComet = () => {
    const x = (Math.random() - 0.5) * 1000;
    const y = (Math.random() - 0.5) * 1000;
    const z = (Math.random() - 0.5) * 1000;
    const newComet = <Comet key={comets.length} position={[x, y, z]} />;
    setComets(prevComets => [...prevComets, newComet]);
  };

  useInterval(spawnComet, 100);

  return <>{comets}</>;
};

export default RandomComets;
