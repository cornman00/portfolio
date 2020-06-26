import React, { Component } from "react";
import Profile from "../../Images/profile.png";

export class CenterBox extends Component {
  render() {
    return (
      <div className="main-center-box">
        <div className="left-center-box">
          <img src={Profile} alt="Profile picture"></img>
          <h2>Seokhyun Kim</h2>
          <div className="underline"></div>
          <p style={{ marginTop: "20px", marginBottom: "0px" }}>(Future)</p>
          <p className="job-title">Software Engineer</p>
          <div className="icons">
            <ul>
              <li>
                <a
                  href="https://github.com/cornman00"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/seokhyun-kim-09070611b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-center-box">
          <p id="header-1">Hello</p>
          <p id="header-2">Here's who I am &amp; what I do</p>
          <div className="buttons">
            <button id="button1" className="btn btn-primary ">
              RESUME
            </button>
            <button id="button2" className="btn btn-primary">
              PROJECTS
            </button>
          </div>
          <p id="about-me">
            I recently graduated from UIUC and received a bachelor’s degree in
            Engineering Physics with a minor in Computer Science. I am looking
            for an opportunity to develop my career as a software engineer.
          </p>
        </div>
      </div>
    );
  }
}

export default CenterBox;
