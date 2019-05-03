// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { Metadata } from '@polkadot/types';

/**
 * @name getMdVersion
 * @returns The runtime metadata version of the node
 *
 */
export function getMdVersion (api: ApiInterface$Rx) {
  return (api.rpc.state.getMetadata() as any as Observable<Metadata>)
    .pipe(
      map((md) => md.version)
    );
}
