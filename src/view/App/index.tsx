import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Background } from './styled';

const LazyHome = React.lazy(() => import('../Home'));
const LazyDraft = React.lazy(() => import('../Draft'));

const App = () => (
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
);

export default App;
