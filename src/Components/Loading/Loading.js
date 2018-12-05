import React from "react";
import LoadingImg from "../../Assets/reactImage.png";
import "./Loading.css";

const Loading = props => {
  return (
    <div className="loadingImgBox">
      <img src={LoadingImg} className="loadingImg" alt="Loading" />
    </div>
  );
};

export default Loading;
