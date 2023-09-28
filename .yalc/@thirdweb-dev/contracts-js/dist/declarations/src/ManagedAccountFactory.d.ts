import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IExtension {
    type ExtensionMetadataStruct = {
        name: string;
        metadataURI: string;
        implementation: string;
    };
    type ExtensionMetadataStructOutput = [string, string, string] & {
        name: string;
        metadataURI: string;
        implementation: string;
    };
    type ExtensionFunctionStruct = {
        functionSelector: BytesLike;
        functionSignature: string;
    };
    type ExtensionFunctionStructOutput = [string, string] & {
        functionSelector: string;
        functionSignature: string;
    };
    type ExtensionStruct = {
        metadata: IExtension.ExtensionMetadataStruct;
        functions: IExtension.ExtensionFunctionStruct[];
    };
    type ExtensionStructOutput = [
        IExtension.ExtensionMetadataStructOutput,
        IExtension.ExtensionFunctionStructOutput[]
    ] & {
        metadata: IExtension.ExtensionMetadataStructOutput;
        functions: IExtension.ExtensionFunctionStructOutput[];
    };
}
export interface ManagedAccountFactoryInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "_disableFunctionInExtension(string,bytes4)": FunctionFragment;
        "accountImplementation()": FunctionFragment;
        "addExtension(((string,string,address),(bytes4,string)[]))": FunctionFragment;
        "contractURI()": FunctionFragment;
        "createAccount(address,bytes)": FunctionFragment;
        "defaultExtensions()": FunctionFragment;
        "disableFunctionInExtension(string,bytes4)": FunctionFragment;
        "enableFunctionInExtension(string,(bytes4,string))": FunctionFragment;
        "entrypoint()": FunctionFragment;
        "getAccountsOfSigner(address)": FunctionFragment;
        "getAddress(address,bytes)": FunctionFragment;
        "getAllAccounts()": FunctionFragment;
        "getAllExtensions()": FunctionFragment;
        "getExtension(string)": FunctionFragment;
        "getImplementationForFunction(bytes4)": FunctionFragment;
        "getMetadataForFunction(bytes4)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "hasRoleWithSwitch(bytes32,address)": FunctionFragment;
        "isRegistered(address)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "onRegister(address,bytes)": FunctionFragment;
        "onSignerAdded(address,address,bytes)": FunctionFragment;
        "onSignerRemoved(address,address,bytes)": FunctionFragment;
        "removeExtension(string)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "replaceExtension(((string,string,address),(bytes4,string)[]))": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setContractURI(string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "_disableFunctionInExtension" | "accountImplementation" | "addExtension" | "contractURI" | "createAccount" | "defaultExtensions" | "disableFunctionInExtension" | "enableFunctionInExtension" | "entrypoint" | "getAccountsOfSigner" | "getAddress" | "getAllAccounts" | "getAllExtensions" | "getExtension" | "getImplementationForFunction" | "getMetadataForFunction" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "hasRoleWithSwitch" | "isRegistered" | "multicall" | "onRegister" | "onSignerAdded" | "onSignerRemoved" | "removeExtension" | "renounceRole" | "replaceExtension" | "revokeRole" | "setContractURI"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "_disableFunctionInExtension", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "accountImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "addExtension", values: [IExtension.ExtensionStruct]): string;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "createAccount", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "defaultExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "disableFunctionInExtension", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "enableFunctionInExtension", values: [string, IExtension.ExtensionFunctionStruct]): string;
    encodeFunctionData(functionFragment: "entrypoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccountsOfSigner", values: [string]): string;
    encodeFunctionData(functionFragment: "getAddress", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getAllAccounts", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "getImplementationForFunction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getMetadataForFunction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRoleWithSwitch", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "isRegistered", values: [string]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "onRegister", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "onSignerAdded", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "onSignerRemoved", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "removeExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "replaceExtension", values: [IExtension.ExtensionStruct]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setContractURI", values: [string]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_disableFunctionInExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accountImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableFunctionInExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableFunctionInExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entrypoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountsOfSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAccounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getImplementationForFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMetadataForFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRoleWithSwitch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onRegister", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onSignerAdded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onSignerRemoved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replaceExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURI", data: BytesLike): Result;
    events: {
        "AccountCreated(address,address)": EventFragment;
        "ContractURIUpdated(string,string)": EventFragment;
        "ExtensionAdded(string,address,tuple)": EventFragment;
        "ExtensionRemoved(string,tuple)": EventFragment;
        "ExtensionReplaced(string,address,tuple)": EventFragment;
        "FunctionDisabled(string,bytes4,tuple)": EventFragment;
        "FunctionEnabled(string,bytes4,tuple,tuple)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "SignerAdded(address,address)": EventFragment;
        "SignerRemoved(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccountCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExtensionAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExtensionRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExtensionReplaced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FunctionDisabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FunctionEnabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignerAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignerRemoved"): EventFragment;
}
export interface AccountCreatedEventObject {
    account: string;
    accountAdmin: string;
}
export type AccountCreatedEvent = TypedEvent<[
    string,
    string
], AccountCreatedEventObject>;
export type AccountCreatedEventFilter = TypedEventFilter<AccountCreatedEvent>;
export interface ContractURIUpdatedEventObject {
    prevURI: string;
    newURI: string;
}
export type ContractURIUpdatedEvent = TypedEvent<[
    string,
    string
], ContractURIUpdatedEventObject>;
export type ContractURIUpdatedEventFilter = TypedEventFilter<ContractURIUpdatedEvent>;
export interface ExtensionAddedEventObject {
    name: string;
    implementation: string;
    extension: IExtension.ExtensionStructOutput;
}
export type ExtensionAddedEvent = TypedEvent<[
    string,
    string,
    IExtension.ExtensionStructOutput
], ExtensionAddedEventObject>;
export type ExtensionAddedEventFilter = TypedEventFilter<ExtensionAddedEvent>;
export interface ExtensionRemovedEventObject {
    name: string;
    extension: IExtension.ExtensionStructOutput;
}
export type ExtensionRemovedEvent = TypedEvent<[
    string,
    IExtension.ExtensionStructOutput
], ExtensionRemovedEventObject>;
export type ExtensionRemovedEventFilter = TypedEventFilter<ExtensionRemovedEvent>;
export interface ExtensionReplacedEventObject {
    name: string;
    implementation: string;
    extension: IExtension.ExtensionStructOutput;
}
export type ExtensionReplacedEvent = TypedEvent<[
    string,
    string,
    IExtension.ExtensionStructOutput
], ExtensionReplacedEventObject>;
export type ExtensionReplacedEventFilter = TypedEventFilter<ExtensionReplacedEvent>;
export interface FunctionDisabledEventObject {
    name: string;
    functionSelector: string;
    extMetadata: IExtension.ExtensionMetadataStructOutput;
}
export type FunctionDisabledEvent = TypedEvent<[
    string,
    string,
    IExtension.ExtensionMetadataStructOutput
], FunctionDisabledEventObject>;
export type FunctionDisabledEventFilter = TypedEventFilter<FunctionDisabledEvent>;
export interface FunctionEnabledEventObject {
    name: string;
    functionSelector: string;
    extFunction: IExtension.ExtensionFunctionStructOutput;
    extMetadata: IExtension.ExtensionMetadataStructOutput;
}
export type FunctionEnabledEvent = TypedEvent<[
    string,
    string,
    IExtension.ExtensionFunctionStructOutput,
    IExtension.ExtensionMetadataStructOutput
], FunctionEnabledEventObject>;
export type FunctionEnabledEventFilter = TypedEventFilter<FunctionEnabledEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface SignerAddedEventObject {
    account: string;
    signer: string;
}
export type SignerAddedEvent = TypedEvent<[
    string,
    string
], SignerAddedEventObject>;
export type SignerAddedEventFilter = TypedEventFilter<SignerAddedEvent>;
export interface SignerRemovedEventObject {
    account: string;
    signer: string;
}
export type SignerRemovedEvent = TypedEvent<[
    string,
    string
], SignerRemovedEventObject>;
export type SignerRemovedEventFilter = TypedEventFilter<SignerRemovedEvent>;
export interface ManagedAccountFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ManagedAccountFactoryInterface;
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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        _disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        accountImplementation(overrides?: CallOverrides): Promise<[string]>;
        addExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        createAccount(_admin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        defaultExtensions(overrides?: CallOverrides): Promise<[string]>;
        disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        enableFunctionInExtension(_extensionName: string, _function: IExtension.ExtensionFunctionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        entrypoint(overrides?: CallOverrides): Promise<[string]>;
        getAccountsOfSigner(signer: string, overrides?: CallOverrides): Promise<[string[]] & {
            accounts: string[];
        }>;
        getAddress(_adminSigner: string, _data: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getAllAccounts(overrides?: CallOverrides): Promise<[string[]]>;
        getAllExtensions(overrides?: CallOverrides): Promise<[
            IExtension.ExtensionStructOutput[]
        ] & {
            allExtensions: IExtension.ExtensionStructOutput[];
        }>;
        getExtension(extensionName: string, overrides?: CallOverrides): Promise<[IExtension.ExtensionStructOutput]>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getMetadataForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<[IExtension.ExtensionMetadataStructOutput]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            member: string;
        }>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            count: BigNumber;
        }>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isRegistered(_account: string, overrides?: CallOverrides): Promise<[boolean]>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onRegister(_defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onSignerAdded(_signer: string, _defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onSignerRemoved(_signer: string, _defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        replaceExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    _disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    accountImplementation(overrides?: CallOverrides): Promise<string>;
    addExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    contractURI(overrides?: CallOverrides): Promise<string>;
    createAccount(_admin: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    defaultExtensions(overrides?: CallOverrides): Promise<string>;
    disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    enableFunctionInExtension(_extensionName: string, _function: IExtension.ExtensionFunctionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    entrypoint(overrides?: CallOverrides): Promise<string>;
    getAccountsOfSigner(signer: string, overrides?: CallOverrides): Promise<string[]>;
    getAddress(_adminSigner: string, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
    getAllAccounts(overrides?: CallOverrides): Promise<string[]>;
    getAllExtensions(overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput[]>;
    getExtension(extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput>;
    getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<string>;
    getMetadataForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<IExtension.ExtensionMetadataStructOutput>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    isRegistered(_account: string, overrides?: CallOverrides): Promise<boolean>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onRegister(_defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onSignerAdded(_signer: string, _defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onSignerRemoved(_signer: string, _defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeExtension(_extensionName: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    replaceExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        _disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: CallOverrides): Promise<void>;
        accountImplementation(overrides?: CallOverrides): Promise<string>;
        addExtension(_extension: IExtension.ExtensionStruct, overrides?: CallOverrides): Promise<void>;
        contractURI(overrides?: CallOverrides): Promise<string>;
        createAccount(_admin: string, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        defaultExtensions(overrides?: CallOverrides): Promise<string>;
        disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: CallOverrides): Promise<void>;
        enableFunctionInExtension(_extensionName: string, _function: IExtension.ExtensionFunctionStruct, overrides?: CallOverrides): Promise<void>;
        entrypoint(overrides?: CallOverrides): Promise<string>;
        getAccountsOfSigner(signer: string, overrides?: CallOverrides): Promise<string[]>;
        getAddress(_adminSigner: string, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        getAllAccounts(overrides?: CallOverrides): Promise<string[]>;
        getAllExtensions(overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput[]>;
        getExtension(extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<string>;
        getMetadataForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<IExtension.ExtensionMetadataStructOutput>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        isRegistered(_account: string, overrides?: CallOverrides): Promise<boolean>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        onRegister(_defaultAdmin: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        onSignerAdded(_signer: string, _defaultAdmin: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        onSignerRemoved(_signer: string, _defaultAdmin: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        removeExtension(_extensionName: string, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        replaceExtension(_extension: IExtension.ExtensionStruct, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AccountCreated(address,address)"(account?: string | null, accountAdmin?: string | null): AccountCreatedEventFilter;
        AccountCreated(account?: string | null, accountAdmin?: string | null): AccountCreatedEventFilter;
        "ContractURIUpdated(string,string)"(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        ContractURIUpdated(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        "ExtensionAdded(string,address,tuple)"(name?: string | null, implementation?: string | null, extension?: null): ExtensionAddedEventFilter;
        ExtensionAdded(name?: string | null, implementation?: string | null, extension?: null): ExtensionAddedEventFilter;
        "ExtensionRemoved(string,tuple)"(name?: string | null, extension?: null): ExtensionRemovedEventFilter;
        ExtensionRemoved(name?: string | null, extension?: null): ExtensionRemovedEventFilter;
        "ExtensionReplaced(string,address,tuple)"(name?: string | null, implementation?: string | null, extension?: null): ExtensionReplacedEventFilter;
        ExtensionReplaced(name?: string | null, implementation?: string | null, extension?: null): ExtensionReplacedEventFilter;
        "FunctionDisabled(string,bytes4,tuple)"(name?: string | null, functionSelector?: BytesLike | null, extMetadata?: null): FunctionDisabledEventFilter;
        FunctionDisabled(name?: string | null, functionSelector?: BytesLike | null, extMetadata?: null): FunctionDisabledEventFilter;
        "FunctionEnabled(string,bytes4,tuple,tuple)"(name?: string | null, functionSelector?: BytesLike | null, extFunction?: null, extMetadata?: null): FunctionEnabledEventFilter;
        FunctionEnabled(name?: string | null, functionSelector?: BytesLike | null, extFunction?: null, extMetadata?: null): FunctionEnabledEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "SignerAdded(address,address)"(account?: string | null, signer?: string | null): SignerAddedEventFilter;
        SignerAdded(account?: string | null, signer?: string | null): SignerAddedEventFilter;
        "SignerRemoved(address,address)"(account?: string | null, signer?: string | null): SignerRemovedEventFilter;
        SignerRemoved(account?: string | null, signer?: string | null): SignerRemovedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        _disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        accountImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        addExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        createAccount(_admin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        defaultExtensions(overrides?: CallOverrides): Promise<BigNumber>;
        disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        enableFunctionInExtension(_extensionName: string, _function: IExtension.ExtensionFunctionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        entrypoint(overrides?: CallOverrides): Promise<BigNumber>;
        getAccountsOfSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAddress(_adminSigner: string, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getAllAccounts(overrides?: CallOverrides): Promise<BigNumber>;
        getAllExtensions(overrides?: CallOverrides): Promise<BigNumber>;
        getExtension(extensionName: string, overrides?: CallOverrides): Promise<BigNumber>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getMetadataForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isRegistered(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onRegister(_defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onSignerAdded(_signer: string, _defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onSignerRemoved(_signer: string, _defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        replaceExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        accountImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createAccount(_admin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        defaultExtensions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        enableFunctionInExtension(_extensionName: string, _function: IExtension.ExtensionFunctionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        entrypoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountsOfSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddress(_adminSigner: string, _data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAccounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllExtensions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExtension(extensionName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMetadataForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isRegistered(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onRegister(_defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onSignerAdded(_signer: string, _defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onSignerRemoved(_signer: string, _defaultAdmin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        replaceExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ManagedAccountFactory.d.ts.map