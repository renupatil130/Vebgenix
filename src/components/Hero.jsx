import React from 'react';
import { Canvas } from '@react-three/fiber';
import HeroContent from './HeroContent';
import { FloatingShapes } from './FloatingShapes';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-3d-layer" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingShapes />
        </Canvas>
      </div>
      <div className="hero-content-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
