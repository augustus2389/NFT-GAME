import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Catalog from "./Catalog/Catalog";
import Catory from "./Catory/Catory";
import Free from "./Free/Free";
import Intro from "./Intro/Intro";
import More from "./More/More";
import Next from "./Next/Next";
import Popular from "./Popular/Popular";
import Typiccal from "./Typical/Typiccal";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Intro data={data} />
      <Next />
      <Free />
      <Catory data={data} />
      <More />
      <Catalog />
      <Popular />
      <Typiccal />
    </>
  );
}

export default Home;
