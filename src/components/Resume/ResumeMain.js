import React, { Component } from "react";

export class ResumeMain extends Component {
  render() {
    return (
      <div className="resume-main-box">
        {/* Header Section */}
        <div className="resume-header">
          <div className="header-wrapper">
            <div className="resume-bullet"></div>
            <div className="resume-name">Resume</div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <div>
            <h2 id="education-tag">Experience</h2>
          </div>
          <div className="education-box-1">
            <div className="left-box">
              <div className="college-years">2017-2019</div>
              <div className="college-name">
                University of Illinois at Urbana - Champaign
              </div>
              <div className="college-degree">Bachelor of Science</div>
              <div className="">Major: </div>
              <div className="major">Engineering Physics</div>
              <div className="">Minor: </div>
              <div className="minor">Computer Science</div>
            </div>
            <div className="right-box">
              <p>
                I took computer science courses such as data structures,
                computer architecture, etc while minoring in computer science
                during my university years. In addition to that I also took
                numerical methods and numerical analysis classes which utilized
                Python.
              </p>
            </div>
          </div>
        </div>

        {/* Coursework and Skills Section */}

        <div className="course-skill-section">
          <div className="course-box">
            <h3 id="course-tag">Coursework</h3>
            <div className="course-list">course list</div>
          </div>
          <div className="skill-box">
            <h3 id="skill-tag">Skills</h3>
            <div className="skill-list">skill list</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeMain;
