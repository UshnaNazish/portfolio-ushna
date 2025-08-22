import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ count = 1000, currentSection }) => {
  const mesh = useRef();
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    mesh.current.rotation.y = Math.cos(time * 0.1) * 0.1;
    
    // Different animations based on section
    if (currentSection === 'home') {
      mesh.current.position.y = Math.sin(time * 0.5) * 0.5;
    } else if (currentSection === 'about') {
      mesh.current.rotation.z = Math.sin(time * 0.2) * 0.1;
    } else if (currentSection === 'projects') {
      mesh.current.scale.x = 1 + Math.sin(time * 0.3) * 0.1;
      mesh.current.scale.y = 1 + Math.cos(time * 0.3) * 0.1;
    }
  });

  return (
    <Points ref={mesh} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#667eea"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const Background3D = ({ currentSection }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      opacity: 0.3
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField currentSection={currentSection} />
      </Canvas>
    </div>
  );
};

export default Background3D;
