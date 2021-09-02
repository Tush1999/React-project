import React, { Component } from "react";
import {url} from "../../Data";
import { NavLink } from "react-router-dom";
import "./style.css";
export default class Header extends Component {
  render() {
    const display = url.map((val, index) => {
      return (
        <div>
        <NavLink
          activeClassName="active-Link"
          className="Link"
          to={`/${val.name}`}
          key={index}
        >{`${val.name}`}</NavLink>
        </div>
      );
    });
    return (
    <div className="flex-div">
      <span className="left">
      {display}
      </span>
     <span className="right"></span>
      </div>)
  }
}
