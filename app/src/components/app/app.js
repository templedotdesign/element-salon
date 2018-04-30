import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../routes/home/home';
import Layout from '../layout/layout';
import Services from '../../routes/services/services';
import Contact from '../../routes/contact/contact';
import Retail from '../../routes/retail/retail';
import OrdersAdmin from '../../routes/admin/orders/ordersAdmin';
import ShoppingCart from '../../routes/retail/shoppingCart/shoppingCart';
import Gallery from '../../routes/gallery/gallery';

const app = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/services' component={Services} exact/>
          <Route path='/contact' component={Contact} exact/>
          <Route path='/retail' component={Retail} exact/>
          <Route path='/retail/cart' component={ShoppingCart} exact/>
          <Route path='/admin/orders' component={OrdersAdmin} exact/>
          <Route path='/gallery' component={Gallery} exact/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default app;
