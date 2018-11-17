import React from 'react';
import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
import * as grid from '../../styles/grid';
import * as colors from '../../styles/colors';

/**
 * Use a ListItemHeader at the top of a Page.
 */
export const Page = styled.main`
  height: 100vh;
  position: relative;
  background-color: ${colors.pageBackground};
  overflow: auto;
`;

export const ListItemHeaderPadding = styled.div.attrs({
  'aria-hidden': 'true',
})`
  height: ${grid.multiple(10).px};
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  height: ${grid.multiple(10).px};
  padding: ${grid.multiple(2).px};
  background-color: ${colors.listItem};
  width: 100%;
`;

export const ListItemHeader = styled(ListItem)`
  position: absolute;
  top: 0;
`;

const ForwardRefLink = React.forwardRef((props: LinkProps, ref) => (
  <Link {...props} innerRef={ref as any} />
));

export const ListItemLink = styled(ForwardRefLink)`
  display: flex;
  align-items: center;
  height: ${grid.multiple(10).px};
  padding: ${grid.multiple(2).px};
  background-color: ${colors.listItem};
  width: 100%;
  color: ${colors.text};
  text-decoration: none;
`;

export const Logo = styled.div`
  height: ${grid.multiple(6).px};
  width: ${grid.multiple(6).px};
  background-color: ${colors.logo};
  margin-right: ${grid.multiple(2).px};
  border-radius: 4px;
`;
