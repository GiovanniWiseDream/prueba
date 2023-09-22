import ThreeScene from "./components/ThreeScene";
import Sphere from "./components/Sphere";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App" style={{ height: "100vh", overflow: "hidden" }}>
      <ThreeScene>
        <color attach="background" args={["#242424"]} />
        <Sphere color="#00ff00" position={[1, 0, 0]} />
        <Sphere color="#ff0000" position={[-1, 0, 0]} />
        <ambientLight />
        <OrbitControls />
      </ThreeScene>
    </div>
  );
}

export default App;
