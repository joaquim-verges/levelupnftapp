'use strict';

var assertWindowEthereum = require('./assertWindowEthereum-83395b2f.cjs.dev.js');

function getInjectedRainbowProvider() {
  if (typeof window === "undefined") {
    return;
  }
  function getReady(ethereum) {
    const isRainbow = !!ethereum?.isRainbow;
    if (!isRainbow) {
      return;
    }
    // Brave tries to make itself look like MetaMask
    // Could also try RPC `web3_clientVersion` if following is unreliable
    if (ethereum.isBraveWallet && !ethereum._events && !ethereum._state) {
      return;
    }
    if (ethereum.isPhantom) {
      return;
    }
    if (ethereum.isAvalanche) {
      return;
    }
    if (ethereum.isBitKeep) {
      return;
    }
    if (ethereum.isMathWallet) {
      return;
    }
    if (ethereum.isZerion) {
      return;
    }
    if (ethereum.isKuCoinWallet) {
      return;
    }
    if (ethereum.isPortal) {
      return;
    }
    if (ethereum.isTokenPocket) {
      return;
    }
    if (ethereum.isTokenary) {
      return;
    }
    return ethereum;
  }
  if (assertWindowEthereum.assertWindowEthereum(globalThis.window)) {
    if (globalThis.window.ethereum?.providers) {
      return globalThis.window.ethereum.providers.find(getReady);
    }
    return getReady(globalThis.window.ethereum);
  }
}

exports.getInjectedRainbowProvider = getInjectedRainbowProvider;