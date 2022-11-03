import React from "react";
import game1 from "../../../asset/image/Product-Image/game1.jpeg";
import game2 from "../../../asset/image/Product-Image/game2.jpeg";
import game3 from "../../../asset/image/Product-Image/game3.jpeg";
import game4 from "../../../asset/image/Product-Image/game4.jpeg";
import game5 from "../../../asset/image/Product-Image/game5.jpeg";
import game6 from "../../../asset/image/Product-Image/game6.jpeg";
import game7 from "../../../asset/image/Product-Image/game7.jpeg";
import game8 from "../../../asset/image/Product-Image/game8.jpeg";
import warnning16 from "../../../asset/image/16.svg";
import "./style.css";

function ProductList() {
  return (
    <>
      <div className="product-list">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="product-item">
                <div className="product-image">
                  <img src={game1} alt="" />
                </div>
                <div className="product-title">
                  <span>
                    Counter-Strike: Global Offensive{" "}
                    <img src={warnning16} alt="" />
                  </span>
                  <p>555$</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="product-item">
                <div className="product-image">
                  <img src={game2} alt="" />
                </div>
                <div className="product-title">
                  <span>
                    Counter-Strike: Global Offensive{" "}
                    <img src={warnning16} alt="" />
                  </span>
                  <p>555$</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="product-item">
                <div className="product-image">
                  <img src={game3} alt="" />
                </div>
                <div className="product-title">
                  <span>
                    Counter-Strike: Global Offensive{" "}
                    <img src={warnning16} alt="" />
                  </span>
                  <p>555$</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="product-item">
                <div className="product-image">
                  <img src={game4} alt="" />
                </div>
                <div className="product-title">
                  <span>
                    Counter-Strike: Global Offensive{" "}
                    <img src={warnning16} alt="" />
                  </span>
                  <p>555$</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="product-item position-relative">
                <div className="product-image">
                  <img src={game5} alt="" />
                  <span className="flash-tag position-absolute">GAME HOT</span>
                </div>
                <div className="product-title">
                  <span>
                    Counter-Strike: Global Offensive
                    <img src={warnning16} alt="" />
                  </span>
                  <div className="tag d-flex justify-content-around">
                    <p>Battle Royal</p>
                    <p>Action</p>
                    <p>Romantic</p>
                    <p>Love</p>
                    <p>Family</p>
                  </div>
                  <div className="buy-item d-flex justify-content-around">
                    <div className="price d-flex justify-content-around ">
                      <p>-50%</p>
                      <div className="discount">
                        <p>1000$</p>
                        <p className="">555$</p>
                      </div>
                    </div>
                    <button className="button-29 btn-item">start bid</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="product-item">
                <div className="product-image">
                  <img src={game6} alt="" />
                </div>
                <div className="product-title">
                  <span>
                    Counter-Strike: Global Offensive{" "}
                    <img src={warnning16} alt="" />
                  </span>
                  <p>555$</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="product-item">
                <div className="product-image">
                  <img src={game7} alt="" />
                </div>
                <div className="product-title">
                  <span>
                    Counter-Strike: Global Offensive{" "}
                    <img src={warnning16} alt="" />
                  </span>
                  <p>555$</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="product-item">
                <div className="product-image">
                  <img src={game8} alt="" />
                </div>
                <div className="product-title">
                  <span>
                    Counter-Strike: Global Offensive{" "}
                    <img src={warnning16} alt="" />
                  </span>
                  <p>555$</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
