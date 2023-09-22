import { Canvas } from "@react-three/fiber"; // Import missing functions
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const ThreeScene = ({ children }) => {
  return (
    <Canvas camera={{ position: [0, 0, 0.0000001] }}>
      {children} <OrbitControls />
      <PerspectiveCamera />
    </Canvas>
  );
};

export default ThreeScene;
