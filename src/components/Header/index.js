import React from "react";
import { Image } from "react-bootstrap";
import { HeaderContainer } from "./style";

function Header() {
  return (
    <HeaderContainer>
      <Image
        width={250}
        src="assets/hepsiburada_logo.jpg"
        alt="logo"
        className="logo"
      />
      <p>
        <strong>Link</strong>
        <span className="vote">VOTE</span> Challenge
      </p>
    </HeaderContainer>
  );
}

export default Header;
