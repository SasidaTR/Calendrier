import React from "react";

function Home() {
  const numberOfRows = 20; // Nombre de rangées
  const numberOfHexagonsPerRow = 100; // Nombre d'hexagones par rangée

  const hexagons = [];

  for (let row = 0; row < numberOfRows; row++) {
    // Déterminez si cette rangée doit être décalée
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
      <section className="hive">{hexagons}</section>
    </main>
  );
}

export default Home;
