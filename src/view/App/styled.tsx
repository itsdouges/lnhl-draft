import { createGlobalStyle as css } from 'styled-components';
import reset from 'styled-reset';
import * as font from '../styles/font';
import * as colors from '../styles/colors';
import * as grid from '../styles/grid';

export const Background = css`
  ${reset};
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }

  h1 {
    ${font.h1};
  }

  h2 {
    ${font.h2};
  }

  h3 {
    ${font.h3};
  }

  h4 {
    ${font.h4};
  }

  h5 {
    ${font.h5};
  }

  .layout {
    margin-bottom: ${grid.px};
  }

  body {
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu',
      'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`;
