import React, { Component } from "react";
import "./App.css";
import Lyrics from "./components/Navigation Bar/Lyrics";
import axios from "axios";
import ReactBreakpoints from "react-breakpoints";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";
import NavBar from "./components/Navigation Bar/Navigation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LyricPage from "./components/Lyric Page/LyricPage";

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
    this.props.history.push("/Lyrics");
  };
  render() {
    return (
      <div className="App">
        <div className="blank">
          <div className="NavBar">
            <NavBar />
          </div>
          <Route path="/" exact>
            <Lyrics
              handleChange={this.handleChange}
              handleClick={this.handleClick}
            />
          </Route>
          <Route path="/Lyrics" exact>
            <LyricPage results={this.state.results} />
          </Route>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);

// const breakpoints = {
//   mobile: 320,
//   mobileLandscape: 480,
//   tablet: 768,
//   tabletLandscape: 1024,
//   desktop: 1200,
//   desktopLarge: 1500,
//   desktopWide: 1920,
// };

// ReactDOM.render(
//   <ReactBreakpoints breakpoints={breakpoints}>
//     <App />
//   </ReactBreakpoints>,
//   document.getElementById("root")
// );
