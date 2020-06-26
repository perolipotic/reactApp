import React from "react";
import styled from "styled-components";

//utils
import { colors } from "../../utils/colors";
import { fontSize } from "../../utils/sizes";

const ErrorMessage = ({ meta: { touched, error } }) => (
  <>{touched && error && <Error>{error}</Error>}</>
);
export default ErrorMessage;

const Error = styled.span`
  color:${colors.red};
  position:absolute;
  right:0;
  bottom:-12px;
  font-size:${fontSize.small}
`
