import React from 'react';
import styled from 'styled-components';
import Baba, { RevealMove, Target, ConcealMove } from 'yubaba';
import { Link, LinkProps } from 'react-router-dom';
import * as grid from '../../styles/grid';
import * as colors from '../../styles/colors';

/**
 * Use a ListItemHeader at the top of a Page.
 */
const StyledPage = styled.main`
  height: 100vh;
  position: relative;
  background-color: ${colors.pageBackground};
  overflow: auto;
`;

interface PageProps {
  children: React.ReactNode;
  name: string;
  header?: React.ReactNode;
}

export const Page: React.FunctionComponent<PageProps> = ({ name, children, header }) => (
  <Baba name={name}>
    <ConcealMove>
      {baba => (
        <StyledPage {...baba}>
          <Target>
            {target => (
              <ListItemHeader as="header" {...target}>
                {header}
              </ListItemHeader>
            )}
          </Target>
          <ListItemHeaderPadding />

          {children}
        </StyledPage>
      )}
    </ConcealMove>
  </Baba>
);

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

export const Logo = styled.div`
  height: ${grid.multiple(6).px};
  width: ${grid.multiple(6).px};
  background-color: ${colors.logo};
  margin-right: ${grid.multiple(2).px};
  border-radius: 4px;
`;

const StyledListItemLink = styled(ForwardRefLink).attrs({
  role: 'listitem',
})`
  display: flex;
  align-items: center;
  height: ${grid.multiple(10).px};
  padding: ${grid.multiple(2).px};
  background-color: ${colors.listItem};
  width: 100%;
  color: ${colors.text};
  text-decoration: none;
  border-bottom: 2px solid ${colors.listItemBorder};

  :first-child {
    border-top: 2px solid ${colors.listItemBorder};
  }
`;

interface AnimatedListItemProps {
  children: React.ReactNode;
  name: string;
  to: string;
}

export const ListItemLink: React.FunctionComponent<AnimatedListItemProps> = ({
  children,
  name,
  to,
}) => (
  <Baba name={name}>
    <RevealMove>
      {({ ref, ...baba }) => (
        <StyledListItemLink to={to} ref={ref} {...baba}>
          {children}
        </StyledListItemLink>
      )}
    </RevealMove>
  </Baba>
);
