import React, { Component } from "react";
import axios from "axios";
import "./CommentItem.css";

class CommentItem extends Component {
  state = {
    commentItemDtls: null,
    isCommentItemFetched: false
  };
  componentDidMount = () => {
    this.fetchCommentItemDtls();
  };

  fetchCommentItemDtls = () => {
    axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json`)
      .then(response => {
        this.setState({
          commentItemDtls: response.data,
          isCommentItemFetched: true
        });
      })
      .catch(error => {
        alert(error);
        this.setState({
          isCommentItemFetched: false
        });
      });
  };

  render() {
    const { level } = this.props;
    return (
      <div
        className="commentItem"
        style={{
          marginLeft: `${level * 10}px`
        }}
      >
        {this.state.isCommentItemFetched && [
          <div id="commentBox">
            <span id="commentBy">{this.state.commentItemDtls.by}</span>
            <p
              dangerouslySetInnerHTML={{
                __html: this.state.commentItemDtls.text
              }}
            />
            <span id="commentBreakLine" />
          </div>,
          <div>
            {this.state.isCommentItemFetched &&
            this.state.commentItemDtls.kids &&
            this.state.commentItemDtls.kids.length
              ? this.state.commentItemDtls.kids.map(comment => {
                  return (
                    <CommentItem key={comment} id={comment} level={level + 1} />
                  );
                })
              : null}
          </div>
        ]}
      </div>
    );
  }
}

export default CommentItem;
