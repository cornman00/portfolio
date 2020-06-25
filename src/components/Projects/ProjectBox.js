import React, { Component } from "react";

export class ProjectBox extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="proj-description">
          <span>
            <div className="description-header">
              <h4>{this.props.title}</h4>
            </div>
          </span>
          <p>{this.props.description}</p>
          <div className="stacks">
            <h6>Stacks Used: </h6>
            <ul>
              {this.props.stacks.map((stack) => {
                return <li key={stack}>{stack}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="img-container">
          <a href={this.props.url} target="_blank" rel="noopener noreferrer">
            <img
              src={this.props.img}
              height="100%"
              width="100%"
              alt="Img Not Found"
            ></img>
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectBox;
