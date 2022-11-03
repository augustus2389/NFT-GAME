import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  width: auto;
  height: 25px;
`;
const TextFooter = styled.p`
  color: #8f98a0;
  font-size: 12px;
  line-height: 16px;
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
          <div className="content__footer d-flex justify-content-center">
            <Image
              src="https://community.cloudflare.steamstatic.com/public/images/skin_1/footerLogo_valve.png?v=1"
              alt=""
            />

            <div className="content-text">
              <TextFooter>
                © 2022 Valve Corporation. All rights reserved. All trademarks
                are property of their respective owners in the US and other
                countries.
              </TextFooter>
              <TextFooter>
                VAT included in all prices where applicable
                <Link>Privacy Policy</Link>
                <Link>Legal</Link>
                <Link>Steam Subscriber Agreement</Link>
                <Link>Refunds</Link>
                <Link>Cookies</Link>
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
