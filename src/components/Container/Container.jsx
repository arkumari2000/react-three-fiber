import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere } from '../Sphere/Sphere';
import Controls from '../Controls/Controls';

import './styles.css'

function Container() {
  return (
    <div id="container">
      <Canvas camera={{ position: [0, 0, 0.1] }}>
        <Controls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          autoRotate
          rotateSpeed={-0.5}
        />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Container;
