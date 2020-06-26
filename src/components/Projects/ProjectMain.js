import React, { Component } from "react";
import ProjectBox from "./ProjectBox";
import Covid19 from "../../Images/covid19.jpg";
import Spotify from "../../Images/spotify-logo.jpg";
import FormValidation from "../../Images/form-validation.png";
import Ecommerce from "../../Images/ecommerce.png";

export class ProjectMain extends Component {
  render() {
    return (
      <div className="project-main-box">
        <div className="project-header">
          <div className="header-wrapper">
            <div className="project-bullet"></div>
            <div className="project-name">Projects</div>
            <h4>You can see the websites if you click them</h4>
          </div>
        </div>
        <ProjectBox
          title="Spotify"
          img={Spotify}
          url="https://spotify-search-app.herokuapp.com/"
          description="You can search artists and see their albums and tracks. It will direct you to Spotify website when you click the play button."
          stacks={[
            "ReactJS",
            "Bootstrap",
            "NodeJS / Express",
            "Spotify API",
            "Heroku",
          ]}
        />
        <ProjectBox
          title="CoronaTrace"
          img={Covid19}
          url="https://coronatrace-app.herokuapp.com/"
          description="A website that shows current COVID-19 cases across the states in the US with graphs and a table."
          stacks={[
            "ReactJS",
            "Bootstrap",
            "NodeJS / Express",
            "MongoDB Atlas",
            "Reacharts",
            "Heroku",
          ]}
        />
        <ProjectBox
          title="iShoes"
          img={Ecommerce}
          url="https://react-shoes-store.netlify.app/"
          description="An e-commerce website showing various products for sale accompanied by a shopping cart feature."
          stacks={["ReactJS", "Bootstrap", "Netlify"]}
        />
        <ProjectBox
          title="Form"
          img={FormValidation}
          url="https://heuristic-bohr-3c4412.netlify.app/"
          description="A simple form validation app that checks username, email, and passwords."
          stacks={["Javascript", "CSS", "HTML", "Netlify"]}
        />
      </div>
    );
  }
}

export default ProjectMain;
