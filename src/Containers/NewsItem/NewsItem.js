import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./NewsItem.css";

class NewsItem extends Component {
  render() {
    return (
      <div className="newsItemContainer">
        <div className="serNoTitleBox">
          <h3>{this.props.serNo}</h3>
          <div id="h4pEleBox">
            <h4>
              {this.props.url !== undefined ? (
                <a
                  href={this.props.url}
                  target="_blank"
                  className="titleStyle"
                  rel="noopener noreferrer"
                >
                  {this.props.title}
                </a>
              ) : (
                this.props.title
              )}
            </h4>
            <p id="newsDetailStyle">
              {this.props.score} points by <span>{this.props.by}</span>{" "}
              {this.props.comments !== undefined ? (
                <NavLink to={`/item/${this.props.id}`} className="titleStyle">
                  |{" "}
                  <span style={{ textDecoration: "underline" }}>
                    {this.props.comments.length}
                    {this.props.comments.length > 1 ? " comments" : " comment"}
                  </span>
                </NavLink>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
