import React, { useState, useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Euler } from "three"; // Importa Euler de three

const InfoButton = ({ color, position, changeTexture }) => {
  const [isHovered, setIsHovered] = useState(false);
  const meshRef = useRef(); // Agregamos una referencia al mesh
  const { viewport } = useThree();
  const initialRotation = new Euler(0.5, -0.8, 0, "XYZ");

  const handleClick = () => {
    console.log("aaaaaaaaa");
    changeTexture("/ovo.jpg"); // Llama a la función para cambiar la textura
  };

  const handlePointerOver = () => {
    setIsHovered(true);
  };

  const handlePointerOut = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "w") {
        meshRef.current.position.z += 0.01;
      } else if (event.key === "s") {
        meshRef.current.position.z -= 0.01;
      } else if (event.key === "a") {
        meshRef.current.position.x -= 0.1;
      } else if (event.key === "d") {
        meshRef.current.position.x += 0.1;
      } else if (event.key === "q") {
        meshRef.current.position.y += 0.1;
      } else if (event.key === "e") {
        meshRef.current.position.y -= 0.1;
      }
      //rotacion
      else if (event.key === "4") {
        meshRef.current.rotation.y += 0.1;
      } else if (event.key === "6") {
        meshRef.current.rotation.y -= 0.1;
      } else if (event.key === "8") {
        meshRef.current.rotation.x += 0.1;
      } else if (event.key === "2") {
        meshRef.current.rotation.x -= 0.1;
      } else if (event.key === "0") {
        console.log(meshRef.current.rotation);
        console.log(meshRef.current.position);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useFrame(() => {
    // Cambia la opacidad en función de si el ratón está sobre la esfera o no
    if (isHovered) {
      // Si el ratón está sobre la esfera, establece la opacidad en 1
      meshRef.current.material.opacity = 0.7;
    } else {
      // Si el ratón no está sobre la esfera, establece la opacidad en 0.5
      meshRef.current.material.opacity = 0.2;
    }
  });

  return (
    <mesh
      ref={meshRef} // Asignamos la referencia al mesh
      position={position}
      scale={[0.5, 0.5, 0.5]}
      rotation={initialRotation} // Aplica la rotación inicial
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <ringGeometry />
      <meshStandardMaterial
        attach="material"
        transparent
        opacity={0.2}
        color={"#242424"}
      />
    </mesh>
  );
};

export default InfoButton;
