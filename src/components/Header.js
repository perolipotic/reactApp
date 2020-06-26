import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

//utils
import { colors } from "../utils/colors";
import { fontSize } from "../utils/sizes";

const Header = ({
  history: {
    location: { pathname },
  },
}) => (
  <HeaderWrapper>
    <UpdatedLink ishomepage={pathname} to="/">
      HomePage
    </UpdatedLink>
    <UpdatedLink ishomepage={pathname} to="contact">
      Contact
    </UpdatedLink>
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  position: absolute;
  z-index: 2;
  right: 15px;
  top: 21px;
`;

const UpdatedLink = styled(Link)`
  padding: 15px;
  text-decoration: none;
  color: ${(props) => (props.ishomepage === "/" ? colors.white : colors.black)};
  font-size: ${fontSize.medium};
`;

export default withRouter(Header);
