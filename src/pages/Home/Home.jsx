import React from "react";
import Product from "../../components/Product/Product";
import Hot from "./Hot/Hot";
import Intro from "./Intro/Intro";

function Home() {
  return (
    <>
      <Intro />
      <Hot />
      <Product />
    </>
  );
}

export default Home;
