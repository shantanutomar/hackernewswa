import React, { Component } from "react";
import Loadable from "react-loadable";
import Loading from "./Components/Loading/Loading";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./Hoc/Layout";

import "./App.css";

const TopNewsBox = Loadable({
  loader: () => import("./Containers/NewsBox/TopNewsBox"),
  loading: Loading
});
const NewNewsBox = Loadable({
  loader: () => import("./Containers/NewsBox/NewNewsBox"),
  loading: Loading
});
const ShowNewsBox = Loadable({
  loader: () => import("./Containers/NewsBox/ShowNewsBox"),
  loading: Loading
});
const AskNewsBox = Loadable({
  loader: () => import("./Containers/NewsBox/AskNewsBox"),
  loading: Loading
});
const JobNewsBox = Loadable({
  loader: () => import("./Containers/NewsBox/JobNewsBox"),
  loading: Loading
});
const About = Loadable({
  loader: () => import("./Components/About/About"),
  loading: Loading
});
const Comments = Loadable({
  loader: () => import("./Containers/Comments/Comments"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Route exact path="/" component={TopNewsBox} />
            <Route path="/new" component={NewNewsBox} />
            <Route path="/show" component={ShowNewsBox} />
            <Route path="/ask" component={AskNewsBox} />
            <Route path="/job" component={JobNewsBox} />
            <Route path="/about" component={About} />
            <Route path="/item/:id" component={Comments} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
