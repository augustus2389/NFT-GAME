import { Avatar, Comment } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Title = styled.h2`
  font-size: 29px;
  font-style: normal;
  font-weight: 700;
  line-height: 0;
  padding: 30px 10px 5px 10px;
  text-transform: uppercase;
  color: black;
`;
const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<Link>Han Solo</Link>}
    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
    content={
      <p style={{ color: "black" }}>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);
const CommentUser = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <Title>Comment</Title>
          <img
            src="https://store.cloudflare.steamstatic.com/public/images/v6/maincol_gradient_rule.png"
            alt="line"
          />
        </div>
      </div>
    </div>
    <ExampleComment>
      <ExampleComment>
        <ExampleComment />
        <ExampleComment />
      </ExampleComment>
    </ExampleComment>
  </>
);
export default CommentUser;
