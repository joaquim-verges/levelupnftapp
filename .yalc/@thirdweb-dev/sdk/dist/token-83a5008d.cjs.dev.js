'use strict';

var ethers = require('ethers');
var contractPublisher = require('./contract-publisher-e9595070.cjs.dev.js');
var erc20History = require('./erc-20-history-68f21476.cjs.dev.js');
var erc20Standard = require('./erc-20-standard-16dcc63f.cjs.dev.js');
require('./QueryParams-012ec906.cjs.dev.js');
require('bn.js');
require('zod');
require('tiny-invariant');
require('uuid');
require('@thirdweb-dev/storage');
require('@thirdweb-dev/contracts-js/dist/abis/IERC165.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json');
require('fast-deep-equal');
require('merkletreejs');
require('@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json');
require('@thirdweb-dev/chains');
require('bs58');
require('@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDrop.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20Permit.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMulticall.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC721_V3.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721AQueryableUpgradeable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json');
require('@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/LazyMintWithTier.json');
require('@thirdweb-dev/contracts-js/dist/abis/SharedMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/zora_IERC721Drop.json');
require('@thirdweb-dev/contracts-js/dist/abis/ILoyaltyCard.json');
require('@thirdweb-dev/contracts-js/dist/abis/INFTMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDrop1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC1155_V2.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Supply.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC2771Context.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAppURI.json');
require('@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDirectListings.json');
require('@thirdweb-dev/contracts-js/dist/abis/IEnglishAuctions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IOffers.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json');
require('@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json');
require('@thirdweb-dev/contracts-js/dist/abis/Ownable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAirdropERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAirdropERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAirdropERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAccountFactoryCore.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAccountPermissions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAccount.json');
require('ethers/lib/utils');
require('@thirdweb-dev/contracts-js/dist/abis/Forwarder.json');
require('cross-fetch');
require('eventemitter3');

/**
 * Create a standard crypto token or cryptocurrency.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "token");
 * ```
 *
 * @public
 */
class Token extends erc20Standard.StandardErc20 {
  static contractRoles = contractPublisher.NFT_BASE_CONTRACT_ROLES;

  /**
   * Signature Minting
   * @remarks Generate tokens that can be minted only with your own signature, attaching your own set of mint conditions.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
   * const signedPayload = contract.signature.generate(payload);
   *
   * // now anyone can mint the tokens
   * const tx = contract.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * ```
   */

  /**
   * @internal
   */

  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new contractPublisher.ContractWrapper(network, address, abi, options, storage);
    super(contractWrapper, storage, chainId);
    this.abi = contractPublisher.AbiSchema.parse(abi || []);
    this.metadata = new contractPublisher.ContractMetadata(this.contractWrapper, contractPublisher.TokenErc20ContractSchema, this.storage);
    this.app = new contractPublisher.ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new contractPublisher.ContractRoles(this.contractWrapper, Token.contractRoles);
    this.sales = new contractPublisher.ContractPrimarySale(this.contractWrapper);
    this.events = new contractPublisher.ContractEvents(this.contractWrapper);
    this.history = new erc20History.TokenERC20History(this.contractWrapper, this.events);
    this.encoder = new contractPublisher.ContractEncoder(this.contractWrapper);
    this.estimator = new contractPublisher.GasCostEstimator(this.contractWrapper);
    this.platformFees = new contractPublisher.ContractPlatformFee(this.contractWrapper);
    this.interceptor = new contractPublisher.ContractInterceptor(this.contractWrapper);
    this.signature = new contractPublisher.Erc20SignatureMintable(this.contractWrapper, this.roles);
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get your wallet voting power for the current checkpoints
   *
   * @returns the amount of voting power in tokens
   */
  async getVoteBalance() {
    return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress());
  }
  async getVoteBalanceOf(account) {
    return await this.erc20.getValue(await this.contractWrapper.read("getVotes", [account]));
  }

  /**
   * Get your voting delegatee address
   *
   * @returns the address of your vote delegatee
   */
  async getDelegation() {
    return await this.getDelegationOf(await this.contractWrapper.getSignerAddress());
  }

  /**
   * Get a specific address voting delegatee address
   *
   * @returns the address of your vote delegatee
   */
  async getDelegationOf(account) {
    return await this.contractWrapper.read("delegates", [await contractPublisher.resolveAddress(account)]);
  }

  /**
   * Get whether users can transfer tokens from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.read("hasRole", [contractPublisher.getRoleHash("transfer"), ethers.constants.AddressZero]);
    return !anyoneCanTransfer;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Mint Tokens for the connected wallet
   *
   * @remarks See {@link Token.mintTo}
   */
  mint = /* @__PURE__ */contractPublisher.buildTransactionFunction(async amount => {
    return this.erc20.mint.prepare(amount);
  });

  /**
   * Mint Tokens
   *
   * @remarks Mint tokens to a specified address.
   *
   * @example
   * ```javascript
   * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
   * const amount = "1.5"; // The amount of this token you want to mint
   *
   * await contract.mintTo(toAddress, amount);
   * ```
   */
  mintTo = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (to, amount) => {
    return this.erc20.mintTo.prepare(to, amount);
  });

  /**
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param amount - The amount of tokens you want to mint
   *
   * @deprecated Use `contract.mint.prepare(...args)` instead
   */
  async getMintTransaction(to, amount) {
    return this.erc20.getMintTransaction(to, amount);
  }

  /**
   * Mint Tokens To Many Wallets
   *
   * @remarks Mint tokens to many wallets in one transaction.
   *
   * @example
   * ```javascript
   * // Data of the tokens you want to mint
   * const data = [
   *   {
   *     toAddress: "{{wallet_address}}", // Address to mint tokens to
   *     amount: 0.2, // How many tokens to mint to specified address
   *   },
   *  {
   *    toAddress: "0x...",
   *    amount: 1.4,
   *  }
   * ]
   *
   * await contract.mintBatchTo(data);
   * ```
   */
  mintBatchTo = /* @__PURE__ */contractPublisher.buildTransactionFunction(async args => {
    return this.erc20.mintBatchTo.prepare(args);
  });

  /**
   * Lets you delegate your voting power to the delegateeAddress
   *
   * @param delegateeAddress - delegatee wallet address
   * @alpha
   */
  delegateTo = /* @__PURE__ */contractPublisher.buildTransactionFunction(async delegateeAddress => {
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "delegate",
      args: [await contractPublisher.resolveAddress(delegateeAddress)]
    });
  });

  /**
   * Burn Tokens
   *
   * @remarks Burn tokens held by the connected wallet
   *
   * @example
   * ```javascript
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.burnTokens(amount);
   * ```
   */
  burn = /* @__PURE__ */contractPublisher.buildTransactionFunction(amount => {
    return this.erc20.burn.prepare(amount);
  });

  /**
   * Burn Tokens
   *
   * @remarks Burn tokens held by the specified wallet
   *
   * @example
   * ```javascript
   * // Address of the wallet sending the tokens
   * const holderAddress = "{{wallet_address}}";
   *
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.burnFrom(holderAddress, amount);
   * ```
   */
  burnFrom = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (holder, amount) => {
    return this.erc20.burnFrom.prepare(holder, amount);
  });

  /**
   * @internal
   */
  async prepare(method, args, overrides) {
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method,
      args,
      overrides
    });
  }

  /**
   * @internal
   */
  async call(functionName, args, overrides) {
    return this.contractWrapper.call(functionName, args, overrides);
  }
}

exports.Token = Token;