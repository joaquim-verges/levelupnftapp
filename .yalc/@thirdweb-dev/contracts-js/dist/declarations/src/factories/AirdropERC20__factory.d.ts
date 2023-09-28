import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AirdropERC20, AirdropERC20Interface } from "../AirdropERC20.js";
type AirdropERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AirdropERC20__factory extends ContractFactory {
    constructor(...args: AirdropERC20ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AirdropERC20>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AirdropERC20;
    connect(signer: Signer): AirdropERC20__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50600054610100900460ff1615808015620000335750600054600160ff909116105b8062000063575062000050306200013d60201b62000c471760201c565b15801562000063575060005460ff166001145b620000cb5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff191660011790558015620000ef576000805461ff0019166101001790555b801562000136576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b506200014c565b6001600160a01b03163b151590565b611e2c806200015c6000396000f3fe6080604052600436106100ce5760003560e01c80630670b2b3146100d3578063248a9ca3146100e85780632f2ff15d1461012857806336568abe146101485780633a105cfb14610168578063572b6c05146101885780639010d07c146101b857806391d14854146101e5578063938e3d7b14610205578063a0a8e46014610225578063a217fddf14610241578063a32fa5b314610256578063ac9650d814610276578063ca15c873146102a3578063cb2ef6f7146102c3578063d547741f146102e5578063e8a3d48514610305575b600080fd5b6100e66100e1366004611751565b610327565b005b3480156100f457600080fd5b506101156101033660046117e1565b60009081526003602052604090205490565b6040519081526020015b60405180910390f35b34801561013457600080fd5b506100e66101433660046117fa565b610612565b34801561015457600080fd5b506100e66101633660046117fa565b6106ac565b34801561017457600080fd5b506100e66101833660046118db565b61070b565b34801561019457600080fd5b506101a86101a33660046119be565b610843565b604051901515815260200161011f565b3480156101c457600080fd5b506101d86101d33660046119d9565b610861565b60405161011f91906119fb565b3480156101f157600080fd5b506101a86102003660046117fa565b610951565b34801561021157600080fd5b506100e6610220366004611a0f565b61097c565b34801561023157600080fd5b506040516002815260200161011f565b34801561024d57600080fd5b50610115600081565b34801561026257600080fd5b506101a86102713660046117fa565b6109cd565b34801561028257600080fd5b50610296610291366004611a43565b610a23565b60405161011f9190611b0f565b3480156102af57600080fd5b506101156102be3660046117e1565b610b17565b3480156102cf57600080fd5b506b041697264726f7045524332360a41b610115565b3480156102f157600080fd5b506100e66103003660046117fa565b610ba0565b34801561031157600080fd5b5061031a610bb9565b60405161011f9190611b71565b6002600554141561037f5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026005556103916000610200610c56565b6103cf5760405162461bcd60e51b815260206004820152600f60248201526e2737ba1030baba3437b934bd32b21760891b6044820152606401610376565b80600080805b838110156105a457600061042d89898989868181106103f6576103f6611b84565b61040c92602060409092020190810191506119be565b8a8a8781811061041e5761041e611b84565b90506040020160200135610c65565b9050806104ce5786868381811061044657610446611b84565b61045c92602060409092020190810191506119be565b6001600160a01b0316886001600160a01b03168a6001600160a01b03167f35be58330abb60221820bfd214bb857a6ea979dbf24009982022925a7fc137ff8a8a878181106104ac576104ac611b84565b905060400201602001356040516104c591815260200190565b60405180910390a45b6001600160a01b03891673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee141561059b5786868381811061050557610505611b84565b905060400201602001358461051a9190611bb0565b93503484111561056c5760405162461bcd60e51b815260206004820181905260248201527f496e73756666696369656e74206e617469766520746f6b656e20616d6f756e746044820152606401610376565b8061059b5786868381811061058357610583611b84565b90506040020160200135836105989190611bb0565b92505b506001016103d5565b503482146105f45760405162461bcd60e51b815260206004820152601d60248201527f496e636f7272656374206e617469766520746f6b656e20616d6f756e740000006044820152606401610376565b8015610604576106043382610f13565b505060016005555050505050565b60008281526003602052604090205461062b9033610fba565b60008281526002602090815260408083206001600160a01b038516845290915290205460ff161561069e5760405162461bcd60e51b815260206004820152601d60248201527f43616e206f6e6c79206772616e7420746f206e6f6e20686f6c646572730000006044820152606401610376565b6106a8828261103a565b5050565b336001600160a01b038216146107015760405162461bcd60e51b815260206004820152601a60248201527921b0b71037b7363c903932b737bab731b2903337b91039b2b63360311b6044820152606401610376565b6106a8828261104e565b600054610100900460ff161580801561072b5750600054600160ff909116105b8061074c575061073a30610c47565b15801561074c575060005460ff166001145b6107af5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610376565b6000805460ff1916600117905580156107d2576000805461ff0019166101001790555b6107db826110a5565b6107e483611134565b6107ef60008561103a565b6107f7611216565b801561083d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b6001600160a01b031660009081526069602052604090205460ff1690565b60008281526004602052604081205481805b828110156109475760008681526004602090815260408083208484526001019091529020546001600160a01b0316156108f057848214156108de5760008681526004602090815260408083209383526001909301905220546001600160a01b0316925061094b915050565b6108e9600183611bb0565b9150610935565b6108fb866000610951565b80156109225750600086815260046020908152604080832083805260020190915290205481145b1561093557610932600183611bb0565b91505b610940600182611bb0565b9050610873565b5050505b92915050565b60009182526002602090815260408084206001600160a01b0393909316845291905290205460ff1690565b610984611247565b6109c15760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152606401610376565b6109ca81611134565b50565b600082815260026020908152604080832083805290915281205460ff16610a1a575060008281526002602090815260408083206001600160a01b038516845290915290205460ff1661094b565b50600192915050565b6060816001600160401b03811115610a3d57610a3d611826565b604051908082528060200260200182016040528015610a7057816020015b6060815260200190600190039081610a5b5790505b50905060005b82811015610b1057610ae030858584818110610a9457610a94611b84565b9050602002810190610aa69190611bc8565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061125592505050565b828281518110610af257610af2611b84565b60200260200101819052508080610b0890611c15565b915050610a76565b5092915050565b600081815260046020526040812054815b81811015610b7b5760008481526004602090815260408083208484526001019091529020546001600160a01b031615610b6957610b66600184611bb0565b92505b610b74600182611bb0565b9050610b28565b50610b87836000610951565b15610b9a57610b97600183611bb0565b91505b50919050565b6000828152600360205260409020546107019033610fba565b60018054610bc690611c30565b80601f0160208091040260200160405190810160405280929190818152602001828054610bf290611c30565b8015610c3f5780601f10610c1457610100808354040283529160200191610c3f565b820191906000526020600020905b815481529060010190602001808311610c2257829003601f168201915b505050505081565b6001600160a01b03163b151590565b6000610c60611347565b905090565b600081610c7457506001610f0b565b6001600160a01b03851673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1415610cf2576040516001600160a01b038416908390600081818185875af1925050503d8060008114610ce2576040519150601f19603f3d011682016040523d82523d6000602084013e610ce7565b606091505b505080915050610f0b565b604080516001600160a01b0386811660248301528581166044830152606480830186905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839290891691610d569190611c65565b6000604051808303816000865af19150503d8060008114610d93576040519150601f19603f3d011682016040523d82523d6000602084013e610d98565b606091505b5091509150819250821580610dca575060008151118015610dca575080806020019051810190610dc89190611c81565b155b15610f08576040516370a0823160e01b81526000935084906001600160a01b038916906370a0823190610e01908a906004016119fb565b602060405180830381865afa158015610e1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e429190611ca3565b10158015610ec15750604051636eb1769f60e11b81526001600160a01b03878116600483015230602483015285919089169063dd62ed3e90604401602060405180830381865afa158015610e9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ebe9190611ca3565b10155b610f085760405162461bcd60e51b81526020600482015260186024820152774e6f742062616c616e6365206f7220616c6c6f77616e636560401b6044820152606401610376565b50505b949350505050565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610f60576040519150601f19603f3d011682016040523d82523d6000602084013e610f65565b606091505b5050905080610fb55760405162461bcd60e51b815260206004820152601c60248201527b1b985d1a5d99481d1bdad95b881d1c985b9cd9995c8819985a5b195960221b6044820152606401610376565b505050565b60008281526002602090815260408083206001600160a01b038516845290915290205460ff166106a857610ff8816001600160a01b03166014611369565b611003836020611369565b604051602001611014929190611cbc565b60408051601f198184030181529082905262461bcd60e51b825261037691600401611b71565b611044828261150b565b6106a88282611566565b61105882826115d3565b60008281526004602090815260408083206001600160a01b03851680855260028201808552838620805487526001909301855292852080546001600160a01b031916905584529152555050565b600054610100900460ff166110cc5760405162461bcd60e51b815260040161037690611d29565b60005b81518110156106a8576001606960008484815181106110f0576110f0611b84565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff19169115159190911790558061112c81611c15565b9150506110cf565b60006001805461114390611c30565b80601f016020809104026020016040519081016040528092919081815260200182805461116f90611c30565b80156111bc5780601f10611191576101008083540402835291602001916111bc565b820191906000526020600020905b81548152906001019060200180831161119f57829003601f168201915b505085519394506111d89360019350602087019250905061169c565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a16818360405161120a929190611d74565b60405180910390a15050565b600054610100900460ff1661123d5760405162461bcd60e51b815260040161037690611d29565b611245611635565b565b6000610c6081610200610c56565b606061126083610c47565b6112bb5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610376565b600080846001600160a01b0316846040516112d69190611c65565b600060405180830381855af49150503d8060008114611311576040519150601f19603f3d011682016040523d82523d6000602084013e611316565b606091505b509150915061133e8282604051806060016040528060278152602001611dd060279139611663565b95945050505050565b600061135233610843565b15611364575060131936013560601c90565b503390565b60606000611378836002611d99565b611383906002611bb0565b6001600160401b0381111561139a5761139a611826565b6040519080825280601f01601f1916602001820160405280156113c4576020820181803683370190505b509050600360fc1b816000815181106113df576113df611b84565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061140e5761140e611b84565b60200101906001600160f81b031916908160001a9053506000611432846002611d99565b61143d906001611bb0565b90505b60018111156114b5576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061147157611471611b84565b1a60f81b82828151811061148757611487611b84565b60200101906001600160f81b031916908160001a90535060049490941c936114ae81611db8565b9050611440565b5083156115045760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610376565b9392505050565b60008281526002602090815260408083206001600160a01b0385168085529252808320805460ff1916600117905551339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b6000828152600460205260408120805491600191906115858385611bb0565b9091555050600092835260046020908152604080852083865260018101835281862080546001600160a01b039096166001600160a01b03199096168617905593855260029093019052912055565b6115dd8282610fba565b60008281526002602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600054610100900460ff1661165c5760405162461bcd60e51b815260040161037690611d29565b6001600555565b60608315611672575081611504565b8251156116825782518084602001fd5b8160405162461bcd60e51b81526004016103769190611b71565b8280546116a890611c30565b90600052602060002090601f0160209004810192826116ca5760008555611710565b82601f106116e357805160ff1916838001178555611710565b82800160010185558215611710579182015b828111156117105782518255916020019190600101906116f5565b5061171c929150611720565b5090565b5b8082111561171c5760008155600101611721565b80356001600160a01b038116811461174c57600080fd5b919050565b6000806000806060858703121561176757600080fd5b61177085611735565b935061177e60208601611735565b925060408501356001600160401b038082111561179a57600080fd5b818701915087601f8301126117ae57600080fd5b8135818111156117bd57600080fd5b8860208260061b85010111156117d257600080fd5b95989497505060200194505050565b6000602082840312156117f357600080fd5b5035919050565b6000806040838503121561180d57600080fd5b8235915061181d60208401611735565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561186457611864611826565b604052919050565b600082601f83011261187d57600080fd5b81356001600160401b0381111561189657611896611826565b6118a9601f8201601f191660200161183c565b8181528460208386010111156118be57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000606084860312156118f057600080fd5b6118f984611735565b92506020808501356001600160401b038082111561191657600080fd5b6119228883890161186c565b9450604087013591508082111561193857600080fd5b818701915087601f83011261194c57600080fd5b81358181111561195e5761195e611826565b8060051b915061196f84830161183c565b818152918301840191848101908a84111561198957600080fd5b938501935b838510156119ae5761199f85611735565b8252938501939085019061198e565b8096505050505050509250925092565b6000602082840312156119d057600080fd5b61150482611735565b600080604083850312156119ec57600080fd5b50508035926020909101359150565b6001600160a01b0391909116815260200190565b600060208284031215611a2157600080fd5b81356001600160401b03811115611a3757600080fd5b610f0b8482850161186c565b60008060208385031215611a5657600080fd5b82356001600160401b0380821115611a6d57600080fd5b818501915085601f830112611a8157600080fd5b813581811115611a9057600080fd5b8660208260051b8501011115611aa557600080fd5b60209290920196919550909350505050565b60005b83811015611ad2578181015183820152602001611aba565b8381111561083d5750506000910152565b60008151808452611afb816020860160208601611ab7565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015611b6457603f19888603018452611b52858351611ae3565b94509285019290850190600101611b36565b5092979650505050505050565b6020815260006115046020830184611ae3565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611bc357611bc3611b9a565b500190565b6000808335601e19843603018112611bdf57600080fd5b8301803591506001600160401b03821115611bf957600080fd5b602001915036819003821315611c0e57600080fd5b9250929050565b6000600019821415611c2957611c29611b9a565b5060010190565b600181811c90821680611c4457607f821691505b60208210811415610b9a57634e487b7160e01b600052602260045260246000fd5b60008251611c77818460208701611ab7565b9190910192915050565b600060208284031215611c9357600080fd5b8151801515811461150457600080fd5b600060208284031215611cb557600080fd5b5051919050565b7402832b936b4b9b9b4b7b7399d1030b1b1b7bab73a1605d1b815260008351611cec816015850160208801611ab7565b7001034b99036b4b9b9b4b733903937b6329607d1b6015918401918201528351611d1d816026840160208801611ab7565b01602601949350505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b604081526000611d876040830185611ae3565b828103602084015261133e8185611ae3565b6000816000190483118215151615611db357611db3611b9a565b500290565b600081611dc757611dc7611b9a565b50600019019056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220de0e8f83ec5d955dc5661d9a6dd375e6730bb68dda771bc44322e12177712fcf64736f6c634300080c0033";
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
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
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
    static createInterface(): AirdropERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AirdropERC20;
}
export {};
//# sourceMappingURL=AirdropERC20__factory.d.ts.map