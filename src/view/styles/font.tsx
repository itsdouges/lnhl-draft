import { css } from 'styled-components';

export const base = 14;

export const small = css`
  font-size: ${base / 1.4}px;
`;

export const regular = css`
  font-size: ${base}px;
`;

export const h1 = css`
  font-size: ${base * 2}px;
`;

export const h2 = css`
  font-size: ${base * 1.6}px;
`;

export const h3 = css`
  font-size: ${base * 1.5}px;
`;

export const h4 = css`
  font-size: ${base * 1.4}px;
`;

export const h5 = css`
  font-size: ${base * 1.3}px;
`;

export const bold = css`
  font-weight: 600;
`;

export const semiBold = css`
  font-weight: 500;
`;
