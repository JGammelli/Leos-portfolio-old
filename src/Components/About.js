import React from "react";

class About extends React.Component {
  render() {
    return (
      <>
        <section className="aboutProfile">
          <div className="aboutName">
            <h2>About</h2>
            <h1>Leo Wahlund</h1>
            <p>Game Designer</p>
          </div>
          <div className="aboutBread">
            <p>Hi, I'm Leo!</p>
            <br />
            <p>
              I have had a passion for games ever since my parents bought a
              Gameboy Advance and Pokemon LeafGreen cartridge. I love crafting
              mechanics, testing and improving them until they play and feel the
              way they should. I am a social, happy and driven person who works
              best in teams where communication is free flowing and clear. I am
              looking for a place where I can grow as a designer and work
              together with a close knit team.
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default About;
