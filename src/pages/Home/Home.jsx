import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../../components/Product/Product";
import Hot from "./Hot/Hot";
import Intro from "./Intro/Intro";

function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Intro data={data} />
      <Hot />
      <Product />
    </>
  );
}

export default Home;
