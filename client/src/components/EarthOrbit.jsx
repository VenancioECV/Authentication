import React, { useRef, useEffect } from 'react';

const canvasWidth = 600;
const canvasHeight = 600;
const sunRadius = 30;
const earthRadius = 8;

const getEllipseCoordinates = (a, b, angle) => {
  const x = a * Math.cos(angle);
  const y = b * Math.sin(angle);
  return { x, y };
};

const drawEllipse = (ctx, x, y, a, b) => {
  const step = Math.PI / 45;
  ctx.beginPath();
  const startAngle = 0;
  const endAngle = 2 * Math.PI;
  ctx.ellipse(x, y, a, b, 0, startAngle, endAngle);
  ctx.stroke();
};

const drawSun = (ctx, x, y, radius) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'yellow';
  ctx.fill();
};

const drawEarth = (ctx, x, y, radius) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'blue';
  ctx.fill();
};

const EarthOrbit = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let angle = 0;
    const sunX = canvasWidth / 2;
    const sunY = canvasHeight / 2;
    const earthA = 200;
    const earthB = 180;
    let earthX = sunX + earthA;
    let earthY = sunY;
    const earthOrbitSpeed = 0.01;
    let orbitPoints = [];

    const draw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      drawSun(ctx, sunX, sunY, sunRadius);

      const { x, y } = getEllipseCoordinates(earthA, earthB, angle);
      earthY = sunY + y;
      earthX = sunX + x;

      drawEarth(ctx, earthX, earthY, earthRadius);

      orbitPoints.push([earthX, earthY]);

      ctx.beginPath();
      ctx.moveTo(orbitPoints[0][0], orbitPoints[0][1]);
      for (let i = 1; i < orbitPoints.length; i++) {
        ctx.lineTo(orbitPoints[i][0], orbitPoints[i][1]);
      }
      ctx.stroke();

      angle += earthOrbitSpeed;
      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
  }, []);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
};

export default EarthOrbit;
