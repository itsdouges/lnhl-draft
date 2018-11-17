import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Authenticate from '../Authenticate';
import { Background } from './styled';

const LazyHome = React.lazy(() => import('../Home'));
const LazyDraft = React.lazy(() => import('../Draft'));

// Immediately start loading.
// yubaba falls over if we defer loading it until later shrug.
import('../Draft');
import('../Home');

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Background />

    <Authenticate>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Switch>
            <Route component={LazyDraft} path="/draft" />
            <Route component={LazyHome} path="*" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Authenticate>
  </MuiThemeProvider>
);

export default App;
