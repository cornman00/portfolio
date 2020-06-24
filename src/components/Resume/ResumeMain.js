import React, { Component } from "react";

export class ResumeMain extends Component {
  render() {
    return (
      <div className="resume-main-box">
        {/* Header */}
        <div className="resume-header">
          <div className="header-wrapper">
            <div className="resume-bullet"></div>
            <div className="resume-name">Resume</div>
          </div>
        </div>
        {/* Education Section */}
        <div className="education-section">
          <div>
            <h2 id="education-tag">Education</h2>
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
        {/* Skills Section */}
        <div className="skill-section">
          <div>
            <h2 id="skill-tag">Skills</h2>
          </div>
          <div className="skill-box">
            <div className="proficient">
              <div className="proficiency-bullet"></div>
              <div className="proficiency-tag">Proficient: </div>
              <p className="proficient-list">C++, Python, JavaScript, HTML</p>
            </div>
            <div className="intermediate">
              <div className="proficiency-bullet"></div>
              <div className="proficiency-tag">Intermediate: </div>
              <p className="intermediate-list">
                React, CSS, Bootstrap, Numpy, Matplotlib
              </p>
            </div>

            <div className="familiar">
              <span>
                <div className="proficiency-bullet"></div>
                <div className="proficiency-tag">Familiar: </div>
                <p className="familiar-list"> NoSQL (MongoDB), Express</p>
              </span>
            </div>
          </div>
        </div>
        {/* Coursework Section */}
        {/* <div className="course-section">
          <div>
            <h2 id="course-tag">Coursework</h2>
          </div>
          <div className="course-box">
            <div className="course-list-row">
              <div className="course-bullet"></div>
              <div className="course-list">Data Structures</div>
              <div className="course-bullet"></div>
              <div className="course-list">Computer Architecture</div>
            </div>
            <div className="course-list-row">
              <div className="course-bullet"></div>
              <div className="course-list">Numerical Analysis</div>
              <div className="course-bullet"></div>
              <div className="course-list">Numerical Methods</div>
            </div>
            <div className="course-list-row">
              <div className="course-bullet"></div>
              <div className="course-list">Discrete Structures</div>
              <div className="course-bullet"></div>
              <div className="course-list">Intro to Computer Science</div>
            </div>
            <div className="course-list-row">
              <div className="course-bullet"></div>
              <div className="course-list">Applied Linear Algebra</div>
              <div className="course-bullet"></div>
              <div className="course-list">Physics Courses</div>
            </div>
          </div>
        </div> */}

        <div class="course-section">
          <div className="course-box">
            <div>
              <h2 id="course-tag">Coursework</h2>
            </div>

            <div class="course-list-box">
              <div class="course-list">Data Structures</div>
              <div class="course-list">Computer Architecture</div>
              <div class="course-list">Numerical Analysis</div>
              <div class="course-list">Numerical Methods</div>
              <div class="course-list">Applied Linear Algebra</div>
              <div class="course-list">Discrete Structures</div>
              <div class="course-list">Intro to Computer Science</div>
              <div class="course-list">Physics Courses</div>
            </div>
          </div>
        </div>
        {/* Additional Information Section */}
        <div className="info-section">
          <div>
            <h2 id="info-tag">Additional Information</h2>
          </div>
          <div className="info-box">
            <div>
              <div className="info-bullet"></div>
              <div className="info-list" style={{ marginBottom: "15px" }}>
                Engineering Visionary Scholarship recipient
              </div>
            </div>
            <div>
              <div className="info-bullet"></div>
              <div className="info-list">Member of a film club (Me2)</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeMain;
