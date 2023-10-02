import React, { Suspense, useEffect, useState } from "react";
import { MeshMatcapMaterial, TextureLoader, BackSide } from "three"; // Importa las clases necesarias de Three.js

const Sphere = ({ texture, position }) => {
  const [textureMap, setTextureMap] = useState(null);

  useEffect(() => {
    const textureLoader = new TextureLoader();
    textureLoader.load(texture, (texture) => {
      setTextureMap(texture);
    });
  }, [texture]);

  if (!textureMap) {
    return null; // Si la textura aún no se ha cargado, no renderizar nada
  }

  const material = new MeshMatcapMaterial({
    map: textureMap,
    side: BackSide,
  });

  return (
    <mesh position={position} scale={[10, 10, 10]} material={material}>
      <sphereGeometry />
    </mesh>
  );
};

const LazyLoadedSphere = ({ texture, position }) => {
  return (
    <Suspense fallback={null}>
      <Sphere texture={texture} position={position} />
    </Suspense>
  );
};

export default LazyLoadedSphere;
