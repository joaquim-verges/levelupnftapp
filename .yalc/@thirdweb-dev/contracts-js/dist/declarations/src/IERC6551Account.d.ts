import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IERC6551AccountInterface extends utils.Interface {
    functions: {
        "isValidSigner(address,bytes)": FunctionFragment;
        "state()": FunctionFragment;
        "token()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "isValidSigner" | "state" | "token"): FunctionFragment;
    encodeFunctionData(functionFragment: "isValidSigner", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "state", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    decodeFunctionResult(functionFragment: "isValidSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    events: {};
}
export interface IERC6551Account extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC6551AccountInterface;
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
        isValidSigner(signer: string, context: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            magicValue: string;
        }>;
        state(overrides?: CallOverrides): Promise<[BigNumber]>;
        token(overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber
        ] & {
            chainId: BigNumber;
            tokenContract: string;
            tokenId: BigNumber;
        }>;
    };
    isValidSigner(signer: string, context: BytesLike, overrides?: CallOverrides): Promise<string>;
    state(overrides?: CallOverrides): Promise<BigNumber>;
    token(overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        BigNumber
    ] & {
        chainId: BigNumber;
        tokenContract: string;
        tokenId: BigNumber;
    }>;
    callStatic: {
        isValidSigner(signer: string, context: BytesLike, overrides?: CallOverrides): Promise<string>;
        state(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber
        ] & {
            chainId: BigNumber;
            tokenContract: string;
            tokenId: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        isValidSigner(signer: string, context: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        state(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isValidSigner(signer: string, context: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        state(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IERC6551Account.d.ts.map