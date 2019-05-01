// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AccountId from './AccountId';

// Wrapper for a AuthorityId. Same as an normal AccountId, i.e. a wrapper
// around publicKey, however specialized since it specifically points to
// an authority.
export default class AuthorityId extends AccountId {
}
