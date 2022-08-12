require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food elder rice machine million great light army gas'; 
let testAccounts = [
"0x486bc3a2c35136a48666df150c4082be4c8051fa6f7103d46f82121031847318",
"0x8e4c0ccdeb0fd461e441421580748c0af0007a00f8288a893213e2e692c811e5",
"0x6cc5e2aec52ecfcb2dcb7c40f1dca269ee94539d8dc78462bfab23da83e96bdb",
"0x7d529c122a67155c45cf8d60fad097bf03c78174572b5e51ba9b939670738324",
"0x5b0a19a7581c40962237071b8af1ef1518300cc20358e9efdc5eaa6cb2533203",
"0xa443013b1389e6d9e64181fe400463fff821cdfb8932ef1316ed2905f6af4594",
"0x0bd80ee40554d1aab944d033e843729e144c0f9cadc0cd753872338ec2bc0be3",
"0x711250d59f260aa77a9e8db434db70458979d7040278bc5d793d1a03cd1a49c6",
"0x6df0ab89bdb5967a2f961c96559a0eb1b7927d5206fafae556e2334fee016035",
"0x54ce30d8b6dc603041e7dd4692d92ce4ac7af95103c106e7afcfc83cc41f2c01"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

