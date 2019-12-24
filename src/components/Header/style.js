import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: "row";
  justify-content: space-between;
  align-items: center;
  border-width: 0 0 1px 0;
  border-style: solid;
  padding-bottom: 2px;
  border-color: gray;

  @media only screen and (max-width: 850px) {
    display: flex;
    justify-content: center;
    position: initial;
    flex-wrap: wrap;

    .logo {
      padding-bottom: 15px;
    }
  }

  .logo  {
    mix-blend-mode: luminosity;
  }

  p {
    font-size: 1.4rem;
    font-weight: normal;
    margin: 0;
  }

  strong {
    font-weight: 800;
  }

  .vote {
    font-weight: 200;
  }
`;

export { HeaderContainer };
