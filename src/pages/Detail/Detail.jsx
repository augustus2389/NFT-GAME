import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import AboutGame from "./AboutGame/AboutGame";
import AddCommnet from "./Comment/AddComment/AddComment";
import CommentUser from "./Comment/Comment";
import InfoGame from "./InfoGame/InfoGame";
import IntroGame from "./Intro/IntroGame";
import SuggestGame from "./SuggestGame/SuggestGame";

function Detail() {
  const [detail, setDetail] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const fetchPost = async (id) => {
      let res = await productApi.getProductById(id);

      setDetail(res);
    };
    fetchPost(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(detail);
  return (
    <section id="detail">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <IntroGame />
          </div>
          <div className="col-lg-6 col-sm-12">
            <InfoGame detail={detail} />
          </div>
        </div>
        <div className="row">
          <AboutGame detail={detail} />
          <CommentUser />
          <AddCommnet />
          <SuggestGame />
        </div>
      </div>
    </section>
  );
}

export default Detail;
