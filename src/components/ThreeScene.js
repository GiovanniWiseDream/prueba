import React from "react"; // Import missing hooks
import { Canvas } from "@react-three/fiber"; // Import missing functions
import { OrbitControls } from "@react-three/drei";

const ThreeScene = ({ children }) => {
  return (
    <Canvas>
      {children} <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
