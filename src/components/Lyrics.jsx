import React from "react";
import "./Lyrics.css";

export default function Lyrics(props) {
  return (
    <div className="field">
      <h1 className="title">Welcome to Lyrics Magic</h1>
      <br></br>
      <input
        type="text"
        class="artistName"
        placeholder="Artist Name"
        name="artist"
        onChange={props.handleChange}
      />
      <br></br>
      <br></br>
      <input
        type="text"
        class="songTitle"
        placeholder="Song Title"
        name="song"
        onChange={props.handleChange}
      />
      <br></br>
      <br></br>
      <button className="button" onClick={props.handleClick}>Submit</button>
    </div>
  );
}
