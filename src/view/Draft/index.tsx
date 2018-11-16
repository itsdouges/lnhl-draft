import React from 'react';
import Baba, { Target, ConcealMove } from 'yubaba';
import * as Styled from './styled';
import { Page, ListItem, Logo } from '../common/Elements';

const Draft = () => (
  <Baba name="reveal-draft">
    <ConcealMove>
      {baba => (
        <Page {...baba}>
          <header>
            <Target>
              {target => (
                <ListItem {...target}>
                  <Logo />

                  <h1>LNHL Draft</h1>
                </ListItem>
              )}
            </Target>
          </header>
        </Page>
      )}
    </ConcealMove>
  </Baba>
);

export default Draft;
