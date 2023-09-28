'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
var evm_wallets_abstract_dist_thirdwebDevWalletsEvmWalletsAbstract = require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
var ethers = require('ethers');
var sdk = require('@thirdweb-dev/sdk');
require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
require('eventemitter3');

var _signer = /*#__PURE__*/new WeakMap();
class PrivateKeyWallet extends evm_wallets_abstract_dist_thirdwebDevWalletsEvmWalletsAbstract.AbstractWallet {
  constructor(privateKey, chain, secretKey) {
    super();
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldSet(this, _signer, new ethers.ethers.Wallet(privateKey, chain ? sdk.getChainProvider(chain, {
      secretKey
    }) : undefined));
  }
  async getSigner() {
    return classPrivateFieldSet._classPrivateFieldGet(this, _signer);
  }
}

exports.PrivateKeyWallet = PrivateKeyWallet;