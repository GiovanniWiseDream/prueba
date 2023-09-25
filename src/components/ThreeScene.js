import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Raycaster, Vector2, MOUSE } from "three";
import React, { useEffect } from "react";

const MouseRaycaster = () => {
  const { camera, scene } = useThree();

  useEffect(() => {
    const handleMouseDown = (event) => {
      event.preventDefault();
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      const raycaster = new Raycaster();
      raycaster.setFromCamera(new Vector2(mouseX, mouseY), camera);

      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        const coordinates = intersects[0].point;
        console.log(
          "(" +
            coordinates.x +
            ", " +
            coordinates.y +
            ", " +
            coordinates.z +
            ")"
        );
      }
    };

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [camera, scene]);

  return null; 
};

const ThreeScene = ({ children }) => {
  return (
    <Canvas camera={{ position: [0, 0, 0.01] }}>
      <MouseRaycaster />
      {children}
      <OrbitControls enableDamping={true} />
    </Canvas>
  );
};

export default ThreeScene;
