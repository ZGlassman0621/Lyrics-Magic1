import React, { Component } from "react";
import "./App.css";
import Lyrics from "./Lyrics";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      artist: "",
      song: "",
    };
  }
  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = async (e) => {
    console.log(this.state);
    let results = await axios.get(
      `https://orion.apiseeds.com/api/music/lyric/${this.state.artist}/${this.state.song}?apikey=OEOsB3dM7mbVzGgWY78cl3uRUBm3gCj3em3NLARPKhkW3Lm5ydxgODkSaGDpHx7Q`
    );
    console.log(results);
  };
  render() {
    return (
      <div className="App">
        <Lyrics
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
