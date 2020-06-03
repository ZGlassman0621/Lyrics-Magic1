import React from "react";

export default function Lyrics(props) {
  return (
    <div>
      <input
        type="text"
        class="artistName"
        placeholder="Artist Name"
        name="artist"
        onChange={props.handleChange}
      />
      <input
        type="text"
        class="songTitle"
        placeholder="Song Title"
        name="song"
        onChange={props.handleChange}
      />
      <button onClick={props.handleClick}>
        Submit
      </button>
    </div>
  );
}
