import React from "react";

function Home() {
  const numberOfRows = 20;
  const numberOfHexagonsPerRow = 100;

  const hexagons = [];

  for (let row = 0; row < numberOfRows; row++) {
    const isOffsetRow = row % 2 !== 0;

    for (let col = 0; col < numberOfHexagonsPerRow; col++) {
      hexagons.push(
        <div
          key={`${row}-${col}`}
          className={`hexagon ${isOffsetRow ? "next-row" : ""}`}
        ></div>
      );
    }
  }

  return (
    <main>
      <section>
        <div className="hive">{hexagons}</div>
        {/* <h1>Développez votre ru̇chesse</h1> */}
      </section>
    </main>
  );
}

export default Home;
