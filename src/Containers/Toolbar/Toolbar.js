import React from "react";
import reactImage from "../../Assets/reactImage.png";
import { NavLink } from "react-router-dom";

import "./Toolbar.css";

class Toolbar extends React.Component {
  render() {
    return (
      <div className="toolbarContainer">
        <div className="menuContainer">
          <img alt="ReactImage" src={reactImage} />
          <NavLink
            to="/"
            exact
            activeClassName="activeStyle"
            className="anchorStyle"
          >
            top
          </NavLink>
          <NavLink
            to="/new"
            activeClassName="activeStyle"
            className="anchorStyle"
          >
            new
          </NavLink>
          <NavLink
            to="/show"
            activeClassName="activeStyle"
            className="anchorStyle"
          >
            show
          </NavLink>
          <NavLink
            to="/ask"
            activeClassName="activeStyle"
            className="anchorStyle"
          >
            ask
          </NavLink>
          <NavLink
            to="/job"
            activeClassName="activeStyle"
            className="anchorStyle"
          >
            jobs
          </NavLink>
        </div>
        <div className="aboutLink">
          <NavLink
            to="/about"
            activeClassName="activeStyle"
            className="anchorStyle"
          >
            about
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Toolbar;
