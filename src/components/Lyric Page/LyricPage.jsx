import React from 'react'

export default function LyricPage(props) {
  return (
    <div>
      {props.results && <h1>{props.results.artist.name}</h1>}
        {props.results && (
          <div>
            <h2>{props.results.track.name}</h2>
          </div>
        )}
        {props.results && (
          <div className="lyricsClass">
            <p>{props.results.track.text}</p>
          </div>
          )}
    </div>
  )
}
