import React, { Component } from "react";
import { Link } from "react-router-dom";
import posed from "react-pose";
import { tween } from "popmotion";
import "./Home.css";
import Logo from "../images/cubeLogo.svg";
import Bay from "../images/bayBridge.jpg";
import City from "../images/seattle.jpg";

// const Box = posed.div({
//   hoverable: true,
//   pressable: true,
//   init: {
//     scale: 1,
//     boxShadow: "0px 0px 0px rgba(0,0,0,0)",
//     opacity: 0.5
//   },
//   hover: {
//     scale: 1.2,
//     boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
//     transition: {
//       duration: 1000
//     },
//     opacity: 1
//   },
//   press: {
//     scale: 1.1,
//     boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
//   }
// });

class Home extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={Logo} alt="ahilado logo" />
        <div className="containerBay">
          <img className="photoBayHalf" src={Bay} />
          <a href="#">
            <div className="overlayBay">
              <div className="text">Hello World</div>
            </div>
          </a>
        </div>

        <div className="containerCity">
          <img className="photoCityHalf" src={City} />
          <a href="#">
            <div className="overlayCity">
              <div className="text">Hello World</div>
            </div>
          </a>
        </div>
        {/* <div className="parent">
          <Box>
            <a href="#">
              <img className="photoBay" src={Bay} />
            </a>
          </Box>
          <Box>
            <a href="#">
              <img className="photoCity" src={City} />
            </a>
          </Box>
        </div> */}
      </div>
    );
  }
}

export default Home;
