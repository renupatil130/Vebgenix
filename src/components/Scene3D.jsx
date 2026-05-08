import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ theme }) {
  const ref = useRef();
  const { mouse } = useThree();
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    const cols = new Float32Array(2000 * 3);
    const isLight = theme === 'light';
    
    for (let i = 0; i < 2000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      const mix = Math.random();
      if (isLight) {
        // Dark particles for light mode
        cols[i * 3] = mix * 0.2;
        cols[i * 3 + 1] = mix * 0.2;
        cols[i * 3 + 2] = mix * 0.3;
      } else {
        // Bright stars for dark mode
        cols[i * 3] = 0.9 + mix * 0.1;
        cols[i * 3 + 1] = 0.9 + mix * 0.1;
        cols[i * 3 + 2] = 1; 
      }
    }
    return [pos, cols];
  }, [theme]);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 15;
    ref.current.rotation.y += delta / 20;
    
    // React to mouse
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouse.x * 0.5, 0.08);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouse.y * 0.5, 0.08);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={theme === 'dark' ? THREE.AdditiveBlending : THREE.NormalBlending}
          opacity={theme === 'dark' ? 0.9 : 0.4}
        />
      </Points>
    </group>
  );
}

const Scene3D = ({ theme }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField theme={theme} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
