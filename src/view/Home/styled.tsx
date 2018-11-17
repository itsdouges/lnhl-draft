import styled from 'styled-components';
import logo from '../../assets/logo.png';
import * as grid from '../styles/grid';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    width: 100%;
  }
`;

export const LNHLLogo = styled.div`
  width: 200px;
  height: 97px;
  margin: ${grid.multiple(3).px} 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${logo});
`;
