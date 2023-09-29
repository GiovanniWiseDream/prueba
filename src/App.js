import ThreeScene from "./components/ThreeScene";
import Sphere from "./components/Sphere";
import InfoButton from "./components/InfoButton";
import React, { useState } from "react";
import data from "./data/data.json"; // Ruta correcta al archivo JSON
import { Environment } from "@react-three/drei";
import { act } from "react-dom/test-utils";

function App() {
  const [texture, setTexture] = useState("/Suite Premiere 209/1_CORREGIDA.jpg");
  const [actual, setActual] = useState(0); // Utilizar el estado para almacenar el valor actual

  const changePlace = (newActual) => {
    setActual(newActual);
    console.log(actual);
  };
  const changeTexture = (contact) => {
    setTexture(contact);
  };
  const handleClick = () => {
    console.log("aaaaaaaaa");
  };
  const point = data.points;
  const places = data.places;
  console.log(point[0]);
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <ThreeScene>
        <color attach="background" args={["#ffffff"]} />
        <Sphere color="#ff0000" position={[0, 0, 0]} texture={texture}></Sphere>
        {places[actual].puntos.map((index) => (
          <InfoButton
            position={[
              point[index].position[0],
              point[index].position[1],
              point[index].position[2],
            ]}
            place={point[index].place}
            rotationX={[point[index].rotationX]}
            rotationY={[point[index].rotationY]}
            image={places[point[index].place].image}
            changeTexture={changeTexture}
            changePlace={changePlace}
          />
        ))}

        <ambientLight />
      </ThreeScene>
    </div>
  );
}

export default App;
