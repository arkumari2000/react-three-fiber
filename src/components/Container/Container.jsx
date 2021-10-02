import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere } from '../Sphere/Sphere';
import Controls from '../Controls/Controls';

import './styles.css';
import { BottomBar } from '../BottomBar/BottomBar';
import { LeftBar } from '../LeftBar/LeftBar';
import { ZoomBar } from '../ZoomBar/ZoomBar';

function Container() {
  return (
    <div id='container' data-testid='container'>
      <div id='canvas'>
        <Canvas camera={{ position: [0, 0, 0.1] }} role='canvas'>
          <Controls
            enableZoom={false}
            enablePan={false}
            enableDamping
            dampingFactor={0.2}
            autoRotate
            rotateSpeed={-0.5}
            data-testid='control'
          />
          <Suspense fallback={null}>
            <Sphere />
          </Suspense>
        </Canvas>
      </div>
      <LeftBar></LeftBar>
      <ZoomBar></ZoomBar>
      <BottomBar></BottomBar>
    </div>
  );
}

export default Container;
