import React from 'react';
import { Container, LNHLLogo } from './styled';
import { ListItemLink, Logo } from '../common/Elements';
import { useUser } from '../Authenticate';

const Home: React.FunctionComponent<{}> = () => {
  const user = useUser();

  return (
    <Container>
      <LNHLLogo />

      <ul>
        <ListItemLink to="/draft" name="draft">
          <Logo />
          <h1>LNHL Draft</h1>
        </ListItemLink>
        <ListItemLink to="/profile" name="profile">
          <Logo />
          <h1>{user.user_metadata.full_name}</h1>
        </ListItemLink>
      </ul>
    </Container>
  );
};

export default Home;
