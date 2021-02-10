import React, { Component } from "react";
import ProjectBox from "./ProjectBox";
import Covid19 from "../../Images/covid19.jpg";
import Spotify from "../../Images/spotify-logo.png";
import FormValidation from "../../Images/form-validation.png";
import Ecommerce from "../../Images/ecommerce.png";
import iShoes from "../../Images/iShoes.png";
import Hangman from "../../Images/hangman.jpg";

export class ProjectMain extends Component {
  render() {
    return (
      <div className="project-main-box">
        <div className="project-header">
          <div className="header-wrapper">
            <div className="project-bullet"></div>
            <div className="project-name">Projects</div>
            <h4>Click the images to see the websites</h4>
            <h5>
              (Some websites might take few seconds to open because of the
              characteristics of Heroku)
            </h5>
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
          title="Hangman Game"
          img={Hangman}
          url="https://hangman00.herokuapp.com/"
          description="A simple hangman game"
          stacks={["Javascript", "HTML", "CSS", "NodeJS / Express", "Heroku"]}
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
          img={iShoes}
          url="https://react-shoes-store.netlify.app/"
          description="An e-commerce website showing various products for sale accompanied by a shopping cart feature."
          stacks={["ReactJS", "Bootstrap", "Netlify"]}
        />
        <ProjectBox
          title="Form"
          img={FormValidation}
          url="https://heuristic-bohr-3c4412.netlify.app/"
          description="A simple form validation app that checks username, email, and passwords."
          stacks={["Netlify"]}
        />
      </div>
    );
  }
}

export default ProjectMain;
