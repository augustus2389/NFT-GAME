import React from "react";
import ListBlog from "./ListBlog/ListBlog";
import Main from "./Main/Main";

function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="row">
          <Main />
        </div>
        <div className="row">
          <ListBlog />
        </div>
      </div>
    </section>
  );
}

export default Blog;
