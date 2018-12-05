import React, { Component } from "react";
import PageSwitch from "../PageSwitch/PageSwitch";

class ShowNewsBox extends Component {
  render() {
    return <PageSwitch newsType="show" />;
  }
}

export default ShowNewsBox;
