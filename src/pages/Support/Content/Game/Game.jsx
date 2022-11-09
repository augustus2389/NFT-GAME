import React from "react";
import styled from "styled-components";

function Game() {
  const Container = styled.div`
    max-width: 1040px;
    margin: auto;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
  `;
  const GameSecond = styled.div`
    margin: 20px 0;
  `;
  const DivImage = styled.div`
    border-radius: 10px;

    height: 100%;
    overflow: hidden;
  `;
  const Imaga = styled.img`
    aspect-ratio: 21 / 10;
    border-radius: 10px;
    height: 100%;
    transition: all 1s ease;
    &:hover {
      overflow: hidden;
      transform: scale(1.1);
    }
  `;
  const ImageSecond = styled.img`
    aspect-ratio: 10 / 10;
    height: 100%;
    transition: all 1s ease;
    &:hover {
      overflow: hidden;
      transform: scale(1.1);
    }
  `;
  const TextName = styled.div`
    padding: 10px 0;
    font-weight: 700;
  `;
  return (
    <section id="content-game">
      <Container className="container">
        <h2>Games</h2>

        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <GameSecond>
              <DivImage>
                <Imaga
                  src="https://cdn2.unrealengine.com/epicgamesplayersupportselfserviceportal-fortnite-2757x1047-2757x1047-b3967fdd8b11.jpg"
                  alt=""
                />
              </DivImage>
              <TextName>
                <p>Fornite</p>
              </TextName>
            </GameSecond>
          </div>
          <div className="col-lg-3 col-sm-6">
            <GameSecond>
              <DivImage>
                <ImageSecond
                  src="https://cdn2.unrealengine.com/rl-epic-support-thumbnail-783x1047-783x1047-b040c42cdfc3.jpg"
                  alt=""
                />
              </DivImage>
              <TextName>
                <p>Rocket League</p>
              </TextName>
            </GameSecond>
          </div>
          <div className="col-lg-3 col-sm-6">
            <GameSecond>
              <DivImage>
                <ImageSecond src="https://cdn2.unrealengine.com/rls-epic-support-thumbnail-783x1047-783x1047-a246396ed9e5.jpg" />
              </DivImage>
              <TextName>
                <p>Rocket League Sideswipe</p>
              </TextName>
            </GameSecond>
          </div>
          <div className="col-lg-3 col-sm-6">
            <GameSecond>
              <DivImage>
                <ImageSecond src="https://cdn2.unrealengine.com/fall-guys-783x1047-c6adc350bf30.jpg" />
              </DivImage>
              <TextName>
                <p>Fall Guys</p>
              </TextName>
            </GameSecond>
          </div>
          <div className="col-lg-3 col-sm-6">
            <GameSecond>
              <DivImage>
                <ImageSecond src="https://cdn2.unrealengine.com/rumbleverse-banner-1047x783-783x1047-753baa749850.jpg" />
              </DivImage>
              <TextName>
                <p>Rumbleverse</p>
              </TextName>
            </GameSecond>
          </div>
          <div className="col-lg-3 col-sm-6">
            <GameSecond>
              <DivImage>
                <ImageSecond src="https://cdn2.unrealengine.com/pcbs-support-783x1047-3663f86d79c0.jpg" />
              </DivImage>
              <TextName>
                <p>PC Building Simulator</p>
              </TextName>
            </GameSecond>
          </div>
          <div className="col-lg-3">
            <GameSecond>
              <DivImage>
                <ImageSecond src="https://cdn2.unrealengine.com/pcbs-2-support-783x1047-6e85c954153e.jpg" />
              </DivImage>
              <TextName>
                <p>PC Building Simulator 2</p>
              </TextName>
            </GameSecond>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Game;
