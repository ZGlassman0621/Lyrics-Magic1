import React, { Component } from "react";
import "./App.css";
import Lyrics from "./components/Lyrics";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      artist: "",
      song: "",
      results: null,
      lyrics: "",
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
    
    this.setState({
      results: results.data.result,
    });
    console.log(results.data);
  };
  render() {
    console.log(this.state.results);
    return (
      <div className="App">
        <Lyrics
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        {this.state.results && <h1>{this.state.results.artist.name}</h1>}
        {this.state.results && (
          <div>
            <h1>{this.state.results.track.name}</h1>
          </div>
        )}
        {this.state.results && (
          <div className="lyricsClass">
            <h2>{this.state.results.track.text}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default App;
