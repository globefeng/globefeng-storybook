import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body.background};
    color: ${({ theme }) => theme.body.color};
    transition: all 0.50s linear;
    min-width: 300px;
  }
`;
