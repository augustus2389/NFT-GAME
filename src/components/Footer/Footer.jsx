import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../asset/image/logo.png";

const Image = styled.img`
  width: 60px;
  height: auto;
  margin: 0 10px;
`;
const TextFooter = styled.p`
  color: #8f98a0;
  font-size: 12px;
  line-height: 16px;
  margin: 0 10px;
`;
const CustomLink = styled(Link)`
  color: white;
  margin: 0 10px;
`;
function Footer() {
  // const Link = ({className,children}) => {
  //   <a className="link-footer">
  //     {}
  //   </a>
  // }};
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="content__footer d-flex justify-content-center align-items-center">
            <Image src={logo} alt="" />

            <div className="content-text">
              <TextFooter>
                © 2022 Valve Corporation. All rights reserved. All trademarks
                are property of their respective owners in the US and other
                countries.
              </TextFooter>
              <TextFooter>
                VAT included in all prices where applicable
                <CustomLink>Privacy Policy</CustomLink>
                <CustomLink>Legal</CustomLink>
                <CustomLink>Steam Subscriber Agreement</CustomLink>
                <CustomLink>Refunds</CustomLink>
                <CustomLink>Cookies</CustomLink>
              </TextFooter>
            </div>
            <Image src="https://store.cloudflare.steamstatic.com/public/images/v6/logo_steam_footer.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
