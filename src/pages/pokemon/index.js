import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../component/AsyncComponent';

const AsyncList = asyncComponent(() => import('./List'));
const AsyncListHoC = asyncComponent(() => import('./List/ListHoC'));
const AsyncListRenderProps = asyncComponent(() => import('./List/ListRenderProps'));
const AsyncDetail = asyncComponent(() => import('./Detail'));

function PokemonContainer({ match }) {
  return <Fragment>
    <Switch>
      <Route path={`${match.path}/detail`} render={routerProps => <AsyncDetail {...routerProps} />} />
      <Route path={`${match.path}/hoc`} render={routerProps => <AsyncListHoC {...routerProps} />} />
      <Route path={`${match.path}/renderProps`} render={routerProps => <AsyncListRenderProps {...routerProps} />} />
      <Route path={match.path} exact render={routerProps => <AsyncList {...routerProps} />} />
    </Switch>
  </Fragment>
}

export default PokemonContainer;