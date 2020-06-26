import React from "react";
import styled from "styled-components";

const Image = ({ image, ...rest }) => (
  <GenericImage src={image.src} alt={image.description} {...rest} />
);

const GenericImage = styled.img`
  ${(props) => props.hero && heroImage}
`;

const heroImage = `
    width:100vw;
    height:100vh;
`;

export default Image;
