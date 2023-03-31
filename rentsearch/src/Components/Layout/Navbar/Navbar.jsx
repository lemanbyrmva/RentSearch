import React from "react";
import {BsHeadphones} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom";
import routes from "../../../router";
// import styles from "./navbar.module.scss";
import "./navbar.scss"


const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container-fluid">
        <div className="row align-items-center      justify-content-center ">
          <header className="header">
            <div className="col-xl-6 ">
              <div className="header_left">
                <BsHeadphones />
                <span>678.421.3000</span>
                <span className="hour">8am-5pm EDT</span>
              </div>
            </div>
            <div className="col-xl-6">
              <a className="link" href="">
                Contact Us
              </a>
            </div>
          </header>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="navbar">
            <div className="col-xl-2">
              <img
                className="logoimg"
                src="https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png"
                alt=""
              />
            </div>
            <div className="col-xl-6">
              <ul className="list">
                {routes.length > 0 &&
                  routes.map((element, index) => {
                    return (
                      <li key={index}>
                        <Link to={element.path}>{element.name}</Link>
                      </li>
                    );
                  })}
              </ul>
              {/* <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>Solutions</Link>
                </li>
                <li>
                  <Link>Company</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Resource</Link>
                </li>
              </ul> */}
            </div>
            <div className="col-xl-3">
              <div className="btns">
                <a href="">Client login</a>
                <a className="link" href="">
                  Get in touch
                </a>
              </div>
            </div>
            <div className="col-xl-1">
              <AiOutlineMenu/></div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
