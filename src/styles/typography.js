import styled from "styled-components";

//utils
import { fontSize } from "../utils/sizes";
import { colors } from "../utils/colors";

export const Typography = styled.p`
  ${(props) => props.medium && medium}
  ${(props) => props.error && error}
  ${(props) => props.success && success}
`;

const medium = `
    font-size:${fontSize.medium};
    color:${colors.white}
`;

const error = `
    font-size:${fontSize.medium};
    color:${colors.red};
`;

const success = `
    font-size:${fontSize.medium};
    color:${colors.green};
`;
