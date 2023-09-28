import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { W as WagmiAdapter } from '../../../../dist/connector-20f7cf73.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-04cc6f4f.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-18a8e969.esm.js';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-71fe23d8.esm.js';
import '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import 'ethers';
import '@thirdweb-dev/sdk';

class BloctoWallet extends AbstractClientWallet {
  constructor(options) {
    super(BloctoWallet.id, options);
    _defineProperty(this, "name", "Blocto");
  }
  async initConnector() {
    const {
      BloctoConnector
    } = await import('../../../connectors/blocto/dist/thirdweb-dev-wallets-evm-connectors-blocto.esm.js');
    const bloctoConnector = new BloctoConnector({
      chains: this.chains,
      options: {
        appId: this.options?.appId,
        chainId: this.options?.chain?.chainId
      }
    });
    this.connector = new WagmiAdapter(bloctoConnector);
    return this.connector;
  }
  async getConnector() {
    if (!this.connector) {
      return await this.initConnector();
    }
    return Promise.resolve(this.connector);
  }
}
_defineProperty(BloctoWallet, "id", walletIds.blocto);
_defineProperty(BloctoWallet, "meta", {
  name: "Blocto",
  iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIyMzNfMjM4NykiPgo8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHJ4PSIxMiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMyLjkwMjggMTguMzA2M0MyOC4zOTExIDE4LjMwNjMgMjMuOTg3MyAyMC4wNDU5IDIwLjY5NTIgMjMuMTMxOUMxNy4wODQzIDI2LjUxNzYgMTQuNzk5MiAzMS41MTc3IDEzLjQ4OTMgMzYuMjIxMkMxMi42MzE0IDM5LjI5OTIgMTIuMjAxNiA0Mi40OTE1IDEyLjIwMTYgNDUuNjg1M0MxMi4yMDE2IDQ2LjY1MTEgMTIuMjQxMiA0Ny42MDg5IDEyLjMxNzQgNDguNTU1NkMxMi40MTA5IDQ5LjcwNjkgMTMuNTMyMSA1MC41MDQ2IDE0LjY0ODUgNTAuMjAzM0MxNS42MjIyIDQ5Ljk0MTYgMTYuNjQ2NiA0OS44MDA1IDE3LjcwMjggNDkuODAwNUMxOS44NzIyIDQ5LjgwMDUgMjEuOTA1MiA1MC4zOTA0IDIzLjY0OCA1MS40MjEyQzIzLjY5MDggNTEuNDQ2NiAyMy43MzIgNTEuNDcxOSAyMy43NzQ4IDUxLjQ5NTdDMjYuNjA3MSA1My4xODQ2IDI5Ljk0ODQgNTQuMTEyMyAzMy41MTE3IDUzLjk5MzRDNDIuODA2MiA1My42ODU3IDUwLjM5OSA0Ni4xMjMgNTAuNzQxNiAzNi44MzAxQzUxLjExNTggMjYuNjYzNSA0Mi45ODY5IDE4LjMwNDcgMzIuOTA0NCAxOC4zMDQ3TDMyLjkwMjggMTguMzA2M1pNMzIuOTAyOCA0NC4zMTJDMjguMzk3NSA0NC4zMTIgMjQuNzQ1NCA0MC42NTk5IDI0Ljc0NTQgMzYuMTU2MkMyNC43NDU0IDMxLjY1MjUgMjguMzk3NSAyNy45OTg3IDMyLjkwMjggMjcuOTk4N0MzNy40MDgxIDI3Ljk5ODcgNDEuMDYwMiAzMS42NTA5IDQxLjA2MDIgMzYuMTU2MkM0MS4wNjAyIDQwLjY2MTQgMzcuNDA4MSA0NC4zMTIgMzIuOTAyOCA0NC4zMTJaIiBmaWxsPSIjMTRBQUZGIi8+CjxwYXRoIGQ9Ik0yNS41NjM2IDEyLjY4MjZDMjUuNTYzNiAxNS4wMzQ0IDI0LjMzMTUgMTcuMjE2NCAyMi4zMDggMTguNDE1M0MyMS4wMzc3IDE5LjE2ODYgMTkuODQ2OCAyMC4wNTgyIDE4Ljc2ODQgMjEuMDcxNUMxNi4zNzU1IDIzLjMxMzkgMTQuNTg5OCAyNi4wNjUzIDEzLjI2NzMgMjguNzkyOUMxMy4wMDcyIDI5LjMzMDQgMTIuMiAyOS4xNDAyIDEyLjIgMjguNTQyM1YxMi42ODI2QzEyLjIgOC45OTI0MiAxNS4xOTI0IDYgMTguODgyNiA2QzIyLjU3MjggNiAyNS41NjUyIDguOTkyNDIgMjUuNTY1MiAxMi42ODI2SDI1LjU2MzZaIiBmaWxsPSIjMDA3NUZGIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjIzM18yMzg3Ij4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
  urls: {
    android: "https://play.google.com/store/apps/details?id=com.portto.blocto",
    ios: "https://apps.apple.com/app/blocto/id1481181682"
  }
});

export { BloctoWallet };