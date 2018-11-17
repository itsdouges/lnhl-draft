import React from 'react';
import { Page, Logo } from '../common/Elements';
import { useUser } from '../Authenticate';

const Profile = () => {
  const user = useUser();

  return (
    <Page
      name="profile"
      header={
        <React.Fragment>
          <Logo />

          <h1>{user.user_metadata.full_name}</h1>
        </React.Fragment>
      }
    >
      profile
    </Page>
  );
};

export default Profile;
