import ThreeScene from "./components/ThreeScene";
import Sphere from "./components/Sphere";

function App() {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <ThreeScene>
        <color attach="background" args={["#242424"]} />
        <Sphere
          color="#ff0000"
          position={[0, 0, 0]}
          texture={"/habitacion.jpg"}
        />
        <ambientLight />
      </ThreeScene>
    </div>
  );
}

export default App;
