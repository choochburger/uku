import React from "react";
import ChordDiagram from "../ChordDiagram/ChordDiagram";
import "./Chart.css";

export default function Chart({ chords }) {
  return (
    <div className="Chart_container">
      {chords.map((chord, index) => {
        return <ChordDiagram key={index} {...chord} />;
      })}
    </div>
  );
}
