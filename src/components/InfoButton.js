import React from "react";

const InfoButton = ({ color, position, changeTexture }) => {
  const handleClick = () => {
    console.log("aaaaaaaaa");
    changeTexture("/ovo.jpg"); // Llama a la función para cambiar la textura
  };

  return (
    <mesh position={position} scale={[0.5, 0.5, 0.5]} onClick={handleClick}>
      <sphereGeometry />
      <meshStandardMaterial color={"#3f0632"} />
    </mesh>
  );
};

export default InfoButton;
