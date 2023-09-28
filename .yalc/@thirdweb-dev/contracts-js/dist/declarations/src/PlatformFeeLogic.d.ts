import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface PlatformFeeLogicInterface extends utils.Interface {
    functions: {
        "getPlatformFeeInfo()": FunctionFragment;
        "setPlatformFeeInfo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getPlatformFeeInfo" | "setPlatformFeeInfo"): FunctionFragment;
    encodeFunctionData(functionFragment: "getPlatformFeeInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPlatformFeeInfo", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPlatformFeeInfo", data: BytesLike): Result;
    events: {
        "FlatPlatformFeeUpdated(address,uint256)": EventFragment;
        "PlatformFeeInfoUpdated(address,uint256)": EventFragment;
        "PlatformFeeTypeUpdated(uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FlatPlatformFeeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlatformFeeInfoUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlatformFeeTypeUpdated"): EventFragment;
}
export interface FlatPlatformFeeUpdatedEventObject {
    platformFeeRecipient: string;
    flatFee: BigNumber;
}
export type FlatPlatformFeeUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], FlatPlatformFeeUpdatedEventObject>;
export type FlatPlatformFeeUpdatedEventFilter = TypedEventFilter<FlatPlatformFeeUpdatedEvent>;
export interface PlatformFeeInfoUpdatedEventObject {
    platformFeeRecipient: string;
    platformFeeBps: BigNumber;
}
export type PlatformFeeInfoUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], PlatformFeeInfoUpdatedEventObject>;
export type PlatformFeeInfoUpdatedEventFilter = TypedEventFilter<PlatformFeeInfoUpdatedEvent>;
export interface PlatformFeeTypeUpdatedEventObject {
    feeType: number;
}
export type PlatformFeeTypeUpdatedEvent = TypedEvent<[
    number
], PlatformFeeTypeUpdatedEventObject>;
export type PlatformFeeTypeUpdatedEventFilter = TypedEventFilter<PlatformFeeTypeUpdatedEvent>;
export interface PlatformFeeLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PlatformFeeLogicInterface;
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
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
    setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FlatPlatformFeeUpdated(address,uint256)"(platformFeeRecipient?: null, flatFee?: null): FlatPlatformFeeUpdatedEventFilter;
        FlatPlatformFeeUpdated(platformFeeRecipient?: null, flatFee?: null): FlatPlatformFeeUpdatedEventFilter;
        "PlatformFeeInfoUpdated(address,uint256)"(platformFeeRecipient?: string | null, platformFeeBps?: null): PlatformFeeInfoUpdatedEventFilter;
        PlatformFeeInfoUpdated(platformFeeRecipient?: string | null, platformFeeBps?: null): PlatformFeeInfoUpdatedEventFilter;
        "PlatformFeeTypeUpdated(uint8)"(feeType?: null): PlatformFeeTypeUpdatedEventFilter;
        PlatformFeeTypeUpdated(feeType?: null): PlatformFeeTypeUpdatedEventFilter;
    };
    estimateGas: {
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<BigNumber>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=PlatformFeeLogic.d.ts.map