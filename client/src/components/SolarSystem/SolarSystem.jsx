import React, { useState, useEffect, useRef } from "react";
import "./SolarSystem.css";

const planets = [
  {
    name: "Mercury",
    radius: 5,
    orbitRadius: 12,
    color: "#9e9e9e"
  },
  {
    name: "Venus",
    radius: 7,
    orbitRadius: 17,
    color: "#fdd835"
  },
  {
    name: "Earth",
    radius: 12,
    orbitRadius: 20,
    color: "#03a9f4"
  },
  {
    name: "Mars",
    radius: 10,
    orbitRadius: 26,
    color: "#ff5722"
  },
  {
    name: "Jupiter",
    radius: 20,
    orbitRadius: 33,
    color: "#f44336"
  },
  {
    name: "Saturn",
    radius: 18,
    orbitRadius: 40,
    color: "#ffc107"
  },
  {
    name: "Uranus",
    radius: 16,
    orbitRadius: 43,
    color: "#4caf50"
  },
  {
    name: "Neptune",
    radius: 15,
    orbitRadius: 48,
    color: "#2196f3"
  }
];

function SolarSystem() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;

    const drawPlanet = (planet, angle) => {
      const { radius, orbitRadius, color } = planet;
      const x = Math.cos(angle) * orbitRadius;
      const y = Math.sin(angle) * orbitRadius;
      context.beginPath();
      context.fillStyle = color;
      context.arc(x + canvas.width / 2, y + canvas.height / 2, radius, 0, 2 * Math.PI);
      context.fill();
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const radiusFactor = 0.00005;
      const currentTimeInMs = currentTime.getTime();
      planets.forEach((planet, index) => {
        const orbitDuration = (index + 1) * 10000;
        const angle = (2 * Math.PI * (currentTimeInMs % orbitDuration)) / orbitDuration;
        drawPlanet(planet, angle);
      });
      setCurrentTime(new Date());
      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [currentTime]);

  return <canvas ref={canvasRef} width={300} height={300} />;
}

export default SolarSystem;
