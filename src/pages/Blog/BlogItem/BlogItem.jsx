import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BlogImage = styled.div`
  max-width: 200px;
`;
const ListBlog = styled.li`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
  width: 100%;
  margin-top: 0;
  position: relative;
`;
const OverLay = styled.div`
  background-color: white;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;
const ImageAvt = styled.img`
  transition: 0.5s ease;
  width: 100%;
  border-radius: 20px;
`;
const Info = styled.div`
  padding: 0 10px;
`;
const DayCount = styled.div``;
const Day = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
`;
const Title = styled.div`
  margin: 5px 0 30px 0;
`;
const Span = styled.span`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.5s ease 0s;
  color: white;
  &:hover {
  }
`;
const More = styled.div`
  padding-top: 12px;
`;
const BlogItems = styled.div`
  margin: 20px 0;
  display: flex;
  &:hover {
    ${Info} > ${More} > ${Span} {
      border-bottom: 1px solid white;
    }
    ${BlogImage} > ${OverLay} {
      opacity: 1;
    }
    ${BlogImage} > ${ImageAvt} {
      opacity: 0.3;
    }
  }
`;

function BlogItem() {
  return (
    <>
      <ul>
        <ListBlog>
          <Link to="/">
            <BlogItems>
              <BlogImage>
                <ImageAvt
                  src="https://cdn2.unrealengine.com/the-2022-game-awards-nominees-include-108-games-31-categories-1920x1080-49917281c4e7.jpg"
                  alt=""
                />
                <OverLay />
              </BlogImage>
              <Info>
                <DayCount>
                  <Day>10 Day Ago</Day>
                </DayCount>
                <Title>
                  <p>
                    The 2022 Game Awards nominees include 108 games, 31
                    categories
                  </p>
                </Title>
                <More>
                  <Span>Read More</Span>
                </More>
              </Info>
            </BlogItems>
          </Link>
        </ListBlog>
        <ListBlog>
          <Link /* to={`/blog/${id}`} */>
            <BlogItems>
              <BlogImage>
                <ImageAvt
                  src="https://cdn2.unrealengine.com/next-black-friday-sale-epic-games-store-1920x1080-3567f38c9907.jpg"
                  alt=""
                />
              </BlogImage>
              <Info>
                <DayCount>
                  <Day>10 Day Ago</Day>
                </DayCount>
                <Title>
                  <p>Next Black Friday Sale for Epic Games Store</p>
                </Title>
                <More>
                  <Span>Read More</Span>
                </More>
              </Info>
            </BlogItems>
          </Link>
        </ListBlog>
        <ListBlog>
          <Link /* to={`/blog/${id}`} */>
            <BlogItems>
              <BlogImage>
                <ImageAvt
                  src="https://cdn2.unrealengine.com/trunkshot-landscape-with-logos-sm-1920x1080-a45fc9ef4e2e.jpg"
                  alt=""
                />
              </BlogImage>
              <Info>
                <DayCount>
                  <Day>10 Day Ago</Day>
                </DayCount>
                <Title>
                  <p>The Top 10 Cleaning Hacks in Serial Cleaners</p>
                </Title>
                <More>
                  <Span>Read More</Span>
                </More>
              </Info>
            </BlogItems>
          </Link>
        </ListBlog>
        <ListBlog>
          <Link /* to={`/blog/${id}`} */>
            <BlogItems>
              <BlogImage>
                <ImageAvt
                  src="https://cdn2.unrealengine.com/fabular-storehorizontal-8bit-1920x1080-18f991398d97.png"
                  alt=""
                />
              </BlogImage>
              <Info>
                <DayCount>
                  <Day>10 Day Ago</Day>
                </DayCount>
                <Title>
                  <p>EVE Online: Uprising – New Expansion is Live!</p>
                </Title>
                <More>
                  <Span>Read More</Span>
                </More>
              </Info>
            </BlogItems>
          </Link>
        </ListBlog>
        <ListBlog>
          <Link /* to={`/blog/${id}`} */>
            <BlogItems>
              <BlogImage>
                <ImageAvt
                  src="https://cdn2.unrealengine.com/ghostbusters-hands-on-launch-ghost-1920x1080-53cf65816102.png"
                  alt=""
                />
              </BlogImage>
              <Info>
                <DayCount>
                  <Day>10 Day Ago</Day>
                </DayCount>
                <Title>
                  <p>Horror Villains Arise In Rocket League</p>
                </Title>
                <More>
                  <Span>Read More</Span>
                </More>
              </Info>
            </BlogItems>
          </Link>
        </ListBlog>
        <ListBlog>
          <Link /* to={`/blog/${id}`} */>
            <BlogItems>
              <BlogImage>
                <ImageAvt
                  src="https://cdn2.unrealengine.com/faction-warfare-1920x868-8ebb148ca5b5.png"
                  alt=""
                />
              </BlogImage>
              <Info>
                <DayCount>
                  <Day>10 Day Ago</Day>
                </DayCount>
                <Title>
                  <p>EVE Online: Uprising – New Expansion is Live!</p>
                </Title>
                <More>
                  <Span>Read More</Span>
                </More>
              </Info>
            </BlogItems>
          </Link>
        </ListBlog>
      </ul>
    </>
  );
}

export default BlogItem;
