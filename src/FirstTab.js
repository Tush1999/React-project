import React, { Component } from "react";
import tabs from "./Data";
import { NavLink } from "react-router-dom";
import "./style.css";
export default class FirstTab extends Component {
  render() {
    const display = tabs.map((val, index) => {
      return (
        <NavLink
          activeClassName="active-Link"
          className="Link"
          to={`/${val.name}`}
          key={index}
        >{`${val.name}`}</NavLink>
      );
    });
    return <div className="flex-div">{display}</div>;
  }
}
