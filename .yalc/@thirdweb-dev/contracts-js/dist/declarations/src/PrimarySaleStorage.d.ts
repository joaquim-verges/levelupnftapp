import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface PrimarySaleStorageInterface extends utils.Interface {
    functions: {
        "PRIMARY_SALE_STORAGE_POSITION()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "PRIMARY_SALE_STORAGE_POSITION"): FunctionFragment;
    encodeFunctionData(functionFragment: "PRIMARY_SALE_STORAGE_POSITION", values?: undefined): string;
    decodeFunctionResult(functionFragment: "PRIMARY_SALE_STORAGE_POSITION", data: BytesLike): Result;
    events: {};
}
export interface PrimarySaleStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PrimarySaleStorageInterface;
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
        PRIMARY_SALE_STORAGE_POSITION(overrides?: CallOverrides): Promise<[string]>;
    };
    PRIMARY_SALE_STORAGE_POSITION(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        PRIMARY_SALE_STORAGE_POSITION(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        PRIMARY_SALE_STORAGE_POSITION(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        PRIMARY_SALE_STORAGE_POSITION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=PrimarySaleStorage.d.ts.map