import "./intro.scss";
import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

const IntroGame = ({ detail }) => {
  console.log(detail);
  return (
    <div className="App">
      <Carousel>
        {detail?.videos.map((videoObj, index) => {
          console.log(detail?.videos);
          return (
            <Carousel.Item key={index}>
              <ReactPlayer
                url={videoObj}
                pip={true}
                controls={true}
                playing={true}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default IntroGame;
