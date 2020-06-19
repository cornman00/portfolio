import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="name">
        <div className="box block"></div>
        <Link to="/">
          <strong>Seokhyun Kim</strong>
        </Link>
      </div>
      <div className="nav-list">
        <Link to="/">about me</Link>
        <Link to="/resume">resume</Link>
        <Link to="/projects">projects</Link>
      </div>
    </nav>
  );
}
