import * as React from 'react';
import { Route } from 'react-router-dom';
import Foo from './Foo';
import Layout from './Layout';

const Routes = () => {
  return (
    <Layout>
      <Route exact path="/" component={Foo} />
    </Layout>
  );
};

export default Routes;
