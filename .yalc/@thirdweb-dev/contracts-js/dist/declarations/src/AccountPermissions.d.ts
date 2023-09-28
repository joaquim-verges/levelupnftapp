import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IAccountPermissions {
    type SignerPermissionRequestStruct = {
        signer: string;
        approvedTargets: string[];
        nativeTokenLimitPerTransaction: BigNumberish;
        permissionStartTimestamp: BigNumberish;
        permissionEndTimestamp: BigNumberish;
        reqValidityStartTimestamp: BigNumberish;
        reqValidityEndTimestamp: BigNumberish;
        uid: BytesLike;
    };
    type SignerPermissionRequestStructOutput = [
        string,
        string[],
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        signer: string;
        approvedTargets: string[];
        nativeTokenLimitPerTransaction: BigNumber;
        permissionStartTimestamp: BigNumber;
        permissionEndTimestamp: BigNumber;
        reqValidityStartTimestamp: BigNumber;
        reqValidityEndTimestamp: BigNumber;
        uid: string;
    };
    type SignerPermissionsStruct = {
        signer: string;
        approvedTargets: string[];
        nativeTokenLimitPerTransaction: BigNumberish;
        startTimestamp: BigNumberish;
        endTimestamp: BigNumberish;
    };
    type SignerPermissionsStructOutput = [
        string,
        string[],
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        signer: string;
        approvedTargets: string[];
        nativeTokenLimitPerTransaction: BigNumber;
        startTimestamp: BigNumber;
        endTimestamp: BigNumber;
    };
}
export interface AccountPermissionsInterface extends utils.Interface {
    functions: {
        "getAllActiveSigners()": FunctionFragment;
        "getAllAdmins()": FunctionFragment;
        "getAllSigners()": FunctionFragment;
        "getPermissionsForSigner(address)": FunctionFragment;
        "isActiveSigner(address)": FunctionFragment;
        "isAdmin(address)": FunctionFragment;
        "setAdmin(address,bool)": FunctionFragment;
        "setPermissionsForSigner((address,address[],uint256,uint128,uint128,uint128,uint128,bytes32),bytes)": FunctionFragment;
        "verifySignerPermissionRequest((address,address[],uint256,uint128,uint128,uint128,uint128,bytes32),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAllActiveSigners" | "getAllAdmins" | "getAllSigners" | "getPermissionsForSigner" | "isActiveSigner" | "isAdmin" | "setAdmin" | "setPermissionsForSigner" | "verifySignerPermissionRequest"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAllActiveSigners", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllAdmins", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllSigners", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPermissionsForSigner", values: [string]): string;
    encodeFunctionData(functionFragment: "isActiveSigner", values: [string]): string;
    encodeFunctionData(functionFragment: "isAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "setAdmin", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setPermissionsForSigner", values: [IAccountPermissions.SignerPermissionRequestStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "verifySignerPermissionRequest", values: [IAccountPermissions.SignerPermissionRequestStruct, BytesLike]): string;
    decodeFunctionResult(functionFragment: "getAllActiveSigners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAdmins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllSigners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPermissionsForSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isActiveSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPermissionsForSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifySignerPermissionRequest", data: BytesLike): Result;
    events: {
        "AdminUpdated(address,bool)": EventFragment;
        "SignerPermissionsUpdated(address,address,tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignerPermissionsUpdated"): EventFragment;
}
export interface AdminUpdatedEventObject {
    signer: string;
    isAdmin: boolean;
}
export type AdminUpdatedEvent = TypedEvent<[
    string,
    boolean
], AdminUpdatedEventObject>;
export type AdminUpdatedEventFilter = TypedEventFilter<AdminUpdatedEvent>;
export interface SignerPermissionsUpdatedEventObject {
    authorizingSigner: string;
    targetSigner: string;
    permissions: IAccountPermissions.SignerPermissionRequestStructOutput;
}
export type SignerPermissionsUpdatedEvent = TypedEvent<[
    string,
    string,
    IAccountPermissions.SignerPermissionRequestStructOutput
], SignerPermissionsUpdatedEventObject>;
export type SignerPermissionsUpdatedEventFilter = TypedEventFilter<SignerPermissionsUpdatedEvent>;
export interface AccountPermissions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AccountPermissionsInterface;
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
        getAllActiveSigners(overrides?: CallOverrides): Promise<[
            IAccountPermissions.SignerPermissionsStructOutput[]
        ] & {
            signers: IAccountPermissions.SignerPermissionsStructOutput[];
        }>;
        getAllAdmins(overrides?: CallOverrides): Promise<[string[]]>;
        getAllSigners(overrides?: CallOverrides): Promise<[
            IAccountPermissions.SignerPermissionsStructOutput[]
        ] & {
            signers: IAccountPermissions.SignerPermissionsStructOutput[];
        }>;
        getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<[IAccountPermissions.SignerPermissionsStructOutput]>;
        isActiveSigner(signer: string, overrides?: CallOverrides): Promise<[boolean]>;
        isAdmin(_account: string, overrides?: CallOverrides): Promise<[boolean]>;
        setAdmin(_account: string, _isAdmin: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            signer: string;
        }>;
    };
    getAllActiveSigners(overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput[]>;
    getAllAdmins(overrides?: CallOverrides): Promise<string[]>;
    getAllSigners(overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput[]>;
    getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput>;
    isActiveSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
    isAdmin(_account: string, overrides?: CallOverrides): Promise<boolean>;
    setAdmin(_account: string, _isAdmin: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
        success: boolean;
        signer: string;
    }>;
    callStatic: {
        getAllActiveSigners(overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput[]>;
        getAllAdmins(overrides?: CallOverrides): Promise<string[]>;
        getAllSigners(overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput[]>;
        getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput>;
        isActiveSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
        isAdmin(_account: string, overrides?: CallOverrides): Promise<boolean>;
        setAdmin(_account: string, _isAdmin: boolean, overrides?: CallOverrides): Promise<void>;
        setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            signer: string;
        }>;
    };
    filters: {
        "AdminUpdated(address,bool)"(signer?: string | null, isAdmin?: null): AdminUpdatedEventFilter;
        AdminUpdated(signer?: string | null, isAdmin?: null): AdminUpdatedEventFilter;
        "SignerPermissionsUpdated(address,address,tuple)"(authorizingSigner?: string | null, targetSigner?: string | null, permissions?: null): SignerPermissionsUpdatedEventFilter;
        SignerPermissionsUpdated(authorizingSigner?: string | null, targetSigner?: string | null, permissions?: null): SignerPermissionsUpdatedEventFilter;
    };
    estimateGas: {
        getAllActiveSigners(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAdmins(overrides?: CallOverrides): Promise<BigNumber>;
        getAllSigners(overrides?: CallOverrides): Promise<BigNumber>;
        getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        isActiveSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        isAdmin(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        setAdmin(_account: string, _isAdmin: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getAllActiveSigners(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAdmins(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllSigners(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isActiveSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAdmin(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAdmin(_account: string, _isAdmin: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=AccountPermissions.d.ts.map