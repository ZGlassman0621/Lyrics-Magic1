import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="aboutBox">
        <h1 className="about1">Lyrics Magic</h1>
        <h3 className="about3">Why Build a Lyrics Generator?</h3>
        <p className="aboutP">
          I created Lyric Magic to help me play guitar. Oftentimes I'll be
          reading through guitar chords or tabs online that will offer few to no
          lyrics. Having Lyrics Magic at my disposal really alleviates the need
          to go search other lyrics pages.
        </p>
        <br></br>
        <h3 className="about3">What Makes this Lyrics Site Stand Out?</h3>
        <p className="aboutP">
          Lyrics Magic scores over the other available lyric finding sites by
          providing quick load times Better yet, browse Lyrics Magic to your
          heart's content, never having to worry about losing bandwidth or time
          to advertisements!
        </p>
        <br></br>
        <h3 className="about3">Where Can I See More of Your Work?</h3>
        <p className="aboutP">
          You can check out the rest of my portfolio on my GitHub account [link]
          or on my personal website [link]. This site is a work in progress, so
          check back here from time to time to see what changes have been made!
        </p>
      </div>
    </>
  );
};

export default About;
