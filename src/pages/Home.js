import React from "react";

function Home() {
  const rows = 10;
  const hexagonsPerRow = 10;

  const hexagons = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < hexagonsPerRow; col++) {
      hexagons.push(<div key={`${row}-${col}`} className="hexagon"></div>);
    }
  }

  return (
    <main>
      <section className="hive">{hexagons}</section>
    </main>
  );
}

export default Home;
