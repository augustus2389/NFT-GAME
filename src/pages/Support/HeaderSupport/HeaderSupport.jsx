import React from "react";
import styled from "styled-components";

const IconSteam = styled.img`
  width: 240px;
  height: 80px;
`;
const AboutSteam = styled.div`
  background: #1d2024;
  background-image: radial-gradient(
    ellipse farthest-side,
    rgba(0, 111, 255, 0.15),
    transparent
  );
  margin-top: 100px;
  width: 800px;
`;
const Video = styled.video`
  width: 100%;
  height: auto;
  opacity: 0.8;
`;
const InfoSteam = styled.div`
  margin: 130px;
  font-size: 24px;
  position: relative;
  z-index: 8;
`;
const VideoIntro = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;
  background-image: radial-gradient(
    ellipse farthest-side,
    rgba(0, 111, 255, 0.15),
    transparent
  );
`;
const Note = styled.p`
  width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 25px;
  -webkit-line-clamp: 3;
  height: 75px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

function HeaderSupport() {
  return (
    <div className="header-support">
      <AboutSteam>
        <InfoSteam>
          <IconSteam
            src="https://cdn.cloudflare.steamstatic.com/store//about/logo_steam.svg"
            alt=""
          />
          <Note>
            Steam is the ultimate destination for playing, discussing, and
            creating games.
          </Note>
        </InfoSteam>
        <VideoIntro>
          <Video
            src="https://cdn.cloudflare.steamstatic.com/store/about/videos/about_hero_loop_web.webm"
            autoPlay
            muted
          ></Video>
        </VideoIntro>
      </AboutSteam>
    </div>
  );
}

export default HeaderSupport;
