import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Draft from '../Draft';
import Home from '../Home';
import { Background } from './styled';

const App = () => (
  <Suspense fallback={null}>
    <BrowserRouter>
      <div>
        <Background />

        <Switch>
          <Route component={Draft} path="/draft" />
          <Route component={Home} path="*" />
        </Switch>
      </div>
    </BrowserRouter>
  </Suspense>
);

export default App;
