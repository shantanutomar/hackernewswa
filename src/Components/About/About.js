import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <h4>Simple Hacker News Web Application</h4>
        <p>
          Hi, It's me Shantanu. This is an example of a WA built using React,
          Webpack, and some opinionated tools. <br />
          <br />
          <br />
          Made with kindness in India.
        </p>
        <hr />
      </div>
    );
  }
}

export default About;
