import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AirdropERC20Claimable, AirdropERC20ClaimableInterface } from "../AirdropERC20Claimable.js";
type AirdropERC20ClaimableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AirdropERC20Claimable__factory extends ContractFactory {
    constructor(...args: AirdropERC20ClaimableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AirdropERC20Claimable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AirdropERC20Claimable;
    connect(signer: Signer): AirdropERC20Claimable__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50600054610100900460ff16158080156100315750600054600160ff909116105b8061005c575061004a3061013260201b6107e81760201c565b15801561005c575060005460ff166001145b6100c35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff1916600117905580156100e6576000805461ff0019166101001790555b801561012c576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50610141565b6001600160a01b03163b151590565b6111fe806101506000396000f3fe608060405234801561001057600080fd5b50600436106100d05760003560e01c806305981769146100d5578063097b3cdb146100f15780630ce56cac1461010657806313af4035146101265780632eb4a7ab146101395780633b4b57b014610142578063572b6c05146101555780638da5cb5b1461017857806391f7cfb9146101985780639f43ddd2146101a1578063a0a8e460146101aa578063a3e67610146101b9578063ac9650d8146101cc578063b73e0e8b146101ec578063cb2ef6f7146101ff578063d0fe2e5f1461021d575b600080fd5b6100de60cd5481565b6040519081526020015b60405180910390f35b6101046100ff366004610d7d565b610230565b005b6100de610114366004610dde565b60cf6020526000908152604090205481565b610104610134366004610dde565b610420565b6100de60ce5481565b610104610150366004610d7d565b610471565b610168610163366004610dde565b61054c565b60405190151581526020016100e8565b61018061056a565b6040516001600160a01b0390911681526020016100e8565b6100de60cb5481565b6100de60cc5481565b604051600181526020016100e8565b60ca54610180906001600160a01b031681565b6101df6101da366004610df9565b61057f565b6040516100e89190610e96565b60c954610180906001600160a01b031681565b7441697264726f704552433230436c61696d61626c6560581b6100de565b61010461022b366004610f0e565b610673565b60ce54600090156102b7576102b38484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505060ce546040516001600160601b031960608d901b166020820152603481018890529092506054019050604051602081830303815290604052805190602001206107f7565b5090505b6001600160a01b038616600090815260cf6020526040902054856103195760405162461bcd60e51b8152602060048201526014602482015273436c61696d696e67207a65726f20746f6b656e7360601b60448201526064015b60405180910390fd5b60cb548611156103675760405162461bcd60e51b815260206004820152601960248201527832bc31b2b2b2399030bb30b4b630b13632903a37b5b2b7399760391b6044820152606401610310565b60cc5480158061037657508042105b6103b55760405162461bcd60e51b815260206004820152601060248201526f30b4b9323937b81032bc3834b932b21760811b6044820152606401610310565b6000836103c45760cd546103c6565b845b9050806103d3848a611040565b11156104155760405162461bcd60e51b815260206004820152601160248201527034b73b30b634b21038bab0b73a34ba3c9760791b6044820152606401610310565b505050505050505050565b6104286108c5565b6104655760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152606401610310565b61046e816108ef565b50565b600260015414156104c45760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610310565b600260015560006104d361094a565b90506104e28186868686610230565b6104ec8686610959565b856001600160a01b03166104fe61094a565b6001600160a01b03167fa86305abc2db271df4609aa86a8d044bc11fb36939841bfdad6c1ab2b26e94718760405161053891815260200190565b60405180910390a350506001805550505050565b6001600160a01b031660009081526065602052604090205460ff1690565b6000546201000090046001600160a01b031690565b6060816001600160401b0381111561059957610599610ef8565b6040519080825280602002602001820160405280156105cc57816020015b60608152602001906001900390816105b75790505b50905060005b8281101561066c5761063c308585848181106105f0576105f0611058565b9050602002810190610602919061106e565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a7692505050565b82828151811061064e5761064e611058565b60200260200101819052508080610664906110b4565b9150506105d2565b5092915050565b600054610100900460ff16158080156106935750600054600160ff909116105b806106b457506106a2306107e8565b1580156106b4575060005460ff166001145b6107175760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610310565b6000805460ff19166001179055801561073a576000805461ff0019166101001790555b610743896108ef565b61074b610b68565b61075488610b99565b60ca80546001600160a01b03808a166001600160a01b03199283161790925560c980549289169290911691909117905560cb85905560cc84905560cd83905560ce8290558015610415576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050505050505050565b6001600160a01b03163b151590565b6000808281805b87518110156108b9576108126002836110cf565b9150600088828151811061082857610828611058565b6020026020010151905080841161086a5760408051602081018690529081018290526060016040516020818303038152906040528051906020012093506108a6565b60408051602081018390529081018590526060016040516020818303038152906040528051906020012093506001836108a39190611040565b92505b50806108b1816110b4565b9150506107fe565b50941495939450505050565b60006108cf61056a565b6001600160a01b03166108e061094a565b6001600160a01b031614905090565b600080546001600160a01b038381166201000081810262010000600160b01b0319851617855560405193049190911692909183917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7691a35050565b6000610954610bd1565b905090565b8060cf600061096661094a565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546109959190611040565b925050819055508060cb60008282546109ae91906110ee565b909155505060c95460ca546040516323b872dd60e01b81526001600160a01b0391821660048201528482166024820152604481018490529116906323b872dd906064016020604051808303816000875af1158015610a10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a349190611105565b610a725760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b6044820152606401610310565b5050565b6060610a81836107e8565b610adc5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610310565b600080846001600160a01b031684604051610af79190611127565b600060405180830381855af49150503d8060008114610b32576040519150601f19603f3d011682016040523d82523d6000602084013e610b37565b606091505b5091509150610b5f82826040518060600160405280602781526020016111a260279139610bf3565b95945050505050565b600054610100900460ff16610b8f5760405162461bcd60e51b815260040161031090611143565b610b97610c33565b565b600054610100900460ff16610bc05760405162461bcd60e51b815260040161031090611143565b610bc8610c60565b61046e81610c87565b6000610bdc3361054c565b15610bee575060131936013560601c90565b503390565b60608315610c02575081610c2c565b825115610c125782518084602001fd5b8160405162461bcd60e51b8152600401610310919061118e565b9392505050565b600054610100900460ff16610c5a5760405162461bcd60e51b815260040161031090611143565b60018055565b600054610100900460ff16610b975760405162461bcd60e51b815260040161031090611143565b600054610100900460ff16610cae5760405162461bcd60e51b815260040161031090611143565b60005b8151811015610a7257600160656000848481518110610cd257610cd2611058565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580610d0e816110b4565b915050610cb1565b80356001600160a01b0381168114610d2d57600080fd5b919050565b60008083601f840112610d4457600080fd5b5081356001600160401b03811115610d5b57600080fd5b6020830191508360208260051b8501011115610d7657600080fd5b9250929050565b600080600080600060808688031215610d9557600080fd5b610d9e86610d16565b94506020860135935060408601356001600160401b03811115610dc057600080fd5b610dcc88828901610d32565b96999598509660600135949350505050565b600060208284031215610df057600080fd5b610c2c82610d16565b60008060208385031215610e0c57600080fd5b82356001600160401b03811115610e2257600080fd5b610e2e85828601610d32565b90969095509350505050565b60005b83811015610e55578181015183820152602001610e3d565b83811115610e64576000848401525b50505050565b60008151808452610e82816020860160208601610e3a565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015610eeb57603f19888603018452610ed9858351610e6a565b94509285019290850190600101610ebd565b5092979650505050505050565b634e487b7160e01b600052604160045260246000fd5b600080600080600080600080610100898b031215610f2b57600080fd5b610f3489610d16565b97506020808a01356001600160401b0380821115610f5157600080fd5b818c0191508c601f830112610f6557600080fd5b813581811115610f7757610f77610ef8565b8060051b604051601f19603f83011681018181108582111715610f9c57610f9c610ef8565b60405291825284820192508381018501918f831115610fba57600080fd5b938501935b82851015610fdf57610fd085610d16565b84529385019392850192610fbf565b809c50505050505050610ff460408a01610d16565b955061100260608a01610d16565b979a969950949760808101359660a0820135965060c0820135955060e0909101359350915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156110535761105361102a565b500190565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261108557600080fd5b8301803591506001600160401b0382111561109f57600080fd5b602001915036819003821315610d7657600080fd5b60006000198214156110c8576110c861102a565b5060010190565b60008160001904831182151516156110e9576110e961102a565b500290565b6000828210156111005761110061102a565b500390565b60006020828403121561111757600080fd5b81518015158114610c2c57600080fd5b60008251611139818460208701610e3a565b9190910192915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b602081526000610c2c6020830184610e6a56fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220697ee03ecfca40de25d028cea2f51dc2c574af7ed835fbfc0dec5f6f93cc965e64736f6c634300080c0033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
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
    static createInterface(): AirdropERC20ClaimableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AirdropERC20Claimable;
}
export {};
//# sourceMappingURL=AirdropERC20Claimable__factory.d.ts.map