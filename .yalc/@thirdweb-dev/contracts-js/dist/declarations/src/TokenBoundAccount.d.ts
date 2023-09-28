import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export type UserOperationStruct = {
    sender: string;
    nonce: BigNumberish;
    initCode: BytesLike;
    callData: BytesLike;
    callGasLimit: BigNumberish;
    verificationGasLimit: BigNumberish;
    preVerificationGas: BigNumberish;
    maxFeePerGas: BigNumberish;
    maxPriorityFeePerGas: BigNumberish;
    paymasterAndData: BytesLike;
    signature: BytesLike;
};
export type UserOperationStructOutput = [
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    sender: string;
    nonce: BigNumber;
    initCode: string;
    callData: string;
    callGasLimit: BigNumber;
    verificationGasLimit: BigNumber;
    preVerificationGas: BigNumber;
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    paymasterAndData: string;
    signature: string;
};
export interface TokenBoundAccountInterface extends utils.Interface {
    functions: {
        "addDeposit()": FunctionFragment;
        "contractURI()": FunctionFragment;
        "entryPoint()": FunctionFragment;
        "execute(address,uint256,bytes)": FunctionFragment;
        "executeBatch(address[],uint256[],bytes[])": FunctionFragment;
        "factory()": FunctionFragment;
        "getDeposit()": FunctionFragment;
        "getNonce()": FunctionFragment;
        "initialize(address,bytes)": FunctionFragment;
        "isValidSignature(bytes32,bytes)": FunctionFragment;
        "isValidSigner(address,(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
        "isValidSigner(address,bytes)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "setContractURI(string)": FunctionFragment;
        "state()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "token()": FunctionFragment;
        "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
        "withdrawDepositTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addDeposit" | "contractURI" | "entryPoint" | "execute" | "executeBatch" | "factory" | "getDeposit" | "getNonce" | "initialize" | "isValidSignature" | "isValidSigner(address,(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))" | "isValidSigner(address,bytes)" | "multicall" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "owner" | "setContractURI" | "state" | "supportsInterface" | "token" | "validateUserOp" | "withdrawDepositTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "addDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "entryPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeBatch", values: [string[], BigNumberish[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "isValidSignature", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "isValidSigner(address,(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))", values: [string, UserOperationStruct]): string;
    encodeFunctionData(functionFragment: "isValidSigner(address,bytes)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setContractURI", values: [string]): string;
    encodeFunctionData(functionFragment: "state", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "validateUserOp", values: [UserOperationStruct, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawDepositTo", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSigner(address,(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSigner(address,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUserOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawDepositTo", data: BytesLike): Result;
    events: {
        "ContractURIUpdated(string,string)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "TokenBoundAccountCreated(address,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenBoundAccountCreated"): EventFragment;
}
export interface ContractURIUpdatedEventObject {
    prevURI: string;
    newURI: string;
}
export type ContractURIUpdatedEvent = TypedEvent<[
    string,
    string
], ContractURIUpdatedEventObject>;
export type ContractURIUpdatedEventFilter = TypedEventFilter<ContractURIUpdatedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface TokenBoundAccountCreatedEventObject {
    account: string;
    data: string;
}
export type TokenBoundAccountCreatedEvent = TypedEvent<[
    string,
    string
], TokenBoundAccountCreatedEventObject>;
export type TokenBoundAccountCreatedEventFilter = TypedEventFilter<TokenBoundAccountCreatedEvent>;
export interface TokenBoundAccount extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TokenBoundAccountInterface;
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
        addDeposit(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        entryPoint(overrides?: CallOverrides): Promise<[string]>;
        execute(_target: string, _value: BigNumberish, _calldata: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeBatch(_target: string[], _value: BigNumberish[], _calldata: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;
        getNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            magicValue: string;
        }>;
        "isValidSigner(address,(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))"(_signer: string, arg1: UserOperationStruct, overrides?: CallOverrides): Promise<[boolean]>;
        "isValidSigner(address,bytes)"(signer: string, arg1: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        state(overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        token(overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber
        ] & {
            chainId: BigNumber;
            tokenContract: string;
            tokenId: BigNumber;
        }>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addDeposit(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    contractURI(overrides?: CallOverrides): Promise<string>;
    entryPoint(overrides?: CallOverrides): Promise<string>;
    execute(_target: string, _value: BigNumberish, _calldata: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeBatch(_target: string[], _value: BigNumberish[], _calldata: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
    getNonce(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<string>;
    "isValidSigner(address,(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))"(_signer: string, arg1: UserOperationStruct, overrides?: CallOverrides): Promise<boolean>;
    "isValidSigner(address,bytes)"(signer: string, arg1: BytesLike, overrides?: CallOverrides): Promise<string>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    setContractURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    state(overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    token(overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        BigNumber
    ] & {
        chainId: BigNumber;
        tokenContract: string;
        tokenId: BigNumber;
    }>;
    validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addDeposit(overrides?: CallOverrides): Promise<void>;
        contractURI(overrides?: CallOverrides): Promise<string>;
        entryPoint(overrides?: CallOverrides): Promise<string>;
        execute(_target: string, _value: BigNumberish, _calldata: BytesLike, overrides?: CallOverrides): Promise<void>;
        executeBatch(_target: string[], _value: BigNumberish[], _calldata: BytesLike[], overrides?: CallOverrides): Promise<void>;
        factory(overrides?: CallOverrides): Promise<string>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_defaultAdmin: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<string>;
        "isValidSigner(address,(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))"(_signer: string, arg1: UserOperationStruct, overrides?: CallOverrides): Promise<boolean>;
        "isValidSigner(address,bytes)"(signer: string, arg1: BytesLike, overrides?: CallOverrides): Promise<string>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;
        state(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        token(overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber
        ] & {
            chainId: BigNumber;
            tokenContract: string;
            tokenId: BigNumber;
        }>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ContractURIUpdated(string,string)"(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        ContractURIUpdated(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "TokenBoundAccountCreated(address,bytes)"(account?: string | null, data?: BytesLike | null): TokenBoundAccountCreatedEventFilter;
        TokenBoundAccountCreated(account?: string | null, data?: BytesLike | null): TokenBoundAccountCreatedEventFilter;
    };
    estimateGas: {
        addDeposit(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        entryPoint(overrides?: CallOverrides): Promise<BigNumber>;
        execute(_target: string, _value: BigNumberish, _calldata: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeBatch(_target: string[], _value: BigNumberish[], _calldata: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "isValidSigner(address,(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))"(_signer: string, arg1: UserOperationStruct, overrides?: CallOverrides): Promise<BigNumber>;
        "isValidSigner(address,bytes)"(signer: string, arg1: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        state(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addDeposit(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(_target: string, _value: BigNumberish, _calldata: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeBatch(_target: string[], _value: BigNumberish[], _calldata: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isValidSigner(address,(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))"(_signer: string, arg1: UserOperationStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isValidSigner(address,bytes)"(signer: string, arg1: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        state(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=TokenBoundAccount.d.ts.map