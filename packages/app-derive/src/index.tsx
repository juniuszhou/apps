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
  state_getMetadata: any,
  balances_validatingBalance: any,
  balances_validatingBalances: any,
  balances_votingBalance: any,
  balances_votingBalances: any,
  balances_votingBalancesNominatorsFor: any
};;

class App extends React.PureComponent<Props> {
  render () {
    this.props.state_getMetadata && console.log('state_getMetadata', this.props.state_getMetadata.version)
   // console.log('this.props.balances_validatingBalance', this.props.balances_validatingBalance);
    //console.log('this.props.balances_validatingBalances', this.props.balances_validatingBalances);
    // console.log('this.props.balances_votingBalance', this.props.balances_votingBalance);
    // console.log('this.props.balances_votingBalances', this.props.balances_votingBalances);
    console.log('this.props.balances_votingBalancesNominatorsFor', this.props.balances_votingBalancesNominatorsFor);

    return (
      <main>
        test
      </main>
    );
  }

}

export default withCalls<Props>(
  'rpc.state.getMetadata',
  // ['derive.balances.validatingBalance', { params: ['5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY'] }],
  // ['derive.balances.validatingBalances', {params: [[
  //   '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY',
  //   '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty'
  // ]]
  // }],
  //['derive.balances.votingBalance', { params: ['5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY']}],
  // ['derive.balances.votingBalances', {params: [
  //   ['5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY', '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty']
  // ]}],
  ['derive.balances.votingBalancesNominatorsFor', { params: ['5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'] }]
)(App);
