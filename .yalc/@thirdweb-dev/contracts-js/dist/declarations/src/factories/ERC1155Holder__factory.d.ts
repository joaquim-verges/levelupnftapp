import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155Holder, ERC1155HolderInterface } from "../ERC1155Holder.js";
type ERC1155HolderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC1155Holder__factory extends ContractFactory {
    constructor(...args: ERC1155HolderConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC1155Holder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC1155Holder;
    connect(signer: Signer): ERC1155Holder__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506103c0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a714610046578063bc197c811461006e578063f23a6e61146100a6575b600080fd5b6100596100543660046100fc565b6100c5565b60405190151581526020015b60405180910390f35b61008d61007c36600461027d565b63bc197c8160e01b95945050505050565b6040516001600160e01b03199091168152602001610065565b61008d6100b4366004610326565b63f23a6e6160e01b95945050505050565b60006001600160e01b03198216630271189760e51b14806100f657506301ffc9a760e01b6001600160e01b03198316145b92915050565b60006020828403121561010e57600080fd5b81356001600160e01b03198116811461012657600080fd5b9392505050565b80356001600160a01b038116811461014457600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561018757610187610149565b604052919050565b600082601f8301126101a057600080fd5b813560206001600160401b038211156101bb576101bb610149565b8160051b6101ca82820161015f565b92835284810182019282810190878511156101e457600080fd5b83870192505b84831015610203578235825291830191908301906101ea565b979650505050505050565b600082601f83011261021f57600080fd5b81356001600160401b0381111561023857610238610149565b61024b601f8201601f191660200161015f565b81815284602083860101111561026057600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561029557600080fd5b61029e8661012d565b94506102ac6020870161012d565b935060408601356001600160401b03808211156102c857600080fd5b6102d489838a0161018f565b945060608801359150808211156102ea57600080fd5b6102f689838a0161018f565b9350608088013591508082111561030c57600080fd5b506103198882890161020e565b9150509295509295909350565b600080600080600060a0868803121561033e57600080fd5b6103478661012d565b94506103556020870161012d565b9350604086013592506060860135915060808601356001600160401b0381111561037e57600080fd5b6103198882890161020e56fea264697066735822122076dc702bb73ba2832219e84a064a2f9234dd78e6d58e9ce2d741052da070983664736f6c634300080c0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ERC1155HolderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1155Holder;
}
export {};
//# sourceMappingURL=ERC1155Holder__factory.d.ts.map