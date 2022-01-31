require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name raise still minimum gesture opera bridge giggle'; 
let testAccounts = [
"0x3be6e924d5c4bd5cd2a0aade3b1d69628522e3d20be8293eaa23d5f05f33af1c",
"0x674e01a5427c5f2451c44cbf625fa3a94ea3f249ec2626e283ccf77d3cb1aeab",
"0x13beb995783a6b6a8aaa46cecf28d8efffd33259568c153a8a1628c0492d93df",
"0xfb57885d0c1467474b52d68119b5d3feea1346f88303187606232dc844038e21",
"0x11e92488d13d9aa7337a703723b9de9ebab5b71a173b69ac0c2a3e00b9f17415",
"0x775f4bdc57ed5f4d8a48369be98f857c7b5673ad8dc0c1438c15e18e498458fb",
"0x3a1c79049fc5bbb7b7eecd72abaab68f62cd9c32577a8cb8ac9b7cf9ad975454",
"0xff7808f0ae9f9943eea24a3568c2b37bafb0f7093f572ffdcc1e17d5a7692e71",
"0x9a91f79ccec7eae77dd1ba474c0ebb926c166744e3b9edb32f5c0407ffaba214",
"0xead1d1ff27daa45192da126b48e0f4701ff8fe634bbcc9b1e87fdab6f1a91ad5"
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

