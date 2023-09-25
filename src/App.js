import ThreeScene from "./components/ThreeScene";
import Sphere from "./components/Sphere";
import InfoButton from "./components/InfoButton";
import React, { useState } from "react";
function App() {
  const [texture, setTexture] = useState("/habitacion.jpg"); // Estado para la textura
  const changeTexture = (contact) => {
    setTexture(contact); // Cambia la textura por la que desees aquí
  };
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <ThreeScene>
        <color attach="background" args={["#242424"]} />
        <Sphere color="#ff0000" position={[0, 0, 0]} texture={texture}></Sphere>
        <InfoButton
          color="#ff0000"
          position={[
            -8.024638206901772, -2.8511884254256574, -5.116163559866413,
          ]}
          changeTexture={changeTexture} // Pasa la función como prop
        />
        <ambientLight />
      </ThreeScene>
    </div>
  );
}

export default App;
