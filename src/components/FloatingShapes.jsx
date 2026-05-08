import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';

export function FloatingShapes() {
  return (
    <group>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[2, 0, -2]}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial color="#444" speed={2} distort={0.3} wireframe />
        </mesh>
      </Float>
      
      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[-2, 1, -3]}>
          <torusGeometry args={[0.5, 0.2, 16, 100]} />
          <MeshWobbleMaterial color="#555" speed={1} factor={0.6} wireframe />
        </mesh>
      </Float>
    </group>
  );
}
