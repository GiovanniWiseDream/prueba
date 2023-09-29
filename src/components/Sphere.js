import React from "react";
import { MeshMatcapMaterial, TextureLoader, BackSide } from "three"; // Importa las clases necesarias de Three.js
import InfoButton from "./InfoButton";
const Sphere = ({ texture, position }) => {
  const textureLoader = new TextureLoader();
  const textureMap = textureLoader.load(texture); // Carga la textura desde el archivo

  const material = new MeshMatcapMaterial({
    map: textureMap,
    side: BackSide,
  }); // Crea un material con la textura

  return (
    <mesh position={position} scale={[10, 10, 10]}>
      <sphereGeometry />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

export default Sphere;
