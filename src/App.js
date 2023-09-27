import ThreeScene from "./components/ThreeScene";
import Sphere from "./components/Sphere";
import InfoButton from "./components/InfoButton";
import React, { useState } from "react";
import Markers from "./components/Markers";
import { useProgress } from "@react-three/drei";
function App() {
  const [texture, setTexture] = useState("/habitacion.jpg");
  const [infoButtonVisible, setInfoButtonVisible] = useState(false);

  const changeTexture = (contact) => {
    setTexture(contact);
  };

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <ThreeScene>
        <color attach="background" args={["#ffffff"]} />
        <Sphere color="#ff0000" position={[0, 0, 0]} texture={texture}></Sphere>
        <InfoButton
          position={[
            7.1310602310623565, -4.532619197703322, -4.373150995372805,
          ]}
          changeTexture={changeTexture}
          wireframe
        />
        <ambientLight />
      </ThreeScene>
    </div>
  );
}

export default App;
