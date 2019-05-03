// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { combineLatest, Observable, of } from 'rxjs';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address } from '@polkadot/types';

import { DerivedBalances } from '../types';
import { drr } from '../util/drr';
import { votingBalance } from './votingBalance';

/**
 * @name votingBalances(Array<AccountId | AccountIndex | Address | string>) : `Array<DerivedBalances>`
 * @description
 * Returns an array of [[DerivedBalances]]'s.
 */

export function votingBalances (api: ApiInterface$Rx) {
  return (addresses?: Array<AccountId | AccountIndex | Address | string>): Observable<Array<DerivedBalances>> => {
    console.log('ADDRESSES votingBalances', addresses);

    addresses[0].map((nomineeId, index) => {
      console.log('nomineeId', nomineeId);
      console.log('index', index);
      return(
        nomineeId
      )
    }
    )

    return !addresses || !addresses.length
      ? of([]).pipe(drr())
      : combineLatest(addresses.map(votingBalance(api))).pipe(drr());
  };
}
