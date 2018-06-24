import React, { Component } from "react";
import "./Chart.css";

export default function Chart({ chords }) {
  return (
    <div className="Chart_container">
      {chords.map(chord => {
        return <span className="Chart_chord">{chord}</span>;
      })}
    </div>
  );
}
