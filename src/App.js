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
          rotationX={[0.5]}
          rotationY={[-0.8]}
          changeTexture={changeTexture}
          image={"/ovo.jpg"}
          wireframe
        />
        <InfoButton
          position={[
            -7.231060231062356, -3.2326191977033227, -2.121345581163022,
          ]}
          rotationX={[1.0999999999999999]}
          rotationY={[0.7999999999999999]}
          changeTexture={changeTexture}
          image={"/piscina.jpg"}
          wireframe
        />
        <ambientLight />
      </ThreeScene>
    </div>
  );
}

export default App;
