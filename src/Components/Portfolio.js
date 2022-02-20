import React from "react";
import ProjectInfo from "./ProjectInfo";

class Portfolio extends React.Component {
  render() {
    return (
      <>
        <section id="profileSection">
          <div className="portfolieName">
            <h1>Portfolio</h1>
            <p>Game Designer</p>
            <p>Leo Wahlund</p>
          </div>
        </section>
        <section id="portfolieSection">
          <ProjectInfo />
        </section>
      </>
    );
  }
}

export default Portfolio;
