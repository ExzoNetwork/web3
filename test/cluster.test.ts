import {expect} from 'chai';

import {clusterApiUrl} from '../src/util/cluster';

describe('Cluster Util', () => {
  it('invalid', () => {
    expect(() => {
      clusterApiUrl('abc123' as any);
    }).to.throw();
  });

  it('devnet', () => {
    expect(clusterApiUrl()).to.eq('http://rpc-dev-1.exzo.network');
    expect(clusterApiUrl('devnet')).to.eq('http://rpc-dev-1.exzo.network');
    expect(clusterApiUrl('devnet', true)).to.eq(
      'http://rpc-dev-1.exzo.network',
    );
    expect(clusterApiUrl('devnet', false)).to.eq(
      'http://api.devnet.solana.com',
    );
  });
});
