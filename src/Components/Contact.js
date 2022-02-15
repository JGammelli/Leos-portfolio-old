import React from "react";

class Contact extends React.Component{
    render(){
        return(
            <section id="contactSection">
                    <div className="contactWrap">
                        <div className="contactBox">
                            <p>Get in touch!</p>
                            <h1>Contact:</h1>
                        </div>
                        <div className="contactInfo">
                            <h3>Leo Wahlund</h3>
                            <p>Email: leo.wahlund@gmail.com</p>
                        </div>
                        <div className="siteByInfo">
                            <h4>Site by</h4>
                            <p>Judith Gammelli</p>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Contact;