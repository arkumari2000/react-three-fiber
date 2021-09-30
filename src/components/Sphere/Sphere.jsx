import * as THREE from 'three';
import React from 'react';
import { useLoader } from 'react-three-fiber';

export const Sphere = () => {
  const texture = useLoader(THREE.TextureLoader, '/download.jpeg');
  return (
      <mesh>
        <sphereBufferGeometry attach='geometry' args={[500, 60, 40]} />
        <meshBasicMaterial
          attach='material'
          map={texture}
          side={THREE.BackSide}
        />
      </mesh>
  );
};
