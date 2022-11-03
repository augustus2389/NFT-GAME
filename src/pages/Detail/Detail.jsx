import React from "react";
import AboutGame from "./AboutGame/AboutGame";
import AddCommnet from "./Comment/AddComment/AddComment";
import CommentUser from "./Comment/Comment";
import InfoGame from "./InfoGame/InfoGame";
import IntroGame from "./Intro/IntroGame";
import SuggestGame from "./SuggestGame/SuggestGame";

function Detail() {
  return (
    <section id="detail">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <IntroGame />
          </div>
          <div className="col-lg-6 col-sm-12">
            <InfoGame />
          </div>
        </div>
        <div className="row">
          <AboutGame />

          <CommentUser />
          <AddCommnet />
          <SuggestGame />
        </div>
      </div>
    </section>
  );
}

export default Detail;
