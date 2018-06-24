import React from "react";
import "./ChordDiagram.css";
import chords from "../chords.json";
import classNames from "classnames";

export default function ChordDiagram({ note, type = "" }) {
  const chordName = `${note}${type}`;
  const notes = chords[chordName];
  return (
    <div className="chord-diagram">
      <div className="chord-name">{chordName}</div>
      <svg viewBox="0 0 100 125" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(1, 0, 0, 1, -1, 12)">
          <line x1="13" y1="8" x2="13" y2="108" />
          <line x1="38" y1="8" x2="38" y2="108" />
          <line x1="63" y1="8" x2="63" y2="108" />
          <line x1="88" y1="8" x2="88" y2="108" />
          <line x1="13" y1="108" x2="88" y2="108" />
          <line x1="13" y1="8" x2="88" y2="8" />
          <line x1="13" y1="28" x2="88" y2="28" />
          <line x1="13" y1="48" x2="88" y2="48" />
          <line x1="13" y1="68" x2="88" y2="68" />
          <line x1="13" y1="88" x2="88" y2="88" />
        </g>
        {notes.map((note, i) => <Note key={i} stringNum={i} fretNum={note} />)}
      </svg>
    </div>
  );
}

function Note({ stringNum, fretNum }) {
  return (
    <circle
      className={classNames({ note: true, open: fretNum === 0 })}
      cx={11.5 + stringNum * 25}
      cy="10"
      r="7.5"
      style={{ cy: 10 + fretNum * 20 }}
    />
  );
}
