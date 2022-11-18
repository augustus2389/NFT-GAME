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
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://json-server-augustus-game.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      console.log("Delayed for 5 second.");
      setIsFetching(false);
    }, 2000);
  }, []);

  if (isFetching) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
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
