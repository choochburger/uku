import React, { Component } from "react";
import Controls from "./Controls/Controls";
import Chart from "./Chart/Chart";
import "./App.css";

class App extends Component {
  state = { chords: [] };
  handleAddChord = (note, type) => {
    const newChord = `${note} ${type}`;
    this.setState({ chords: this.state.chords.concat(newChord) });
  };
  render() {
    return (
      <div className="App">
        <Controls onAddChord={this.handleAddChord} />
        <Chart chords={this.state.chords} />
      </div>
    );
  }
}

export default App;
