import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace ISignatureMintERC20 {
    type MintRequestStruct = {
        to: string;
        primarySaleRecipient: string;
        quantity: BigNumberish;
        price: BigNumberish;
        currency: string;
        validityStartTimestamp: BigNumberish;
        validityEndTimestamp: BigNumberish;
        uid: BytesLike;
    };
    type MintRequestStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string
    ] & {
        to: string;
        primarySaleRecipient: string;
        quantity: BigNumber;
        price: BigNumber;
        currency: string;
        validityStartTimestamp: BigNumber;
        validityEndTimestamp: BigNumber;
        uid: string;
    };
}
export interface SignatureMintERC20Interface extends utils.Interface {
    functions: {
        "mintWithSignature((address,address,uint256,uint256,address,uint128,uint128,bytes32),bytes)": FunctionFragment;
        "verify((address,address,uint256,uint256,address,uint128,uint128,bytes32),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "mintWithSignature" | "verify"): FunctionFragment;
    encodeFunctionData(functionFragment: "mintWithSignature", values: [ISignatureMintERC20.MintRequestStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "verify", values: [ISignatureMintERC20.MintRequestStruct, BytesLike]): string;
    decodeFunctionResult(functionFragment: "mintWithSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
    events: {
        "TokensMintedWithSignature(address,address,tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensMintedWithSignature"): EventFragment;
}
export interface TokensMintedWithSignatureEventObject {
    signer: string;
    mintedTo: string;
    mintRequest: ISignatureMintERC20.MintRequestStructOutput;
}
export type TokensMintedWithSignatureEvent = TypedEvent<[
    string,
    string,
    ISignatureMintERC20.MintRequestStructOutput
], TokensMintedWithSignatureEventObject>;
export type TokensMintedWithSignatureEventFilter = TypedEventFilter<TokensMintedWithSignatureEvent>;
export interface SignatureMintERC20 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SignatureMintERC20Interface;
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
        mintWithSignature(req: ISignatureMintERC20.MintRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verify(_req: ISignatureMintERC20.MintRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            signer: string;
        }>;
    };
    mintWithSignature(req: ISignatureMintERC20.MintRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verify(_req: ISignatureMintERC20.MintRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
        success: boolean;
        signer: string;
    }>;
    callStatic: {
        mintWithSignature(req: ISignatureMintERC20.MintRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<string>;
        verify(_req: ISignatureMintERC20.MintRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            signer: string;
        }>;
    };
    filters: {
        "TokensMintedWithSignature(address,address,tuple)"(signer?: string | null, mintedTo?: string | null, mintRequest?: null): TokensMintedWithSignatureEventFilter;
        TokensMintedWithSignature(signer?: string | null, mintedTo?: string | null, mintRequest?: null): TokensMintedWithSignatureEventFilter;
    };
    estimateGas: {
        mintWithSignature(req: ISignatureMintERC20.MintRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verify(_req: ISignatureMintERC20.MintRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        mintWithSignature(req: ISignatureMintERC20.MintRequestStruct, signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verify(_req: ISignatureMintERC20.MintRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SignatureMintERC20.d.ts.map