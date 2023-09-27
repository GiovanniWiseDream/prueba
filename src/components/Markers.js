import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Raycaster, Vector2, MOUSE } from "three";

const Markers = ({ scene, camera, raycaster, onMarkerClick }) => {
  const pointer = new Vector2();
  const intersections = [];

  const handlePointerDown = (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const filteredIntersections = raycaster.intersectObject(
      scene.getObjectByName("markers")
    );

    if (filteredIntersections.length > 0) {
      const intersection = filteredIntersections[0];
      const markerId = intersection.instanceId;
      onMarkerClick(markerId);
    }
  };

  return (
    <Canvas
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
      onMouseDown={handlePointerDown}
    />
  );
};

export default Markers;
