import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
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
export interface ISharedMetadataBatchInterface extends utils.Interface {
    functions: {
        "deleteSharedMetadata(bytes32)": FunctionFragment;
        "getAllSharedMetadata()": FunctionFragment;
        "setSharedMetadata((string,string,string,string),bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deleteSharedMetadata" | "getAllSharedMetadata" | "setSharedMetadata"): FunctionFragment;
    encodeFunctionData(functionFragment: "deleteSharedMetadata", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getAllSharedMetadata", values?: undefined): string;
    encodeFunctionData(functionFragment: "setSharedMetadata", values: [ISharedMetadataBatch.SharedMetadataInfoStruct, BytesLike]): string;
    decodeFunctionResult(functionFragment: "deleteSharedMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllSharedMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSharedMetadata", data: BytesLike): Result;
    events: {
        "SharedMetadataDeleted(bytes32)": EventFragment;
        "SharedMetadataUpdated(bytes32,string,string,string,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SharedMetadataDeleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SharedMetadataUpdated"): EventFragment;
}
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
export interface ISharedMetadataBatch extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISharedMetadataBatchInterface;
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
        deleteSharedMetadata(id: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllSharedMetadata(overrides?: CallOverrides): Promise<[
            ISharedMetadataBatch.SharedMetadataWithIdStructOutput[]
        ] & {
            metadata: ISharedMetadataBatch.SharedMetadataWithIdStructOutput[];
        }>;
        setSharedMetadata(metadata: ISharedMetadataBatch.SharedMetadataInfoStruct, id: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    deleteSharedMetadata(id: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllSharedMetadata(overrides?: CallOverrides): Promise<ISharedMetadataBatch.SharedMetadataWithIdStructOutput[]>;
    setSharedMetadata(metadata: ISharedMetadataBatch.SharedMetadataInfoStruct, id: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        deleteSharedMetadata(id: BytesLike, overrides?: CallOverrides): Promise<void>;
        getAllSharedMetadata(overrides?: CallOverrides): Promise<ISharedMetadataBatch.SharedMetadataWithIdStructOutput[]>;
        setSharedMetadata(metadata: ISharedMetadataBatch.SharedMetadataInfoStruct, id: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SharedMetadataDeleted(bytes32)"(id?: BytesLike | null): SharedMetadataDeletedEventFilter;
        SharedMetadataDeleted(id?: BytesLike | null): SharedMetadataDeletedEventFilter;
        "SharedMetadataUpdated(bytes32,string,string,string,string)"(id?: BytesLike | null, name?: null, description?: null, imageURI?: null, animationURI?: null): SharedMetadataUpdatedEventFilter;
        SharedMetadataUpdated(id?: BytesLike | null, name?: null, description?: null, imageURI?: null, animationURI?: null): SharedMetadataUpdatedEventFilter;
    };
    estimateGas: {
        deleteSharedMetadata(id: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllSharedMetadata(overrides?: CallOverrides): Promise<BigNumber>;
        setSharedMetadata(metadata: ISharedMetadataBatch.SharedMetadataInfoStruct, id: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deleteSharedMetadata(id: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllSharedMetadata(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setSharedMetadata(metadata: ISharedMetadataBatch.SharedMetadataInfoStruct, id: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ISharedMetadataBatch.d.ts.map