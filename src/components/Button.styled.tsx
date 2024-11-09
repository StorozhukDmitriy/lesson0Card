import styled, { css } from "styled-components";
type ButtonPropsType = {
  primary?: boolean;
  outlined?: boolean;
};
export const Button = styled.button<ButtonPropsType>`
  width: 86px;
  height: 30px;
  border: none;
  border-radius: 5px;

  margin-left: 20px;

  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  ${(props) =>
    props.primary &&
    css<ButtonPropsType>`
      background-color: #4e71fe;
      color: #fff;
    `}
  ${(props) =>
    props.outlined &&
    css<ButtonPropsType>`
      border: 2px solid #4e71fe;
      color: #4e71fe;
      background-color: transparent;
    `}
`;
