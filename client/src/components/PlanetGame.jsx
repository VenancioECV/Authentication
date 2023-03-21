import React, { useState } from "react";


const planetsData = [
  {
    name: "Mercury",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/640px-Mercury_in_true_color.jpg",
    info: "Mercury is the smallest and innermost planet in the Solar System.",
    x: 250,
    y: 200,
  },
  {
    name: "Venus",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEHYBg4ZRM9sb7dM75NfGZAHiAzP1TXvw0g&usqp=CAU",
    info: "Venus is the second planet from the Sun and is the hottest planet in the solar system.",
    x: 350,
    y: 150,
  },
  {
    name: "Earth",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg",
    info: "Earth is the third planet from the Sun and is the only known planet to support life.",
    x: 450,
    y: 100,
  },
  {
    name: "Mars",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg",
    info: "Mars is the fourth planet from the Sun and is known as the Red Planet.",
    x: 550,
    y: 150,
  },
  {
    name: "Jupiter",
    image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/D8A9/production/_95556455_2fb4ded4-93a0-423c-b12d-734a2b93d507.jpg",
    info: "Jupiter is the largest planet in the Solar System and has more than 79 moons.",
    x: 650,
    y: 200,
  },
  {
    name:"saturn",
    info:"it has rings",
    image:"https://stsci-opo.org/STScI-01EVST7E227F3CEB3YP49AMVGX.png",
    x: 750,
    y: 250,
  },
  {
    name: "Uranus",
    info: "Uranus is the seventh planet from the Sun and is the third-largest planet in the solar system.",
    image: "https://images.immediate.co.uk/production/volatile/sites/25/2020/04/Hubble_Uranus-7f9693c.jpg",
  },
];

const Game = () => {
  const [planetInfo, setPlanetInfo] = useState(null);

  const handlePlanetClick = (planet) => {
    setPlanetInfo(planet);
  };

  return (
    <div className="planetary-game">
      {planetsData.map((planet) => (
        <img
          key={planet.name}
          src={planet.image}
          alt={planet.name}
          className="planet"
          style={{ left: planet.x, top: planet.y, width:75, height:75, margin: 5 }}
          onClick={() => handlePlanetClick(planet)}
        />
      ))}
      {planetInfo && (
        <div className="planet-info">
          <h2>{planetInfo.name}</h2>
          <img src={planetInfo.image} alt={planetInfo.name} style={{width:500 }}/>
          <p>{planetInfo.info}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
