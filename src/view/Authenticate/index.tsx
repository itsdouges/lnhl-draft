import React, { useState, useLayoutEffect, useCallback } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import Button from '@material-ui/core/Button';
import { CurrentUser } from './styled';

interface AuthenticateProps {
  children: React.ReactElement<{}>;
}

const Authenticate: React.FunctionComponent<AuthenticateProps> = ({ children }) => {
  const [user, setUser] = useState(() => {
    netlifyIdentity.init();
    return netlifyIdentity.currentUser();
  });

  useLayoutEffect(
    () => {
      netlifyIdentity.on('login', user => {
        setUser(user);
        netlifyIdentity.close();
      });

      if (!user) {
        netlifyIdentity.open();
      }
    },
    [false]
  );

  const logout = useCallback(
    () => {
      netlifyIdentity.logout();
      setUser(null);
      netlifyIdentity.open();
    },
    [user]
  );

  if (user) {
    return (
      <React.Fragment>
        {children}
        <CurrentUser>
          {user.user_metadata.full_name}
          <Button onClick={logout}>Logout</Button>
        </CurrentUser>
      </React.Fragment>
    );
  }

  return null;
};

export default Authenticate;
