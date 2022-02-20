import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section id="contactSection">
        <div className="contactWrap">
          <div className="contactBox">
            <p>Get in touch!</p>
            <h1>Contact:</h1>
          </div>
          <div className="contactInfo">
            <p>
              Git: <a href="https://github.com/LostmyCigar">LostmyCigar</a>
            </p>
            <br />
            <p>Email: leo.wahlund@gmail.com</p>
            <br />
            <p>Phone: +46 76 039 76 64</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
