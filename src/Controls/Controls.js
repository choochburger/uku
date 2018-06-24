import React, { Component } from "react";
import "./Controls.css";

const chordNotes = [
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab"
];

const chordTypes = ["major", "minor", "7"];

export default class Controls extends Component {
  state = {
    selectedChordNote: chordNotes[0],
    selectedChordType: chordTypes[0]
  };

  handleChordNoteChange = event => {
    this.setState({ selectedChordNote: event.target.value });
  };

  handleChordTypeChange = event => {
    this.setState({ selectedChordType: event.target.value });
  };

  handleAddChord = () => {
    this.props.onAddChord(
      this.state.selectedChordNote,
      this.state.selectedChordType
    );
  };

  render() {
    return (
      <div className="Controls_container">
        <select
          className="Controls_select"
          onChange={this.handleChordNoteChange}
        >
          {chordNotes.map(chordName => {
            return <option>{chordName}</option>;
          })}
          }
        </select>
        <select
          className="Controls_select"
          onChange={this.handleChordTypeChange}
        >
          {chordTypes.map(chordType => {
            return <option key={chordType}>{chordType}</option>;
          })}
        </select>
        <button className="Controls_addButton" onClick={this.handleAddChord}>
          Add chord
        </button>
      </div>
    );
  }
}
