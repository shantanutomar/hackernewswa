import React from "react";
import Pagination from "rc-pagination";
import NewsItem from "../NewsItem/NewsItem";
import "./PageSwitch.css";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";

class PageSwitch extends React.Component {
  state = {
    currPageNo: 1,
    pageSize: 30,
    allNewsItems: [],
    currNewsItems: [],
    isLoadingInitial: true,
    isLoadingPageData: true,
    isError: false
  };

  fetchInitialData = () => {
    let currNewsItemsIds = [];
    this.setState({ isLoadingInitial: true });
    axios
      .get(
        `https://hacker-news.firebaseio.com/v0/${
          this.props.newsType
        }stories.json`
      )
      .then(allElementsIds => {
        allElementsIds.data.forEach((ele, index) => {
          if (index >= 0 && index <= 29) {
            currNewsItemsIds.push(ele);
          }
        });
        Promise.all(
          currNewsItemsIds.map(ele =>
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${ele}.json`)
          )
        )
          .then(currentNewsItemsIds => {
            this.setState({
              allNewsItems: allElementsIds.data,
              isLoadingInitial: false,
              isLoadingPageData: false,
              currNewsItems: currentNewsItemsIds.map((ele, index) => {
                return {
                  ...ele.data,
                  serNo: index + 1
                };
              })
            });
          })
          .catch(err => {
            this.setState({ isError: true });
          });
      })
      .catch(err => {
        this.setState({ isError: true });
      });
  };

  componentDidMount = () => {
    this.fetchInitialData();
  };

  handlePagination = curr => {
    this.setState({ isLoadingPageData: true });
    let currNewsItems = [];
    this.state.allNewsItems.forEach((ele, index) => {
      if (
        index > (curr - 1) * this.state.pageSize &&
        index <= this.state.pageSize * curr
      ) {
        currNewsItems.push(ele);
      }
    });
    Promise.all(
      currNewsItems.map(ele =>
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${ele}.json`)
      )
    )
      .then(currentNewsItemsIds => {
        this.setState({
          currPageNo: curr,
          isLoadingPageData: false,
          isLoadingInitial: false,
          currNewsItems: currentNewsItemsIds.map((ele, index) => {
            return {
              ...ele.data,
              serNo: this.state.pageSize * (curr - 1) + (index + 1)
            };
          })
        });
      })
      .catch(err => {
        this.setState({ isError: true });
      });
  };

  render() {
    let currNewsItem = null;
    if (
      this.state.isLoadingInitial === false ||
      this.state.isLoadingPageData === false
    ) {
      currNewsItem = this.state.currNewsItems.map((ele, index) => {
        return (
          <NewsItem
            key={ele.id}
            serNo={ele.serNo}
            title={ele.title}
            score={ele.score}
            by={ele.by}
            url={ele.url}
            comments={ele.kids}
            id={ele.id}
          />
        );
      });
    }
    if (this.state.isError === true) {
      return (
        <span id="fetchError">
          News list not available. Please try after sometime.
        </span>
      );
    }
    return (
      <React.Fragment>
        {this.state.isLoadingInitial ? (
          <Loading />
        ) : (
          <React.Fragment>
            <div className="pageSwitchContainer">
              <Pagination
                defaultCurrent={1}
                total={this.state.allNewsItems.length}
                defaultPageSize={this.state.pageSize}
                current={this.state.currPageNo}
                onChange={this.handlePagination}
              />
            </div>
            <hr />
          </React.Fragment>
        )}
        {this.state.isLoadingPageData && !this.state.isLoadingInitial ? (
          <Loading />
        ) : (
          <div className="newsContainer">{currNewsItem}</div>
        )}
      </React.Fragment>
    );
  }
}

export default PageSwitch;
