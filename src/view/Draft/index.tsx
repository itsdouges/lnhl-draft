import React from 'react';
import Baba, { Target, ConcealMove } from 'yubaba';
import { Page, ListItemHeader, Logo } from '../common/Elements';

const Draft = () => (
  <Baba name="reveal-draft">
    <ConcealMove>
      {baba => (
        <Page {...baba}>
          <header>
            <Target>
              {target => (
                <ListItemHeader {...target}>
                  <Logo />

                  <h1>LNHL Draft</h1>
                </ListItemHeader>
              )}
            </Target>
          </header>
        </Page>
      )}
    </ConcealMove>
  </Baba>
);

export default Draft;
