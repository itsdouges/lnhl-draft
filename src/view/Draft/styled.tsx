import styled from 'styled-components';
import * as font from '../styles/font';
import * as grid from '../styles/grid';

export const Subtitle = styled.small`
  ${font.regular};
  ${font.bold};
  display: block;
  position: absolute;
  padding-left: ${grid.px};
`;
