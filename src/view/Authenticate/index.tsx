import React, { useState, useLayoutEffect, useContext, createContext } from 'react';
import netlifyIdentity, { User } from 'netlify-identity-widget';

interface AuthenticateProps {
  children: React.ReactElement<{}>;
}

const UserContext = createContext<User | null>(null);

export const useUser = (): User => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

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

  if (user) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }

  return null;
};

export default Authenticate;
