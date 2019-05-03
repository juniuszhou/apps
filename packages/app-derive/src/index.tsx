// Copyright 2017-2019 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// some types, AppProps for the app and I18nProps to indicate
// translatable strings. Generally the latter is quite "light",
// `t` is inject into props (see the HOC export) and `t('any text')
// does the translation
import { AppProps, I18nProps } from '@polkadot/ui-app/types';
import React from 'react';
import './index.css';
import { withCalls } from '@polkadot/ui-api';

const DAVE = '5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy';
const DAVEindex = 'F7XB';

type Props = AppProps & I18nProps & {
  staking_intentionsBalances: any,
  staking_controllers: any
};

class App extends React.PureComponent<Props> {
  render () {
    console.log('this.props.staking_intentionsBalances', this.props.staking_intentionsBalances);
    console.log('this.props.staking_controllers', this.props.staking_controllers);
    return (
      <main>
        test
      </main>
    );
  }

}

export default withCalls<Props>(
  'derive.staking.intentionsBalances',
  ['derive.staking.controllers', { params: ['5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY'] }]
)(App);
