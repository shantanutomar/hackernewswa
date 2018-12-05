import React, { Component } from "react";
import PageSwitch from "../PageSwitch/PageSwitch";

class TopNewsBox extends Component {
  render() {
    return <PageSwitch newsType="top" />;
  }
}

export default TopNewsBox;
