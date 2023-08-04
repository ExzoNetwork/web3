const endpoint = {
  http: {
    devnet: 'http://rpc-dev-1.exzo.network',
    testnet: 'http://rpc-test-1.exzo.network',
    'mainnet-beta': 'http://rpc-main-1.exzo.network',
  },
  https: {
    devnet: 'http://rpc-dev-1.exzo.network',
    testnet: 'http://rpc-test-1.exzo.network',
    'mainnet-beta': 'http://rpc-main-1.exzo.network',
  },
};

export type Cluster = 'devnet' | 'testnet' | 'mainnet-beta';

/**
 * Retrieves the RPC API URL for the specified cluster
 */
export function clusterApiUrl(cluster?: Cluster, tls?: boolean): string {
  const key = tls === false ? 'http' : 'https';

  if (!cluster) {
    return endpoint[key]['devnet'];
  }

  const url = endpoint[key][cluster];
  if (!url) {
    throw new Error(`Unknown ${key} cluster: ${cluster}`);
  }
  return url;
}
