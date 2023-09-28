'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var zksyncWeb3 = require('zksync-web3');
var contractPublisher = require('../../../dist/contract-publisher-e9595070.cjs.dev.js');
var sdk = require('../../../dist/sdk-cfff42e5.cjs.dev.js');
var ethers = require('ethers');
require('../../../dist/QueryParams-012ec906.cjs.dev.js');
require('bn.js');
require('zod');
require('tiny-invariant');
require('uuid');
require('@thirdweb-dev/storage');
require('@thirdweb-dev/contracts-js/dist/abis/IERC165.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json');
require('fast-deep-equal');
require('merkletreejs');
require('@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json');
require('@thirdweb-dev/chains');
require('bs58');
require('@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDrop.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20Permit.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMulticall.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC721_V3.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721AQueryableUpgradeable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json');
require('@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/LazyMintWithTier.json');
require('@thirdweb-dev/contracts-js/dist/abis/SharedMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/zora_IERC721Drop.json');
require('@thirdweb-dev/contracts-js/dist/abis/ILoyaltyCard.json');
require('@thirdweb-dev/contracts-js/dist/abis/INFTMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDrop1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC1155_V2.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Supply.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC2771Context.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAppURI.json');
require('@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDirectListings.json');
require('@thirdweb-dev/contracts-js/dist/abis/IEnglishAuctions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IOffers.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json');
require('@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json');
require('@thirdweb-dev/contracts-js/dist/abis/Ownable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAirdropERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAirdropERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAirdropERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAccountFactoryCore.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAccountPermissions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAccount.json');
require('ethers/lib/utils');
require('@thirdweb-dev/contracts-js/dist/abis/Forwarder.json');
require('cross-fetch');
require('eventemitter3');
require('@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryRouter.json');
require('@thirdweb-dev/generated-abis');
require('@thirdweb-dev/contracts-js/dist/abis/TWFactory.json');
require('@thirdweb-dev/contracts-js/dist/abis/TWRegistry.json');

const twProxyArtifactZK = {
  _format: "hh-zksolc-artifact-1",
  contractName: "TWProxy",
  sourceName: "contracts/TWProxy.sol",
  abi: [{
    inputs: [{
      internalType: "address",
      name: "_logic",
      type: "address"
    }, {
      internalType: "bytes",
      name: "_data",
      type: "bytes"
    }],
    stateMutability: "payable",
    type: "constructor"
  }, {
    stateMutability: "payable",
    type: "fallback"
  }, {
    stateMutability: "payable",
    type: "receive"
  }],
  bytecode: "0x00040000000000020006000000000002000000000301001900000060033002700000007e04300197000300000041035500020000000103550000007e0030019d000100000000001f0000008001000039000000400010043f00000000010000310000000102200190000000410000c13d0000008402000041000000000202041a0000008202200197000000000310004c0000004d0000c13d0000000001000414000000040320008c0000006a0000613d0000007e0300004100000000040000310000007e0540009c00000000040380190000007e0510009c0000000001038019000000c0011002100000006003400210000000000113019f01f201ed0000040f0003000000010355000000000301001900000060043002700000001f0340018f0001007e0040019d0000007e044001970000000504400272000000300000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000645004b000000290000413d000000000530004c0000003e0000613d00000003033002100000000504400210000000000504043300000000053501cf000000000535022f000000000141034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f00000000001404350000000101200190000001060000c13d000001090000013d0000009f02100039000000200900008a000000000292016f0000007f03200041000000800330009c000000860000213d000000900100004100000000001004350000004101000039000000040010043f0000009101000041000001f40001043000000002030003670000001f0410018f0000000501100272000000590000613d00000000050000190000000506500210000000000763034f000000000707043b00000000007604350000000105500039000000000615004b000000520000413d000000000540004c000000670000613d00000003044002100000000501100210000000000501043300000000054501cf000000000545022f000000000313034f000000000303043b0000010004400089000000000343022f00000000034301cf000000000353019f00000000003104350000000001000414000000040320008c000000dc0000c13d000000030100036700000001020000310000001f0320018f0000000502200272000000770000613d00000000040000190000000505400210000000000651034f000000000606043b00000000006504350000000104400039000000000524004b000000700000413d000000000430004c000001060000613d00000003033002100000000502200210000000000402043300000000043401cf000000000434022f000000000121034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000141019f0000000000120435000001060000013d000000400020043f0000001f0210018f00000002030003670000000504100272000000940000613d00000000050000190000000506500210000000000763034f000000000707043b000000800660003900000000007604350000000105500039000000000645004b0000008c0000413d000000000520004c000000a30000613d0000000504400210000000000343034f00000003022002100000008004400039000000000504043300000000052501cf000000000525022f000000000303043b0000010002200089000000000323022f00000000022301cf000000000252019f000000000024043500000081020000410000003f0310008c000000000300001900000000030220190000008104100197000000000540004c0000000002008019000000810440009c000000000203c019000000000220004c000000da0000613d000000800a00043d0000008202a001970000008203a0009c000000da0000213d000000a00300043d000000830430009c000000da0000213d00000080041000390000009f013000390000008105000041000000000641004b0000000006000019000000000605801900000081074001970000008101100197000000000871004b0000000005008019000000000171013f000000810110009c00000000010600190000000001056019000000000110004c000000da0000c13d00000080013000390000000001010433000000830510009c000000470000213d0000003f05100039000000000595016f000000400800043d0000000005580019000000000685004b00000000060000190000000106004039000000830750009c000000470000213d0000000106600190000000470000c13d000000400050043f0000000007180436000000a0033000390000000005310019000000000445004b0000010f0000a13d0000000001000019000001f4000104300000007e0300004100000000040000310000007e0540009c00000000040380190000007e0510009c0000000001038019000000c0011002100000006003400210000000000113019f01f201ed0000040f0003000000010355000000000301001900000060043002700000001f0340018f0001007e0040019d0000007e044001970000000504400272000000f60000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000645004b000000ef0000413d000000000530004c000001040000613d00000003033002100000000504400210000000000504043300000000053501cf000000000535022f000000000141034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f00000000001404350000000101200190000001090000613d000000600100003900000001011001ff000001f30001042e0000007e0100004100000001020000310000007e0320009c00000000010240190000006001100210000001f400010430000000000410004c000001190000613d000000000400001900000000057400190000000006340019000000000606043300000000006504350000002004400039000000000514004b000001120000413d000000000117001900000000000104350000008401000041000000000301041a0000008503300197000000000223019f000000000021041b0000000001080433000000000110004c000001280000c13d0000002001000039000001000010044300000120000004430000008f01000041000001f30001042e000000400300043d000000860130009c000000470000213d0000006001300039000000400010043f0000004001300039000000870200004100000000002104350000002701000039000200000003001d00000000021304360000008801000041000100000002001d0000000000120435000000890100004100000000001004390000000400a004430000007e0100004100000000020004140000007e0320009c0000000001024019000000c0011002100000008a011001c70000800202000039000600000009001d00050000000a001d000400000008001d000300000007001d01f201e80000040f00000003070000290000000404000029000000050600002900000006050000290000000102200190000000da0000613d000000000101043b000000000110004c000001630000c13d000000400100043d00000064021000390000008c03000041000000000032043500000044021000390000008d0300004100000000003204350000002402100039000000260300003900000000003204350000008b0200004100000000002104350000000402100039000000200300003900000000003204350000007e020000410000007e0310009c000000000102801900000040011002100000008e011001c7000001f4000104300000000001000414000000040260008c000001690000c13d000000010200003900000001030000310000017f0000013d0000007e020000410000007e0370009c00000000030200190000000003074019000000400330021000000000040404330000007e0540009c00000000040280190000006004400210000000000334019f0000007e0410009c0000000001028019000000c001100210000000000113019f000000000206001901f201ed0000040f0000000605000029000000010220018f000300000001035500000060011002700001007e0010019d0000007e031001970000006001000039000000000430004c000001a50000c13d000000000220004c000001230000c13d0000000021010434000000000310004c000001d20000c13d000000400400043d000500000004001d0000008b01000041000000000014043500000004014000390000002002000039000000000021043500000002010000290000000003010433000400000003001d000000240140003900000000003104350000004402400039000000010100002901f201db0000040f00000004010000290000001f011000390000000602000029000000000121016f00000044011000390000007e020000410000007e0310009c000000000102801900000005040000290000007e0340009c000000000204401900000040022002100000006001100210000000000121019f000001f400010430000000830130009c000000470000213d0000003f01300039000000000451016f000000400100043d0000000004410019000000000514004b00000000050000190000000105004039000000830640009c000000470000213d0000000105500190000000470000c13d000000400040043f0000000003310436000000030400036700000001060000310000001f0560018f0000000506600272000001c20000613d000000000700001900000005087002100000000009830019000000000884034f000000000808043b00000000008904350000000107700039000000000867004b000001ba0000413d000000000750004c000001820000613d0000000506600210000000000464034f00000000036300190000000305500210000000000603043300000000065601cf000000000656022f000000000404043b0000010005500089000000000454022f00000000045401cf000000000464019f0000000000430435000001820000013d0000007e030000410000007e0420009c00000000020380190000007e0410009c000000000103801900000060011002100000004002200210000000000121019f000001f400010430000000000430004c000001e50000613d000000000400001900000000052400190000000006140019000000000606043300000000006504350000002004400039000000000534004b000001de0000413d00000000012300190000000000010435000000000001042d000001eb002104230000000102000039000000000001042d0000000002000019000000000001042d000001f0002104250000000102000039000000000001042d0000000002000019000000000001042d000001f200000432000001f30001042e000001f40001043000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffffffffff000000000000007f8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000ffffffffffffffff360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbcffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffff9f206661696c656400000000000000000000000000000000000000000000000000416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c1806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b83020000020000000000000000000000000000002400000000000000000000000008c379a0000000000000000000000000000000000000000000000000000000006e74726163740000000000000000000000000000000000000000000000000000416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f000000000000000000000000000000000000008400000000000000000000000000000002000000000000000000000000000000400000010000000000000000004e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240000000000000000000000004eac19f774d2aa18cb028e3f83aa2c1f0c443d0b4b93f1861958946a249100cb",
  deployedBytecode: "0x00040000000000020006000000000002000000000301001900000060033002700000007e04300197000300000041035500020000000103550000007e0030019d000100000000001f0000008001000039000000400010043f00000000010000310000000102200190000000410000c13d0000008402000041000000000202041a0000008202200197000000000310004c0000004d0000c13d0000000001000414000000040320008c0000006a0000613d0000007e0300004100000000040000310000007e0540009c00000000040380190000007e0510009c0000000001038019000000c0011002100000006003400210000000000113019f01f201ed0000040f0003000000010355000000000301001900000060043002700000001f0340018f0001007e0040019d0000007e044001970000000504400272000000300000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000645004b000000290000413d000000000530004c0000003e0000613d00000003033002100000000504400210000000000504043300000000053501cf000000000535022f000000000141034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f00000000001404350000000101200190000001060000c13d000001090000013d0000009f02100039000000200900008a000000000292016f0000007f03200041000000800330009c000000860000213d000000900100004100000000001004350000004101000039000000040010043f0000009101000041000001f40001043000000002030003670000001f0410018f0000000501100272000000590000613d00000000050000190000000506500210000000000763034f000000000707043b00000000007604350000000105500039000000000615004b000000520000413d000000000540004c000000670000613d00000003044002100000000501100210000000000501043300000000054501cf000000000545022f000000000313034f000000000303043b0000010004400089000000000343022f00000000034301cf000000000353019f00000000003104350000000001000414000000040320008c000000dc0000c13d000000030100036700000001020000310000001f0320018f0000000502200272000000770000613d00000000040000190000000505400210000000000651034f000000000606043b00000000006504350000000104400039000000000524004b000000700000413d000000000430004c000001060000613d00000003033002100000000502200210000000000402043300000000043401cf000000000434022f000000000121034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000141019f0000000000120435000001060000013d000000400020043f0000001f0210018f00000002030003670000000504100272000000940000613d00000000050000190000000506500210000000000763034f000000000707043b000000800660003900000000007604350000000105500039000000000645004b0000008c0000413d000000000520004c000000a30000613d0000000504400210000000000343034f00000003022002100000008004400039000000000504043300000000052501cf000000000525022f000000000303043b0000010002200089000000000323022f00000000022301cf000000000252019f000000000024043500000081020000410000003f0310008c000000000300001900000000030220190000008104100197000000000540004c0000000002008019000000810440009c000000000203c019000000000220004c000000da0000613d000000800a00043d0000008202a001970000008203a0009c000000da0000213d000000a00300043d000000830430009c000000da0000213d00000080041000390000009f013000390000008105000041000000000641004b0000000006000019000000000605801900000081074001970000008101100197000000000871004b0000000005008019000000000171013f000000810110009c00000000010600190000000001056019000000000110004c000000da0000c13d00000080013000390000000001010433000000830510009c000000470000213d0000003f05100039000000000595016f000000400800043d0000000005580019000000000685004b00000000060000190000000106004039000000830750009c000000470000213d0000000106600190000000470000c13d000000400050043f0000000007180436000000a0033000390000000005310019000000000445004b0000010f0000a13d0000000001000019000001f4000104300000007e0300004100000000040000310000007e0540009c00000000040380190000007e0510009c0000000001038019000000c0011002100000006003400210000000000113019f01f201ed0000040f0003000000010355000000000301001900000060043002700000001f0340018f0001007e0040019d0000007e044001970000000504400272000000f60000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000645004b000000ef0000413d000000000530004c000001040000613d00000003033002100000000504400210000000000504043300000000053501cf000000000535022f000000000141034f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f00000000001404350000000101200190000001090000613d000000600100003900000001011001ff000001f30001042e0000007e0100004100000001020000310000007e0320009c00000000010240190000006001100210000001f400010430000000000410004c000001190000613d000000000400001900000000057400190000000006340019000000000606043300000000006504350000002004400039000000000514004b000001120000413d000000000117001900000000000104350000008401000041000000000301041a0000008503300197000000000223019f000000000021041b0000000001080433000000000110004c000001280000c13d0000002001000039000001000010044300000120000004430000008f01000041000001f30001042e000000400300043d000000860130009c000000470000213d0000006001300039000000400010043f0000004001300039000000870200004100000000002104350000002701000039000200000003001d00000000021304360000008801000041000100000002001d0000000000120435000000890100004100000000001004390000000400a004430000007e0100004100000000020004140000007e0320009c0000000001024019000000c0011002100000008a011001c70000800202000039000600000009001d00050000000a001d000400000008001d000300000007001d01f201e80000040f00000003070000290000000404000029000000050600002900000006050000290000000102200190000000da0000613d000000000101043b000000000110004c000001630000c13d000000400100043d00000064021000390000008c03000041000000000032043500000044021000390000008d0300004100000000003204350000002402100039000000260300003900000000003204350000008b0200004100000000002104350000000402100039000000200300003900000000003204350000007e020000410000007e0310009c000000000102801900000040011002100000008e011001c7000001f4000104300000000001000414000000040260008c000001690000c13d000000010200003900000001030000310000017f0000013d0000007e020000410000007e0370009c00000000030200190000000003074019000000400330021000000000040404330000007e0540009c00000000040280190000006004400210000000000334019f0000007e0410009c0000000001028019000000c001100210000000000113019f000000000206001901f201ed0000040f0000000605000029000000010220018f000300000001035500000060011002700001007e0010019d0000007e031001970000006001000039000000000430004c000001a50000c13d000000000220004c000001230000c13d0000000021010434000000000310004c000001d20000c13d000000400400043d000500000004001d0000008b01000041000000000014043500000004014000390000002002000039000000000021043500000002010000290000000003010433000400000003001d000000240140003900000000003104350000004402400039000000010100002901f201db0000040f00000004010000290000001f011000390000000602000029000000000121016f00000044011000390000007e020000410000007e0310009c000000000102801900000005040000290000007e0340009c000000000204401900000040022002100000006001100210000000000121019f000001f400010430000000830130009c000000470000213d0000003f01300039000000000451016f000000400100043d0000000004410019000000000514004b00000000050000190000000105004039000000830640009c000000470000213d0000000105500190000000470000c13d000000400040043f0000000003310436000000030400036700000001060000310000001f0560018f0000000506600272000001c20000613d000000000700001900000005087002100000000009830019000000000884034f000000000808043b00000000008904350000000107700039000000000867004b000001ba0000413d000000000750004c000001820000613d0000000506600210000000000464034f00000000036300190000000305500210000000000603043300000000065601cf000000000656022f000000000404043b0000010005500089000000000454022f00000000045401cf000000000464019f0000000000430435000001820000013d0000007e030000410000007e0420009c00000000020380190000007e0410009c000000000103801900000060011002100000004002200210000000000121019f000001f400010430000000000430004c000001e50000613d000000000400001900000000052400190000000006140019000000000606043300000000006504350000002004400039000000000534004b000001de0000413d00000000012300190000000000010435000000000001042d000001eb002104230000000102000039000000000001042d0000000002000019000000000001042d000001f0002104250000000102000039000000000001042d0000000002000019000000000001042d000001f200000432000001f30001042e000001f40001043000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffffffffff000000000000007f8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000ffffffffffffffff360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbcffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffff9f206661696c656400000000000000000000000000000000000000000000000000416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c1806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b83020000020000000000000000000000000000002400000000000000000000000008c379a0000000000000000000000000000000000000000000000000000000006e74726163740000000000000000000000000000000000000000000000000000416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f000000000000000000000000000000000000008400000000000000000000000000000002000000000000000000000000000000400000010000000000000000004e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240000000000000000000000004eac19f774d2aa18cb028e3f83aa2c1f0c443d0b4b93f1861958946a249100cb",
  linkReferences: {},
  deployedLinkReferences: {},
  factoryDeps: {}
};

/* eslint-disable no-useless-computed-key */

const AddressZero = "0x0000000000000000000000000000000000000000";

/**
 * @internal
 */
const CONTRACT_ADDRESSES = {
  [280]: {
    openzeppelinForwarder: "0x12A305cc7168fa3b7B172fE53c57b9a22716F667",
    openzeppelinForwarderEOA: AddressZero,
    biconomyForwarder: AddressZero
  },
  [324]: {
    openzeppelinForwarder: "0x4e0C3577335961Ff800FFDA24981EB2F38D94483",
    openzeppelinForwarderEOA: AddressZero,
    biconomyForwarder: AddressZero
  }
};
const IMPLEMENTATIONS = {
  // ZKSync Era Testnet
  [280]: {
    DropERC721: "0xA8E28D98203848401A4f924358e6c337153D0f04",
    DropERC1155: "0xf3C7d3F0AA374a2D32489929e24D3e9313Aec8bb",
    DropERC20: "0x4027561E163a420c4e5Db46E07EBd581CAa8Bb62",
    SignatureDrop: "",
    Marketplace: "0xA77041a7A34A67D7285c8d3550110e441009436e",
    MarketplaceV3: "0x6026C3b81927f9f3bD943c32F8605C1774Df79f2",
    TokenERC721: "0xe04593be4c928769ACb157aab0214be1c4E7b6F6",
    TokenERC1155: "0x4e0C3577335961Ff800FFDA24981EB2F38D94483",
    TokenERC20: "0x0aecDe90BC11303871E6e4D7d83Ee84433BC115C",
    AirdropERC20: "0xcd3555c6058278E725A5b66d2D89aCc3b211768b",
    AirdropERC721: "0x3D9337181DC55fB1cD06D46b0738A8134295670d",
    AirdropERC1155: "0x8b0DBCf5b7D01eBB0F24525CE8AB72F16CE4F8C8"
  },
  // ZKSync Era Mainnet
  [324]: {
    DropERC721: "0x9742f5ac11958cFAd151eBF0Fc31302fA409036E",
    DropERC1155: "0x4027561E163a420c4e5Db46E07EBd581CAa8Bb62",
    DropERC20: "0xf3C7d3F0AA374a2D32489929e24D3e9313Aec8bb",
    SignatureDrop: "",
    Marketplace: "",
    MarketplaceV3: "0x13f25360dd3f9096c3e2cBe60b95c45b11ADB7E4",
    MarketplaceV3_aux: "0x5a2524Ca4E4f86a34382C5be871F34f50F014d84",
    TokenERC721: "0x26279882D5E93045D4FA986847CAAC048b2Bac3b",
    TokenERC1155: "0xA8E28D98203848401A4f924358e6c337153D0f04",
    TokenERC20: "0x56Abb6a3f25DCcdaDa106191053b1CC54C196DEE",
    AirdropERC20: "0xDD3E3BBa3bb4edcbbEa9d52Cd1E49289Ef3DfDE3",
    AirdropERC721: "0x8A4E9034BC6ac77E1408AC878e0603A32B5d4b73",
    AirdropERC1155: "0xcd3555c6058278E725A5b66d2D89aCc3b211768b"
  }
};

/**
 * @internal
 * @param chainId
 * @param contractType
 */
function getImplementation(chainId, contractName, version) {
  if (chainId in IMPLEMENTATIONS) {
    const approvedImpls = IMPLEMENTATIONS[chainId];
    if (contractName in approvedImpls) {
      if (contractName === "MarketplaceV3" && version === "1.1.2" && chainId === 324) {
        return approvedImpls["MarketplaceV3_aux"];
      }
      return approvedImpls[contractName];
    }
  }
  return null;
}

/**
 *
 * @param chainId - chain id
 * @returns the array of trusted forwarders for the given chain id
 * @internal
 */
function zkGetDefaultTrustedForwarders(chainId, contractName) {
  const biconomyForwarder = CONTRACT_ADDRESSES[chainId].biconomyForwarder;
  const openzeppelinForwarder = CONTRACT_ADDRESSES[chainId].openzeppelinForwarder;
  return contractName && contractName === "Pack" ? [] : [openzeppelinForwarder, biconomyForwarder].filter(a => a !== AddressZero);
}

async function zkDeployContractFromUri(publishMetadataUri, constructorParamValues, signer, storage, chainId, options) {
  const {
    compilerMetadata,
    extendedMetadata
  } = await contractPublisher.fetchAndCacheDeployMetadata(publishMetadataUri, storage);
  const forceDirectDeploy = options?.forceDirectDeploy || false;
  const isNetworkEnabled = extendedMetadata?.networksForDeployment?.networksEnabled.includes(chainId) || extendedMetadata?.networksForDeployment?.allNetworks;
  if (extendedMetadata?.networksForDeployment && !isNetworkEnabled) {
    throw new Error(`Deployments disabled on this network, with chainId: ${chainId}`);
  }
  if (extendedMetadata && extendedMetadata.factoryDeploymentData && !forceDirectDeploy && (!extendedMetadata.deployType || extendedMetadata.deployType !== "standard")) {
    if (extendedMetadata.isDeployableViaProxy || extendedMetadata.isDeployableViaFactory || extendedMetadata.deployType === "autoFactory") {
      const implementationAddress = getImplementation(chainId, compilerMetadata.name, extendedMetadata.version);
      if (!implementationAddress) {
        throw new Error("Contract not supported yet.");
      }
      const initializerParamTypes = sdk.extractFunctionParamsFromAbi(compilerMetadata.abi, extendedMetadata.factoryDeploymentData.implementationInitializerFunction).map(p => p.type);
      const paramValues = sdk.convertParamValues(initializerParamTypes, constructorParamValues);
      const encodedInitializer = ethers.Contract.getInterface(compilerMetadata.abi).encodeFunctionData(extendedMetadata.factoryDeploymentData.implementationInitializerFunction, paramValues);
      const proxyFactory = new zksyncWeb3.ContractFactory(twProxyArtifactZK.abi, twProxyArtifactZK.bytecode, signer, "create");
      const proxy = await proxyFactory.deploy(implementationAddress, encodedInitializer);
      await proxy.deployed();

      // register on multichain registry
      await registerContractOnMultiChainRegistry(proxy.address, chainId, compilerMetadata.metadataUri);
      return proxy.address;
    } else {
      throw new Error("Invalid deploy type");
    }
  } else {
    // throw new Error("Contract not supported yet.");
    const bytecode = compilerMetadata.bytecode.startsWith("0x") ? compilerMetadata.bytecode : `0x${compilerMetadata.bytecode}`;
    if (!ethers.utils.isHexString(bytecode)) {
      throw new Error(`Contract bytecode is invalid.\n\n${bytecode}`);
    }
    const constructorParamTypes = contractPublisher.extractConstructorParamsFromAbi(compilerMetadata.abi).map(p => p.type);
    const paramValues = sdk.convertParamValues(constructorParamTypes, constructorParamValues);
    const factory = new zksyncWeb3.ContractFactory(compilerMetadata.abi, compilerMetadata.bytecode, signer, "create");
    const contract = await factory.deploy(...paramValues);

    // register on multichain registry
    await registerContractOnMultiChainRegistry(contract.address, chainId, compilerMetadata.metadataUri);
    return contract.address;
  }
}
async function getZkTransactionsForDeploy() {
  const transactions = [];
  transactions.push({
    contractType: "proxy",
    addresses: []
  });
  return transactions;
}
async function registerContractOnMultiChainRegistry(address, chainId, metadataURI) {
  try {
    // random wallet is fine here, we're doing gasless calls
    const wallet = ethers.Wallet.createRandom();
    const sdk$1 = sdk.ThirdwebSDK.fromPrivateKey(wallet.privateKey, "polygon", {
      gasless: {
        openzeppelin: {
          relayerUrl: "https://api.defender.openzeppelin.com/autotasks/dad61716-3624-46c9-874f-0e73f15f04d5/runs/webhook/7d6a1834-dd33-4b7b-8af4-b6b4719a0b97/FdHMqyF3p6MGHw6K2nkLsv",
          relayerForwarderAddress: "0xEbc1977d1aC2fe1F6DAaF584E2957F7c436fcdEF"
        },
        experimentalChainlessSupport: true
      }
    });
    const existingMeta = await sdk$1.multiChainRegistry.getContractMetadataURI(chainId, address);
    if (existingMeta && existingMeta !== "") {
      return true;
    }
    // add to multichain registry with metadata uri unlocks the contract on SDK/dashboard for everyone
    await sdk$1.multiChainRegistry.addContract({
      address,
      chainId,
      metadataURI
    });
    return true;
  } catch (e) {
    console.log("Error registering contract on multi chain registry", e);
    return false;
  }
}

exports.CONTRACT_ADDRESSES = CONTRACT_ADDRESSES;
exports.IMPLEMENTATIONS = IMPLEMENTATIONS;
exports.getImplementation = getImplementation;
exports.getZkTransactionsForDeploy = getZkTransactionsForDeploy;
exports.zkDeployContractFromUri = zkDeployContractFromUri;
exports.zkGetDefaultTrustedForwarders = zkGetDefaultTrustedForwarders;