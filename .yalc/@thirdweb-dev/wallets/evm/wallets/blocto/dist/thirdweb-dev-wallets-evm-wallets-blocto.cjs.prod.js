'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var connector = require('../../../../dist/connector-1b2fa06d.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-06270032.cjs.prod.js');
var walletIds = require('../../../../dist/walletIds-e0cdfa11.cjs.prod.js');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-cf746c9e.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');
require('@thirdweb-dev/sdk');

class BloctoWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  constructor(options) {
    super(BloctoWallet.id, options);
    defineProperty._defineProperty(this, "name", "Blocto");
  }
  async initConnector() {
    const {
      BloctoConnector
    } = await Promise.resolve().then(function () { return require('../../../connectors/blocto/dist/thirdweb-dev-wallets-evm-connectors-blocto.cjs.prod.js'); });
    const bloctoConnector = new BloctoConnector({
      chains: this.chains,
      options: {
        appId: this.options?.appId,
        chainId: this.options?.chain?.chainId
      }
    });
    this.connector = new connector.WagmiAdapter(bloctoConnector);
    return this.connector;
  }
  async getConnector() {
    if (!this.connector) {
      return await this.initConnector();
    }
    return Promise.resolve(this.connector);
  }
}
defineProperty._defineProperty(BloctoWallet, "id", walletIds.walletIds.blocto);
defineProperty._defineProperty(BloctoWallet, "meta", {
  name: "Blocto",
  iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIyMzNfMjM4NykiPgo8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHJ4PSIxMiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMyLjkwMjggMTguMzA2M0MyOC4zOTExIDE4LjMwNjMgMjMuOTg3MyAyMC4wNDU5IDIwLjY5NTIgMjMuMTMxOUMxNy4wODQzIDI2LjUxNzYgMTQuNzk5MiAzMS41MTc3IDEzLjQ4OTMgMzYuMjIxMkMxMi42MzE0IDM5LjI5OTIgMTIuMjAxNiA0Mi40OTE1IDEyLjIwMTYgNDUuNjg1M0MxMi4yMDE2IDQ2LjY1MTEgMTIuMjQxMiA0Ny42MDg5IDEyLjMxNzQgNDguNTU1NkMxMi40MTA5IDQ5LjcwNjkgMTMuNTMyMSA1MC41MDQ2IDE0LjY0ODUgNTAuMjAzM0MxNS42MjIyIDQ5Ljk0MTYgMTYuNjQ2NiA0OS44MDA1IDE3LjcwMjggNDkuODAwNUMxOS44NzIyIDQ5LjgwMDUgMjEuOTA1MiA1MC4zOTA0IDIzLjY0OCA1MS40MjEyQzIzLjY5MDggNTEuNDQ2NiAyMy43MzIgNTEuNDcxOSAyMy43NzQ4IDUxLjQ5NTdDMjYuNjA3MSA1My4xODQ2IDI5Ljk0ODQgNTQuMTEyMyAzMy41MTE3IDUzLjk5MzRDNDIuODA2MiA1My42ODU3IDUwLjM5OSA0Ni4xMjMgNTAuNzQxNiAzNi44MzAxQzUxLjExNTggMjYuNjYzNSA0Mi45ODY5IDE4LjMwNDcgMzIuOTA0NCAxOC4zMDQ3TDMyLjkwMjggMTguMzA2M1pNMzIuOTAyOCA0NC4zMTJDMjguMzk3NSA0NC4zMTIgMjQuNzQ1NCA0MC42NTk5IDI0Ljc0NTQgMzYuMTU2MkMyNC43NDU0IDMxLjY1MjUgMjguMzk3NSAyNy45OTg3IDMyLjkwMjggMjcuOTk4N0MzNy40MDgxIDI3Ljk5ODcgNDEuMDYwMiAzMS42NTA5IDQxLjA2MDIgMzYuMTU2MkM0MS4wNjAyIDQwLjY2MTQgMzcuNDA4MSA0NC4zMTIgMzIuOTAyOCA0NC4zMTJaIiBmaWxsPSIjMTRBQUZGIi8+CjxwYXRoIGQ9Ik0yNS41NjM2IDEyLjY4MjZDMjUuNTYzNiAxNS4wMzQ0IDI0LjMzMTUgMTcuMjE2NCAyMi4zMDggMTguNDE1M0MyMS4wMzc3IDE5LjE2ODYgMTkuODQ2OCAyMC4wNTgyIDE4Ljc2ODQgMjEuMDcxNUMxNi4zNzU1IDIzLjMxMzkgMTQuNTg5OCAyNi4wNjUzIDEzLjI2NzMgMjguNzkyOUMxMy4wMDcyIDI5LjMzMDQgMTIuMiAyOS4xNDAyIDEyLjIgMjguNTQyM1YxMi42ODI2QzEyLjIgOC45OTI0MiAxNS4xOTI0IDYgMTguODgyNiA2QzIyLjU3MjggNiAyNS41NjUyIDguOTkyNDIgMjUuNTY1MiAxMi42ODI2SDI1LjU2MzZaIiBmaWxsPSIjMDA3NUZGIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjIzM18yMzg3Ij4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
  urls: {
    android: "https://play.google.com/store/apps/details?id=com.portto.blocto",
    ios: "https://apps.apple.com/app/blocto/id1481181682"
  }
});

exports.BloctoWallet = BloctoWallet;