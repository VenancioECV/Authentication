/*import React from "react";
/* import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sun from "./Sun";
import Planet from "./Planet"; 

function RenderPlanets() {
  // Define some constants for the planets
  const planets = [
    {
      name: "Mercury",
      color: "gray",
      radius: 0.5,
      distance: 10,
      speed: 0.01,
    },
    {
      name: "Venus",
      color: "yellow",
      radius: 1,
      distance: 15,
      speed: 0.008,
    },
    {
      name: "Earth",
      color: "blue",
      radius: 1.2,
      distance: 20,
      speed: 0.006,
    },
    {
      name: "Mars",
      color: "red",
      radius: 0.8,
      distance: 25,
      speed: 0.004,
    },
    // Add more planets here
  ];

  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, -10, -10]} />

        {/* Render the sun /}
        <Sun />

        {/ Render the planets }
        {planets.map((planet) => (
          <Planet key={planet.name} {...planet} />
        ))}

    </Canvas>
  );
}

export default RenderPlanets; */