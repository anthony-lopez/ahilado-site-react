import React, { Component } from "react";
import { Link } from "react-router-dom";
import posed from "react-pose";
import "./Home.css";
import Logo from "../images/cubeLogo.svg";
import Bay from "../images/bayBridge.jpg";
import City from "../images/seattle.jpg";

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
    transition: {
      duration: 1000
    }
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

class Home extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={Logo} alt="ahilado logo" />
        <Box>
          <a href="#">
            <img className="photoBay" src={Bay} />
          </a>
          <a href="#">
            <img className="photoCity" src={City} />
          </a>
        </Box>
      </div>
    );
  }
}

export default Home;
