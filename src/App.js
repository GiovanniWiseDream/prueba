import ThreeScene from "./components/ThreeScene";
import Sphere from "./components/Sphere";
import InfoButton from "./components/InfoButton";
import React, { useState } from "react";
import data from "./data/data.json"; // Ruta correcta al archivo JSON

function App() {
  const point = data.points;
  const places = data.places;
  const [texture, setTexture] = useState(places[0].image);
  const [actual, setActual] = useState(0); // Utilizar el estado para almacenar el valor actual

  const changePlace = (newActual) => {
    setActual(newActual);
    console.log(actual);
  };
  const changeTexture = (contact) => {
    setTexture(contact);
  };

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
