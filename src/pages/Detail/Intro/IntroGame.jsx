import "./intro.scss";
import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

const IntroGame = ({ videos }) => {
  return (
    <div className="App">
      <Carousel>
        {videos.map((video, index) => {
          return (
            <Carousel.Item key={index}>
              <ReactPlayer
                url={video}
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
