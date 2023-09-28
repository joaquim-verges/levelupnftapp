import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IClaimCondition {
    type ClaimConditionStruct = {
        startTimestamp: BigNumberish;
        maxClaimableSupply: BigNumberish;
        supplyClaimed: BigNumberish;
        quantityLimitPerWallet: BigNumberish;
        merkleRoot: BytesLike;
        pricePerToken: BigNumberish;
        currency: string;
        metadata: string;
    };
    type ClaimConditionStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string,
        string
    ] & {
        startTimestamp: BigNumber;
        maxClaimableSupply: BigNumber;
        supplyClaimed: BigNumber;
        quantityLimitPerWallet: BigNumber;
        merkleRoot: string;
        pricePerToken: BigNumber;
        currency: string;
        metadata: string;
    };
}
export declare namespace IDrop {
    type AllowlistProofStruct = {
        proof: BytesLike[];
        quantityLimitPerWallet: BigNumberish;
        pricePerToken: BigNumberish;
        currency: string;
    };
    type AllowlistProofStructOutput = [
        string[],
        BigNumber,
        BigNumber,
        string
    ] & {
        proof: string[];
        quantityLimitPerWallet: BigNumber;
        pricePerToken: BigNumber;
        currency: string;
    };
}
export declare namespace IERC721AUpgradeable {
    type TokenOwnershipStruct = {
        addr: string;
        startTimestamp: BigNumberish;
        burned: boolean;
        extraData: BigNumberish;
    };
    type TokenOwnershipStructOutput = [
        string,
        BigNumber,
        boolean,
        number
    ] & {
        addr: string;
        startTimestamp: BigNumber;
        burned: boolean;
        extraData: number;
    };
}
export declare namespace ISharedMetadataBatch {
    type SharedMetadataInfoStruct = {
        name: string;
        description: string;
        imageURI: string;
        animationURI: string;
    };
    type SharedMetadataInfoStructOutput = [
        string,
        string,
        string,
        string
    ] & {
        name: string;
        description: string;
        imageURI: string;
        animationURI: string;
    };
    type SharedMetadataWithIdStruct = {
        id: BytesLike;
        metadata: ISharedMetadataBatch.SharedMetadataInfoStruct;
    };
    type SharedMetadataWithIdStructOutput = [
        string,
        ISharedMetadataBatch.SharedMetadataInfoStructOutput
    ] & {
        id: string;
        metadata: ISharedMetadataBatch.SharedMetadataInfoStructOutput;
    };
}
export interface EvolvingNFTLogicInterface extends utils.Interface {
    functions: {
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "claim(address,uint256,address,uint256,(bytes32[],uint256,uint256,address),bytes)": FunctionFragment;
        "claimCondition()": FunctionFragment;
        "contractURI()": FunctionFragment;
        "deleteSharedMetadata(bytes32)": FunctionFragment;
        "explicitOwnershipOf(uint256)": FunctionFragment;
        "getActiveClaimConditionId()": FunctionFragment;
        "getAllSharedMetadata()": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "getClaimConditionById(uint256)": FunctionFragment;
        "getDefaultRoyaltyInfo()": FunctionFragment;
        "getRoyaltyInfoForToken(uint256)": FunctionFragment;
        "getSupplyClaimedByWallet(uint256,address)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "name()": FunctionFragment;
        "nextTokenIdToClaim()": FunctionFragment;
        "nextTokenIdToMint()": FunctionFragment;
        "operatorRestriction()": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "primarySaleRecipient()": FunctionFragment;
        "royaltyInfo(uint256,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setClaimConditions((uint256,uint256,uint256,uint256,bytes32,uint256,address,string)[],bool)": FunctionFragment;
        "setContractURI(string)": FunctionFragment;
        "setDefaultRoyaltyInfo(address,uint256)": FunctionFragment;
        "setOperatorRestriction(bool)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "setPrimarySaleRecipient(address)": FunctionFragment;
        "setRoyaltyInfoForToken(uint256,address,uint256)": FunctionFragment;
        "setSharedMetadata((string,string,string,string),bytes32)": FunctionFragment;
        "startTokenId()": FunctionFragment;
        "subscribeToRegistry(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "tokensOfOwner(address)": FunctionFragment;
        "tokensOfOwnerIn(address,uint256,uint256)": FunctionFragment;
        "totalMinted()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "verifyClaim(uint256,address,uint256,address,uint256,(bytes32[],uint256,uint256,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approve" | "balanceOf" | "burn" | "claim" | "claimCondition" | "contractURI" | "deleteSharedMetadata" | "explicitOwnershipOf" | "getActiveClaimConditionId" | "getAllSharedMetadata" | "getApproved" | "getClaimConditionById" | "getDefaultRoyaltyInfo" | "getRoyaltyInfoForToken" | "getSupplyClaimedByWallet" | "isApprovedForAll" | "isTrustedForwarder" | "name" | "nextTokenIdToClaim" | "nextTokenIdToMint" | "operatorRestriction" | "owner" | "ownerOf" | "primarySaleRecipient" | "royaltyInfo" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "setClaimConditions" | "setContractURI" | "setDefaultRoyaltyInfo" | "setOperatorRestriction" | "setOwner" | "setPrimarySaleRecipient" | "setRoyaltyInfoForToken" | "setSharedMetadata" | "startTokenId" | "subscribeToRegistry" | "supportsInterface" | "symbol" | "tokenURI" | "tokensOfOwner" | "tokensOfOwnerIn" | "totalMinted" | "totalSupply" | "transferFrom" | "verifyClaim"): FunctionFragment;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "claim", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        IDrop.AllowlistProofStruct,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "claimCondition", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "deleteSharedMetadata", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "explicitOwnershipOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getActiveClaimConditionId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllSharedMetadata", values?: undefined): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getClaimConditionById", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDefaultRoyaltyInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoyaltyInfoForToken", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSupplyClaimedByWallet", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextTokenIdToClaim", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextTokenIdToMint", values?: undefined): string;
    encodeFunctionData(functionFragment: "operatorRestriction", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "primarySaleRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "royaltyInfo", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setClaimConditions", values: [IClaimCondition.ClaimConditionStruct[], boolean]): string;
    encodeFunctionData(functionFragment: "setContractURI", values: [string]): string;
    encodeFunctionData(functionFragment: "setDefaultRoyaltyInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setOperatorRestriction", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "setPrimarySaleRecipient", values: [string]): string;
    encodeFunctionData(functionFragment: "setRoyaltyInfoForToken", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setSharedMetadata", values: [ISharedMetadataBatch.SharedMetadataInfoStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "startTokenId", values?: undefined): string;
    encodeFunctionData(functionFragment: "subscribeToRegistry", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokensOfOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "tokensOfOwnerIn", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalMinted", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifyClaim", values: [
        BigNumberish,
        string,
        BigNumberish,
        string,
        BigNumberish,
        IDrop.AllowlistProofStruct
    ]): string;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimCondition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteSharedMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "explicitOwnershipOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActiveClaimConditionId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllSharedMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimConditionById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDefaultRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoyaltyInfoForToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyClaimedByWallet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextTokenIdToClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextTokenIdToMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorRestriction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "primarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "royaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimConditions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOperatorRestriction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrimarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoyaltyInfoForToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSharedMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startTokenId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subscribeToRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensOfOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensOfOwnerIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalMinted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaim", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "ClaimConditionsUpdated(tuple[],bool)": EventFragment;
        "ConsecutiveTransfer(uint256,uint256,address,address)": EventFragment;
        "ContractURIUpdated(string,string)": EventFragment;
        "DefaultRoyalty(address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OperatorRestriction(bool)": EventFragment;
        "OwnerUpdated(address,address)": EventFragment;
        "PrimarySaleRecipientUpdated(address)": EventFragment;
        "RoyaltyForToken(uint256,address,uint256)": EventFragment;
        "SharedMetadataDeleted(bytes32)": EventFragment;
        "SharedMetadataUpdated(bytes32,string,string,string,string)": EventFragment;
        "TokensClaimed(uint256,address,address,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimConditionsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConsecutiveTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DefaultRoyalty"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OperatorRestriction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrimarySaleRecipientUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoyaltyForToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SharedMetadataDeleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SharedMetadataUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface ClaimConditionsUpdatedEventObject {
    claimConditions: IClaimCondition.ClaimConditionStructOutput[];
    resetEligibility: boolean;
}
export type ClaimConditionsUpdatedEvent = TypedEvent<[
    IClaimCondition.ClaimConditionStructOutput[],
    boolean
], ClaimConditionsUpdatedEventObject>;
export type ClaimConditionsUpdatedEventFilter = TypedEventFilter<ClaimConditionsUpdatedEvent>;
export interface ConsecutiveTransferEventObject {
    fromTokenId: BigNumber;
    toTokenId: BigNumber;
    from: string;
    to: string;
}
export type ConsecutiveTransferEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    string
], ConsecutiveTransferEventObject>;
export type ConsecutiveTransferEventFilter = TypedEventFilter<ConsecutiveTransferEvent>;
export interface ContractURIUpdatedEventObject {
    prevURI: string;
    newURI: string;
}
export type ContractURIUpdatedEvent = TypedEvent<[
    string,
    string
], ContractURIUpdatedEventObject>;
export type ContractURIUpdatedEventFilter = TypedEventFilter<ContractURIUpdatedEvent>;
export interface DefaultRoyaltyEventObject {
    newRoyaltyRecipient: string;
    newRoyaltyBps: BigNumber;
}
export type DefaultRoyaltyEvent = TypedEvent<[
    string,
    BigNumber
], DefaultRoyaltyEventObject>;
export type DefaultRoyaltyEventFilter = TypedEventFilter<DefaultRoyaltyEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OperatorRestrictionEventObject {
    restriction: boolean;
}
export type OperatorRestrictionEvent = TypedEvent<[
    boolean
], OperatorRestrictionEventObject>;
export type OperatorRestrictionEventFilter = TypedEventFilter<OperatorRestrictionEvent>;
export interface OwnerUpdatedEventObject {
    prevOwner: string;
    newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<[
    string,
    string
], OwnerUpdatedEventObject>;
export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;
export interface PrimarySaleRecipientUpdatedEventObject {
    recipient: string;
}
export type PrimarySaleRecipientUpdatedEvent = TypedEvent<[
    string
], PrimarySaleRecipientUpdatedEventObject>;
export type PrimarySaleRecipientUpdatedEventFilter = TypedEventFilter<PrimarySaleRecipientUpdatedEvent>;
export interface RoyaltyForTokenEventObject {
    tokenId: BigNumber;
    royaltyRecipient: string;
    royaltyBps: BigNumber;
}
export type RoyaltyForTokenEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], RoyaltyForTokenEventObject>;
export type RoyaltyForTokenEventFilter = TypedEventFilter<RoyaltyForTokenEvent>;
export interface SharedMetadataDeletedEventObject {
    id: string;
}
export type SharedMetadataDeletedEvent = TypedEvent<[
    string
], SharedMetadataDeletedEventObject>;
export type SharedMetadataDeletedEventFilter = TypedEventFilter<SharedMetadataDeletedEvent>;
export interface SharedMetadataUpdatedEventObject {
    id: string;
    name: string;
    description: string;
    imageURI: string;
    animationURI: string;
}
export type SharedMetadataUpdatedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string
], SharedMetadataUpdatedEventObject>;
export type SharedMetadataUpdatedEventFilter = TypedEventFilter<SharedMetadataUpdatedEvent>;
export interface TokensClaimedEventObject {
    claimConditionIndex: BigNumber;
    claimer: string;
    receiver: string;
    startTokenId: BigNumber;
    quantityClaimed: BigNumber;
}
export type TokensClaimedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber
], TokensClaimedEventObject>;
export type TokensClaimedEventFilter = TypedEventFilter<TokensClaimedEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface EvolvingNFTLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EvolvingNFTLogicInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        approve(operator: string, tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimCondition(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        deleteSharedMetadata(_id: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        explicitOwnershipOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
            IERC721AUpgradeable.TokenOwnershipStructOutput
        ] & {
            ownership: IERC721AUpgradeable.TokenOwnershipStructOutput;
        }>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getAllSharedMetadata(overrides?: CallOverrides): Promise<[
            ISharedMetadataBatch.SharedMetadataWithIdStructOutput[]
        ] & {
            metadata: ISharedMetadataBatch.SharedMetadataWithIdStructOutput[];
        }>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<[
            IClaimCondition.ClaimConditionStructOutput
        ] & {
            condition: IClaimCondition.ClaimConditionStructOutput;
        }>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
        getSupplyClaimedByWallet(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            supplyClaimedByWallet: BigNumber;
        }>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<[boolean]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nextTokenIdToClaim(overrides?: CallOverrides): Promise<[BigNumber]>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<[BigNumber]>;
        operatorRestriction(overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<[string]>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOperatorRestriction(_restriction: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSharedMetadata(metadata: ISharedMetadataBatch.SharedMetadataInfoStruct, _id: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startTokenId(overrides?: CallOverrides): Promise<[BigNumber]>;
        subscribeToRegistry(_subscription: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        tokensOfOwner(owner: string, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        tokensOfOwnerIn(owner: string, start: BigNumberish, stop: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        totalMinted(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<[boolean] & {
            isOverride: boolean;
        }>;
    };
    approve(operator: string, tokenId: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimCondition(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    contractURI(overrides?: CallOverrides): Promise<string>;
    deleteSharedMetadata(_id: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    explicitOwnershipOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<IERC721AUpgradeable.TokenOwnershipStructOutput>;
    getActiveClaimConditionId(overrides?: CallOverrides): Promise<BigNumber>;
    getAllSharedMetadata(overrides?: CallOverrides): Promise<ISharedMetadataBatch.SharedMetadataWithIdStructOutput[]>;
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<IClaimCondition.ClaimConditionStructOutput>;
    getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
    getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
    getSupplyClaimedByWallet(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    name(overrides?: CallOverrides): Promise<string>;
    nextTokenIdToClaim(overrides?: CallOverrides): Promise<BigNumber>;
    nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
    operatorRestriction(overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
    royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        BigNumber
    ] & {
        receiver: string;
        royaltyAmount: BigNumber;
    }>;
    "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOperatorRestriction(_restriction: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(_newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSharedMetadata(metadata: ISharedMetadataBatch.SharedMetadataInfoStruct, _id: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startTokenId(overrides?: CallOverrides): Promise<BigNumber>;
    subscribeToRegistry(_subscription: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    tokensOfOwner(owner: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    tokensOfOwnerIn(owner: string, start: BigNumberish, stop: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    totalMinted(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        approve(operator: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        claimCondition(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        contractURI(overrides?: CallOverrides): Promise<string>;
        deleteSharedMetadata(_id: BytesLike, overrides?: CallOverrides): Promise<void>;
        explicitOwnershipOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<IERC721AUpgradeable.TokenOwnershipStructOutput>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<BigNumber>;
        getAllSharedMetadata(overrides?: CallOverrides): Promise<ISharedMetadataBatch.SharedMetadataWithIdStructOutput[]>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<IClaimCondition.ClaimConditionStructOutput>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
        getSupplyClaimedByWallet(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
        name(overrides?: CallOverrides): Promise<string>;
        nextTokenIdToClaim(overrides?: CallOverrides): Promise<BigNumber>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
        operatorRestriction(overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: CallOverrides): Promise<void>;
        setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setOperatorRestriction(_restriction: boolean, overrides?: CallOverrides): Promise<void>;
        setOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: CallOverrides): Promise<void>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setSharedMetadata(metadata: ISharedMetadataBatch.SharedMetadataInfoStruct, _id: BytesLike, overrides?: CallOverrides): Promise<void>;
        startTokenId(overrides?: CallOverrides): Promise<BigNumber>;
        subscribeToRegistry(_subscription: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        tokensOfOwner(owner: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        tokensOfOwnerIn(owner: string, start: BigNumberish, stop: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        totalMinted(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "ClaimConditionsUpdated(tuple[],bool)"(claimConditions?: null, resetEligibility?: null): ClaimConditionsUpdatedEventFilter;
        ClaimConditionsUpdated(claimConditions?: null, resetEligibility?: null): ClaimConditionsUpdatedEventFilter;
        "ConsecutiveTransfer(uint256,uint256,address,address)"(fromTokenId?: BigNumberish | null, toTokenId?: null, from?: string | null, to?: string | null): ConsecutiveTransferEventFilter;
        ConsecutiveTransfer(fromTokenId?: BigNumberish | null, toTokenId?: null, from?: string | null, to?: string | null): ConsecutiveTransferEventFilter;
        "ContractURIUpdated(string,string)"(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        ContractURIUpdated(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        "DefaultRoyalty(address,uint256)"(newRoyaltyRecipient?: string | null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        DefaultRoyalty(newRoyaltyRecipient?: string | null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OperatorRestriction(bool)"(restriction?: null): OperatorRestrictionEventFilter;
        OperatorRestriction(restriction?: null): OperatorRestrictionEventFilter;
        "OwnerUpdated(address,address)"(prevOwner?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        OwnerUpdated(prevOwner?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        "PrimarySaleRecipientUpdated(address)"(recipient?: string | null): PrimarySaleRecipientUpdatedEventFilter;
        PrimarySaleRecipientUpdated(recipient?: string | null): PrimarySaleRecipientUpdatedEventFilter;
        "RoyaltyForToken(uint256,address,uint256)"(tokenId?: BigNumberish | null, royaltyRecipient?: string | null, royaltyBps?: null): RoyaltyForTokenEventFilter;
        RoyaltyForToken(tokenId?: BigNumberish | null, royaltyRecipient?: string | null, royaltyBps?: null): RoyaltyForTokenEventFilter;
        "SharedMetadataDeleted(bytes32)"(id?: BytesLike | null): SharedMetadataDeletedEventFilter;
        SharedMetadataDeleted(id?: BytesLike | null): SharedMetadataDeletedEventFilter;
        "SharedMetadataUpdated(bytes32,string,string,string,string)"(id?: BytesLike | null, name?: null, description?: null, imageURI?: null, animationURI?: null): SharedMetadataUpdatedEventFilter;
        SharedMetadataUpdated(id?: BytesLike | null, name?: null, description?: null, imageURI?: null, animationURI?: null): SharedMetadataUpdatedEventFilter;
        "TokensClaimed(uint256,address,address,uint256,uint256)"(claimConditionIndex?: BigNumberish | null, claimer?: string | null, receiver?: string | null, startTokenId?: null, quantityClaimed?: null): TokensClaimedEventFilter;
        TokensClaimed(claimConditionIndex?: BigNumberish | null, claimer?: string | null, receiver?: string | null, startTokenId?: null, quantityClaimed?: null): TokensClaimedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
    };
    estimateGas: {
        approve(operator: string, tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimCondition(overrides?: CallOverrides): Promise<BigNumber>;
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        deleteSharedMetadata(_id: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        explicitOwnershipOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<BigNumber>;
        getAllSharedMetadata(overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyClaimedByWallet(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nextTokenIdToClaim(overrides?: CallOverrides): Promise<BigNumber>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
        operatorRestriction(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOperatorRestriction(_restriction: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSharedMetadata(metadata: ISharedMetadataBatch.SharedMetadataInfoStruct, _id: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startTokenId(overrides?: CallOverrides): Promise<BigNumber>;
        subscribeToRegistry(_subscription: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokensOfOwner(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        tokensOfOwnerIn(owner: string, start: BigNumberish, stop: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalMinted(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        approve(operator: string, tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimCondition(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deleteSharedMetadata(_id: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        explicitOwnershipOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllSharedMetadata(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyClaimedByWallet(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextTokenIdToClaim(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operatorRestriction(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOperatorRestriction(_restriction: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSharedMetadata(metadata: ISharedMetadataBatch.SharedMetadataInfoStruct, _id: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startTokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        subscribeToRegistry(_subscription: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokensOfOwner(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokensOfOwnerIn(owner: string, start: BigNumberish, stop: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalMinted(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=EvolvingNFTLogic.d.ts.map