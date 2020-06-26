import styled from "styled-components";

//utils
import { colors } from "../../utils/colors";

export const SubmitButton = styled.button`
  border: none;
  margin: 0;
  padding: 10px;
  width: auto;
  overflow: visible;
  background-color:${props => props.disabled ? colors.gray : colors.blue};
  color: ${colors.white};
`;
