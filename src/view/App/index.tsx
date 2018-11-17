import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Background } from './styled';

const LazyHome = React.lazy(() => import('../Home'));
const LazyDraft = React.lazy(() => import('../Draft'));

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <div>
        <Background />

        <Suspense fallback={null}>
          <Switch>
            <Route component={LazyDraft} path="/draft" />
            <Route component={LazyHome} path="*" />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App;
