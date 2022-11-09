import React from "react";
import Account from "./Content/Account/Account";
import Business from "./Content/Business/Business";
import Game from "./Content/Game/Game";
import HeaderSupport from "./HeaderSupport/HeaderSupport";

function Support() {
  return (
    <>
      <HeaderSupport />
      <Game />
      <Account />
      <Business />
    </>
  );
}

export default Support;
