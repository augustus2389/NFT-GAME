import React from "react";
import styled from "styled-components";
import ListBlog from "./ListBlog/ListBlog";
import Main from "./Main/Main";

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;
function Blog() {
  return (
    <section id="blog">
      <Container>
        <div className="row">
          <Main />
        </div>
        <div className="row">
          <ListBlog />
        </div>
      </Container>
    </section>
  );
}

export default Blog;
