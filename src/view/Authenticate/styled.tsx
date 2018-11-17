import styled from 'styled-components';
import * as colors from '../styles/colors';
import * as grid from '../styles/grid';
import * as font from '../styles/font';

export const CurrentUser = styled.div`
  ${font.small};
  position: fixed;
  right: 0;
  top: 0;
  padding: ${grid.px};
  background-color: ${colors.userStrip};
  z-index: 999999;
`;
