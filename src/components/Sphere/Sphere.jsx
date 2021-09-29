import * as THREE from 'three';
import React, { useState } from 'react';
import { useLoader } from 'react-three-fiber';

export const Sphere = () => {
  const [set, setSet] = useState(true);
  const texture1 = useLoader(THREE.TextureLoader, '/download.jpeg');
  const texture2 = useLoader(THREE.TextureLoader, '/pano.jpeg');
  const texture = set ? texture1 : texture2;
  return (
      <mesh onClick={() => setSet(!set)}>
        <sphereBufferGeometry attach='geometry' args={[500, 60, 40]} />
        <meshBasicMaterial
          attach='material'
          map={texture}
          side={THREE.BackSide}
        />
      </mesh>
  );
};
