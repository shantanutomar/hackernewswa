import React, { Component } from "react";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import CommentItem from "../CommentItem/CommentItem";
import "./Comments.css";

class Comments extends Component {
  state = {
    articleDetails: null,
    isFetchingArticleDtls: true
  };
  componentDidMount = () => {
    this.fetchArticleDetails();
  };

  fetchArticleDetails = () => {
    axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${
          this.props.match.params.id
        }.json`
      )
      .then(response => {
        this.setState({
          articleDetails: response.data,
          isFetchingArticleDtls: false
        });
      })
      .catch(error => {
        this.setState({
          isFetchingArticleDtls: false
        });
        alert(error);
      });
  };
  render() {
    return (
      <div id="commentsMainBox">
        <div>
          {!this.state.isFetchingArticleDtls ? (
            <div id="commentsHeadBox">
              <div id="titleBox">
                <a
                  href={this.state.articleDetails.url}
                  className="commentTitle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.state.articleDetails.title}
                </a>
              </div>
              <p className="commentDetails">
                {this.state.articleDetails.score} by{" "}
                {this.state.articleDetails.by}
              </p>
              <span id="greyBorder" className="greyBorderStyle" />
              <p className="commentDetails">
                {this.state.articleDetails.kids.length}
                {this.state.articleDetails.kids.length > 1
                  ? " comments"
                  : " comment"}
              </p>
              <span id="commentBreakLine" />
            </div>
          ) : (
            <Loading />
          )}
        </div>
        <div id="allCommentItemBox">
          {!this.state.isFetchingArticleDtls &&
          this.state.articleDetails.kids &&
          this.state.articleDetails.kids.length
            ? this.state.articleDetails.kids.map(comment => {
                return <CommentItem key={comment} id={comment} level={0} />;
              })
            : null}
        </div>
      </div>
    );
  }
}

export default Comments;
