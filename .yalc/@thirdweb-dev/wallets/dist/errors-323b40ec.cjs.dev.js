'use strict';

var defineProperty = require('./defineProperty-21d22449.cjs.dev.js');

/**
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors per EIP-1474.
 * @see https://eips.ethereum.org/EIPS/eip-1474
 */
class RpcError extends Error {
  constructor( /** Human-readable string */
  message, options) {
    const {
      cause,
      code,
      data
    } = options;
    if (!Number.isInteger(code)) {
      throw new Error('"code" must be an integer.');
    }
    if (!message || typeof message !== "string") {
      throw new Error('"message" must be a nonempty string.');
    }
    super(`${message}. Cause: ${JSON.stringify(cause)}`);
    this.cause = cause;
    this.code = code;
    this.data = data;
  }
}

/**
 * Error subclass implementing Ethereum Provider errors per EIP-1193.
 * @see https://eips.ethereum.org/EIPS/eip-1193
 */
class ProviderRpcError extends RpcError {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor( /** Human-readable string */
  message, options) {
    const {
      cause,
      code,
      data
    } = options;
    if (!(Number.isInteger(code) && code >= 1000 && code <= 4999)) {
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    }
    super(message, {
      cause,
      code,
      data
    });
  }
}
class AddChainError extends Error {
  constructor() {
    super(...arguments);
    defineProperty._defineProperty(this, "name", "AddChainError");
    defineProperty._defineProperty(this, "message", "Error adding chain");
  }
}
class ChainNotConfiguredError extends Error {
  constructor(_ref) {
    let {
      chainId,
      connectorId
    } = _ref;
    super(`Chain "${chainId}" not configured for connector "${connectorId}".`);
    defineProperty._defineProperty(this, "name", "ChainNotConfigured");
  }
}
class ConnectorNotFoundError extends Error {
  constructor() {
    super(...arguments);
    defineProperty._defineProperty(this, "name", "ConnectorNotFoundError");
    defineProperty._defineProperty(this, "message", "Connector not found");
  }
}
class ResourceUnavailableError extends RpcError {
  constructor(cause) {
    super("Resource unavailable", {
      cause,
      code: -32002
    });
    defineProperty._defineProperty(this, "name", "ResourceUnavailable");
  }
}
class SwitchChainError extends ProviderRpcError {
  constructor(cause) {
    super("Error switching chain", {
      cause,
      code: 4902
    });
    defineProperty._defineProperty(this, "name", "SwitchChainError");
  }
}
class UserRejectedRequestError extends ProviderRpcError {
  constructor(cause) {
    super("User rejected request", {
      cause,
      code: 4001
    });
    defineProperty._defineProperty(this, "name", "UserRejectedRequestError");
  }
}

// Ethers does not have an error type so we can use this for casting
// https://github.com/ethers-io/ethers.js/blob/main/packages/logger/src.ts/index.ts#L268

exports.AddChainError = AddChainError;
exports.ChainNotConfiguredError = ChainNotConfiguredError;
exports.ConnectorNotFoundError = ConnectorNotFoundError;
exports.ProviderRpcError = ProviderRpcError;
exports.ResourceUnavailableError = ResourceUnavailableError;
exports.SwitchChainError = SwitchChainError;
exports.UserRejectedRequestError = UserRejectedRequestError;