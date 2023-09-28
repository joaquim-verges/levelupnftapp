import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface DelayedRevealStorageInterface extends utils.Interface {
    functions: {
        "DELAYED_REVEAL_STORAGE_POSITION()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DELAYED_REVEAL_STORAGE_POSITION"): FunctionFragment;
    encodeFunctionData(functionFragment: "DELAYED_REVEAL_STORAGE_POSITION", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DELAYED_REVEAL_STORAGE_POSITION", data: BytesLike): Result;
    events: {};
}
export interface DelayedRevealStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DelayedRevealStorageInterface;
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
        DELAYED_REVEAL_STORAGE_POSITION(overrides?: CallOverrides): Promise<[string]>;
    };
    DELAYED_REVEAL_STORAGE_POSITION(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        DELAYED_REVEAL_STORAGE_POSITION(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        DELAYED_REVEAL_STORAGE_POSITION(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DELAYED_REVEAL_STORAGE_POSITION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=DelayedRevealStorage.d.ts.map