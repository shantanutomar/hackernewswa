import React, { Component } from "react";
import PageSwitch from "../PageSwitch/PageSwitch";

class NewNewsBox extends Component {
  render() {
    return <PageSwitch newsType="new" />;
  }
}

export default NewNewsBox;
