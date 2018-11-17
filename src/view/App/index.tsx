import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Authenticate from '../Authenticate';
import { CssReset } from './styled';

const LazyHome = React.lazy(() => import('../Home'));
const LazyDraft = React.lazy(() => import('../Draft'));
const LazyProfile = React.lazy(() => import('../Profile'));

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssReset />
    <Authenticate>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Switch>
            <Route component={LazyDraft} path="/draft" />
            <Route component={LazyProfile} path="/profile" />
            <Route component={LazyHome} path="*" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Authenticate>
  </MuiThemeProvider>
);

export default App;
