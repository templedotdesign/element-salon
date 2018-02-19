//Core
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Home from '../../routes/home/home';
import Layout from '../layout/layout';
import Other from '../../routes/other/other';

const app = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/other' component={Other} exact/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default app;
