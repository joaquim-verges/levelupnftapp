import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface RoyaltyPaymentsLogicInterface extends utils.Interface {
    functions: {
        "getRoyalty(address,uint256,uint256)": FunctionFragment;
        "getRoyaltyEngineAddress()": FunctionFragment;
        "setRoyaltyEngine(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getRoyalty" | "getRoyaltyEngineAddress" | "setRoyaltyEngine" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "getRoyalty", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoyaltyEngineAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "setRoyaltyEngine", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "getRoyalty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoyaltyEngineAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoyaltyEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "RoyaltyEngineUpdated(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "RoyaltyEngineUpdated"): EventFragment;
}
export interface RoyaltyEngineUpdatedEventObject {
    previousAddress: string;
    newAddress: string;
}
export type RoyaltyEngineUpdatedEvent = TypedEvent<[
    string,
    string
], RoyaltyEngineUpdatedEventObject>;
export type RoyaltyEngineUpdatedEventFilter = TypedEventFilter<RoyaltyEngineUpdatedEvent>;
export interface RoyaltyPaymentsLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RoyaltyPaymentsLogicInterface;
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
        getRoyalty(tokenAddress: string, tokenId: BigNumberish, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getRoyaltyEngineAddress(overrides?: CallOverrides): Promise<[string] & {
            royaltyEngineAddress: string;
        }>;
        setRoyaltyEngine(_royaltyEngineAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    getRoyalty(tokenAddress: string, tokenId: BigNumberish, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getRoyaltyEngineAddress(overrides?: CallOverrides): Promise<string>;
    setRoyaltyEngine(_royaltyEngineAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        getRoyalty(tokenAddress: string, tokenId: BigNumberish, value: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            recipients: string[];
            amounts: BigNumber[];
        }>;
        getRoyaltyEngineAddress(overrides?: CallOverrides): Promise<string>;
        setRoyaltyEngine(_royaltyEngineAddress: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "RoyaltyEngineUpdated(address,address)"(previousAddress?: string | null, newAddress?: string | null): RoyaltyEngineUpdatedEventFilter;
        RoyaltyEngineUpdated(previousAddress?: string | null, newAddress?: string | null): RoyaltyEngineUpdatedEventFilter;
    };
    estimateGas: {
        getRoyalty(tokenAddress: string, tokenId: BigNumberish, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getRoyaltyEngineAddress(overrides?: CallOverrides): Promise<BigNumber>;
        setRoyaltyEngine(_royaltyEngineAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getRoyalty(tokenAddress: string, tokenId: BigNumberish, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getRoyaltyEngineAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setRoyaltyEngine(_royaltyEngineAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=RoyaltyPaymentsLogic.d.ts.map