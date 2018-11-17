import React from 'react';
import Baba, { RevealMove } from 'yubaba';
import { Container } from './styled';
import { ListItemLink, Logo } from '../common/Elements';

const Home = () => (
  <Container>
    <Baba name="reveal-draft" TIME_TO_WAIT_FOR_NEXT_BABA={2000}>
      <RevealMove>
        {({ ref, ...baba }) => (
          <ListItemLink to="/draft" ref={ref} {...baba}>
            <Logo />
            <h1>LNHL Draft</h1>
          </ListItemLink>
        )}
      </RevealMove>
    </Baba>
  </Container>
);

export default Home;
