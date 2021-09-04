import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { tabs } from "./Data";
import Header from "./Component/Header/index";
import Tabs from "./Component/Tabs/index";

export default class App extends Component {
  render() {
    return (
      <>
        <Header tabs={tabs} />
        <Route path="/:name" render={(prop) => <Tabs name={prop} />} />
        <Redirect exact from="/" to="/Introduction" />
      </>
    );
  }
}
