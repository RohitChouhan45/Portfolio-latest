import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';

const ParticleSphere = (props) => {
  const ref = useRef();
  
  // Create random points inside a sphere
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-background pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleSphere />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
