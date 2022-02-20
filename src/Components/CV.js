import React from "react";

class CV extends React.Component {
  render() {
    return (
      <section className="cvSection">
        <div className="cvWrap">
          <div className="headerBox">
            <h1>Cv</h1>
            <p>Leo Whalund</p>
          </div>
          <div className="educationBox">
            <h2>Education</h2>
            <p>
              Bachelor's Degree in Game design - Högskolan i Skövde (graduation
              spring 2022)
            </p>
          </div>
          <div className="softwareBox">
            <h2>Software skills</h2>
            <ul>
              <li>Unity</li>
              <li>Game Maker</li>
              <li>Visual Studio</li>
              <li>Git</li>
              <li>Word/Google Docs</li>
            </ul>
          </div>
          <div className="programBox">
            <h2>Programming skills</h2>
            <ul>
              <li>C#</li>
              <li>C++</li>
              <li>GML</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="languageBox">
            <h2>Langues</h2>
            <ul>
              <li>Swedish - Native</li>
              <li>English - Fluent</li>
            </ul>
          </div>
          <div className="otherBox">
            <h2>General skills</h2>
            <ul>
              <li>Exellent comunication and organisation skills</li>
              <li>Experience writing Game Design Documents</li>
              <li>Creative problemsolver</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default CV;
