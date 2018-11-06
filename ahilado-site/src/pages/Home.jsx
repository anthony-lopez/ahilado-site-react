import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Logo from "../images/cubeLogo.svg";
import Bay from "../images/bayBridge.jpg";
import City from "../images/seattle.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <img className="logo" src={Logo} alt="ahilado logo" />
        <a href="#">
          <img className="photo" src={Bay} />
        </a>
        <a href="#">
          <img className="photo" src={City} />
        </a>
      </div>
    );
  }
}

export default Home;
