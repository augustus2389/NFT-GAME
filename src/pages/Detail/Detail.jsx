import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import { isEmpty } from "../../utils";
import AboutGame from "./AboutGame/AboutGame";
import InfoGame from "./InfoGame/InfoGame";
import IntroGame from "./Intro/IntroGame";
import SuggestGame from "./SuggestGame/SuggestGame";

function Detail() {
  const [detail, setDetail] = useState({});
  const data = useSelector((state) => state.status.new);
  const { productId } = useParams();
  const checkId = productId.split("-")[1];
  useEffect(() => {
    const fetchPost = async (id) => {
      let res = await productApi.getProductById(id);
      setDetail(res);
    };
    fetchPost(checkId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, productId]);

  return (
    <section id="detail">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            {!isEmpty(detail) && <IntroGame videos={detail.videos} />}
          </div>
          <div className="col-lg-6 col-sm-12">
            {!isEmpty(detail) && <InfoGame detail={detail} checkId={checkId} />}
          </div>
        </div>
        <div className="row">
          <AboutGame detail={detail} />
          <SuggestGame />
        </div>
      </div>
    </section>
  );
}

export default Detail;
