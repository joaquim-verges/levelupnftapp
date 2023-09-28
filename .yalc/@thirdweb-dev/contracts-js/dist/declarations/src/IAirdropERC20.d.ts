import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IAirdropERC20 {
    type AirdropContentStruct = {
        recipient: string;
        amount: BigNumberish;
    };
    type AirdropContentStructOutput = [string, BigNumber] & {
        recipient: string;
        amount: BigNumber;
    };
}
export interface IAirdropERC20Interface extends utils.Interface {
    functions: {
        "airdropERC20(address,address,(address,uint256)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "airdropERC20"): FunctionFragment;
    encodeFunctionData(functionFragment: "airdropERC20", values: [string, string, IAirdropERC20.AirdropContentStruct[]]): string;
    decodeFunctionResult(functionFragment: "airdropERC20", data: BytesLike): Result;
    events: {
        "AirdropFailed(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AirdropFailed"): EventFragment;
}
export interface AirdropFailedEventObject {
    tokenAddress: string;
    tokenOwner: string;
    recipient: string;
    amount: BigNumber;
}
export type AirdropFailedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], AirdropFailedEventObject>;
export type AirdropFailedEventFilter = TypedEventFilter<AirdropFailedEvent>;
export interface IAirdropERC20 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAirdropERC20Interface;
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
        airdropERC20(tokenAddress: string, tokenOwner: string, contents: IAirdropERC20.AirdropContentStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    airdropERC20(tokenAddress: string, tokenOwner: string, contents: IAirdropERC20.AirdropContentStruct[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        airdropERC20(tokenAddress: string, tokenOwner: string, contents: IAirdropERC20.AirdropContentStruct[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AirdropFailed(address,address,address,uint256)"(tokenAddress?: string | null, tokenOwner?: string | null, recipient?: string | null, amount?: null): AirdropFailedEventFilter;
        AirdropFailed(tokenAddress?: string | null, tokenOwner?: string | null, recipient?: string | null, amount?: null): AirdropFailedEventFilter;
    };
    estimateGas: {
        airdropERC20(tokenAddress: string, tokenOwner: string, contents: IAirdropERC20.AirdropContentStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        airdropERC20(tokenAddress: string, tokenOwner: string, contents: IAirdropERC20.AirdropContentStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IAirdropERC20.d.ts.map