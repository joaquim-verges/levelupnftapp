import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721A, ERC721AInterface } from "../ERC721A.js";
type ERC721AConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721A__factory extends ContractFactory {
    constructor(...args: ERC721AConstructorParams);
    deploy(name_: string, symbol_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721A>;
    getDeployTransaction(name_: string, symbol_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721A;
    connect(signer: Signer): ERC721A__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162001240380380620012408339810160408190526200003491620001df565b8151620000499060029060208501906200006c565b5080516200005f9060039060208401906200006c565b5050600080555062000286565b8280546200007a9062000249565b90600052602060002090601f0160209004810192826200009e5760008555620000e9565b82601f10620000b957805160ff1916838001178555620000e9565b82800160010185558215620000e9579182015b82811115620000e9578251825591602001919060010190620000cc565b50620000f7929150620000fb565b5090565b5b80821115620000f75760008155600101620000fc565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013a57600080fd5b81516001600160401b038082111562000157576200015762000112565b604051601f8301601f19908116603f0116810190828211818310171562000182576200018262000112565b816040528381526020925086838588010111156200019f57600080fd5b600091505b83821015620001c35785820183015181830184015290820190620001a4565b83821115620001d55760008385830101525b9695505050505050565b60008060408385031215620001f357600080fd5b82516001600160401b03808211156200020b57600080fd5b620002198683870162000128565b935060208501519150808211156200023057600080fd5b506200023f8582860162000128565b9150509250929050565b600181811c908216806200025e57607f821691505b602082108114156200028057634e487b7160e01b600052602260045260246000fd5b50919050565b610faa80620002966000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c806301ffc9a7146100bf57806306fdde03146100e7578063081812fc146100fc578063095ea7b31461012757806318160ddd1461013c57806323b872dd1461015257806342842e0e146101655780636352211e1461017857806370a082311461018b57806395d89b411461019e578063a22cb465146101a6578063b88d4fde146101b9578063c87b56dd146101cc578063e985e9c5146101df575b600080fd5b6100d26100cd366004610b5e565b61021b565b60405190151581526020015b60405180910390f35b6100ef61026d565b6040516100de9190610bd3565b61010f61010a366004610be6565b6102ff565b6040516001600160a01b0390911681526020016100de565b61013a610135366004610c1b565b610343565b005b600154600054035b6040519081526020016100de565b61013a610160366004610c45565b6103ca565b61013a610173366004610c45565b6103d5565b61010f610186366004610be6565b6103f0565b610144610199366004610c81565b610402565b6100ef610450565b61013a6101b4366004610c9c565b61045f565b61013a6101c7366004610cee565b6104f5565b6100ef6101da366004610be6565b61053f565b6100d26101ed366004610dc9565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061024c57506001600160e01b03198216635b5e139f60e01b145b8061026757506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606002805461027c90610dfc565b80601f01602080910402602001604051908101604052809291908181526020018280546102a890610dfc565b80156102f55780601f106102ca576101008083540402835291602001916102f5565b820191906000526020600020905b8154815290600101906020018083116102d857829003601f168201915b5050505050905090565b600061030a826105d1565b610327576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b600061034e826103f0565b9050806001600160a01b0316836001600160a01b031614156103835760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b038216146103ba5761039d81336101ed565b6103ba576040516367d9dca160e11b815260040160405180910390fd5b6103c58383836105fc565b505050565b6103c5838383610658565b6103c5838383604051806020016040528060008152506104f5565b60006103fb82610845565b5192915050565b60006001600160a01b03821661042b576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b03166000908152600560205260409020546001600160401b031690565b60606003805461027c90610dfc565b6001600160a01b0382163314156104895760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610500848484610658565b6001600160a01b0383163b156105395761051c8484848461095f565b610539576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b606061054a826105d1565b61056757604051630a14c4b560e41b815260040160405180910390fd5b600061057e60408051602081019091526000815290565b905080516000141561059f57604051806020016040528060008152506105ca565b806105a984610a48565b6040516020016105ba929190610e37565b6040516020818303038152906040525b9392505050565b6000805482108015610267575050600090815260046020526040902054600160e01b900460ff161590565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b600061066382610845565b9050836001600160a01b031681600001516001600160a01b03161461069a5760405162a1148160e81b815260040160405180910390fd5b6000336001600160a01b03861614806106b857506106b885336101ed565b806106d35750336106c8846102ff565b6001600160a01b0316145b9050806106f357604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b03841661071a57604051633a954ecd60e21b815260040160405180910390fd5b610726600084876105fc565b6001600160a01b038581166000908152600560209081526040808320805467ffffffffffffffff198082166001600160401b0392831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b429092169190910217835587018084529220805491939091166107fa5760005482146107fa57805460208601516001600160401b0316600160a01b026001600160e01b03199091166001600160a01b038a16171781555b50505082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050505050565b60408051606081018252600080825260208201819052918101919091528160005481101561094657600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b81046001600160401b031692820192909252600160e01b90910460ff161515918101829052906109445780516001600160a01b0316156108db579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b82046001600160401b031693830193909352600160e01b900460ff161515928101929092521561093f579392505050565b6108db565b505b604051636f96cda160e11b815260040160405180910390fd5b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290610994903390899088908890600401610e66565b6020604051808303816000875af19250505080156109cf575060408051601f3d908101601f191682019092526109cc91810190610ea3565b60015b610a2a573d8080156109fd576040519150601f19603f3d011682016040523d82523d6000602084013e610a02565b606091505b508051610a22576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490505b949350505050565b606081610a6c5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610a965780610a8081610ed6565b9150610a8f9050600a83610f07565b9150610a70565b6000816001600160401b03811115610ab057610ab0610cd8565b6040519080825280601f01601f191660200182016040528015610ada576020820181803683370190505b5090505b8415610a4057610aef600183610f1b565b9150610afc600a86610f32565b610b07906030610f46565b60f81b818381518110610b1c57610b1c610f5e565b60200101906001600160f81b031916908160001a905350610b3e600a86610f07565b9450610ade565b6001600160e01b031981168114610b5b57600080fd5b50565b600060208284031215610b7057600080fd5b81356105ca81610b45565b60005b83811015610b96578181015183820152602001610b7e565b838111156105395750506000910152565b60008151808452610bbf816020860160208601610b7b565b601f01601f19169290920160200192915050565b6020815260006105ca6020830184610ba7565b600060208284031215610bf857600080fd5b5035919050565b80356001600160a01b0381168114610c1657600080fd5b919050565b60008060408385031215610c2e57600080fd5b610c3783610bff565b946020939093013593505050565b600080600060608486031215610c5a57600080fd5b610c6384610bff565b9250610c7160208501610bff565b9150604084013590509250925092565b600060208284031215610c9357600080fd5b6105ca82610bff565b60008060408385031215610caf57600080fd5b610cb883610bff565b915060208301358015158114610ccd57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610d0457600080fd5b610d0d85610bff565b9350610d1b60208601610bff565b92506040850135915060608501356001600160401b0380821115610d3e57600080fd5b818701915087601f830112610d5257600080fd5b813581811115610d6457610d64610cd8565b604051601f8201601f19908116603f01168101908382118183101715610d8c57610d8c610cd8565b816040528281528a6020848701011115610da557600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610ddc57600080fd5b610de583610bff565b9150610df360208401610bff565b90509250929050565b600181811c90821680610e1057607f821691505b60208210811415610e3157634e487b7160e01b600052602260045260246000fd5b50919050565b60008351610e49818460208801610b7b565b835190830190610e5d818360208801610b7b565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610e9990830184610ba7565b9695505050505050565b600060208284031215610eb557600080fd5b81516105ca81610b45565b634e487b7160e01b600052601160045260246000fd5b6000600019821415610eea57610eea610ec0565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082610f1657610f16610ef1565b500490565b600082821015610f2d57610f2d610ec0565b500390565b600082610f4157610f41610ef1565b500690565b60008219821115610f5957610f59610ec0565b500190565b634e487b7160e01b600052603260045260246000fdfea26469706673582212201b0289fa0f358052a5b5d7a298c651e895f3aec2445fe738454e04a9388b6afd64736f6c634300080c0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): ERC721AInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721A;
}
export {};
//# sourceMappingURL=ERC721A__factory.d.ts.map