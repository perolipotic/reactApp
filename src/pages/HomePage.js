import React from "react";
import styled from "styled-components";

//components
import Image from "components/Image";

//styles
import { H1 } from "styles/title";
import { Layout } from "styles/layout";
import { Typography } from "styles/typography";

//utils
import images from "../utils/images";
import { colors } from "../utils/colors";

const HomePage = () => (
  <Layout>
    <HeroWrapper>
      <CenterText>
        <H1>This is H1 title</H1>
        <Typography medium>This is some medium paragraph</Typography>
      </CenterText>
      <Image hero image={images[0]} />
    </HeroWrapper>
  </Layout>
);

const HeroWrapper = styled.div`
  &:after {
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${colors.black};
    position: absolute;
    opacity: 0.2;
  }
`;

const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  text-align: center;
  transform: translateX(-50%) translateY(-50%);
`;


export default HomePage;
