import { CHAIN_ID } from "../constants";
import { Chain } from "../types";

const ethereumMainnet: Chain = {
  displayName: "Ethereum",
  chainName: "mainnet",
  chainId: "1",
  isTestnet: false,
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: [""],
  blockExplorerUrls: ["https://etherscan.io/#/"],
  blockExplorerName: "Etherscan",
  image: "",
  imageAltText: "Ethereum Logo",
};

const goerliTestnet: Chain = {
  displayName: "Goerli Testnet",
  chainName: "goerli",
  chainId: "5",
  isTestnet: true,
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: [""],
  blockExplorerUrls: ["https://goerli.etherscan.io/#/"],
  blockExplorerName: "Etherscan",
  image: "",
  imageAltText: "Ethereum Logo",
};

const arbitrumMainnet: Chain = {
  displayName: "Arbitrum",
  chainName: "arbitrum",
  chainId: "42161",
  isTestnet: false,
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://arb1.arbitrum.io/rpc"],
  blockExplorerUrls: ["https://arbiscan.io/#/"],
  blockExplorerName: "Arbiscan",
  image: "",
  imageAltText: "Arbitrum Logo",
};

export const CHAINS = new Map<string, Chain>([
  [CHAIN_ID.ETHEREUM_MAINNET, ethereumMainnet],
  [CHAIN_ID.GOERLI_TESTNET, goerliTestnet],
  [CHAIN_ID.ARBITRUM_MAINNET, arbitrumMainnet],
]);

export const SUPPORTED_CHAINS: Chain[] = [
  CHAINS.get(CHAIN_ID.ETHEREUM_MAINNET) as Chain,
  CHAINS.get(CHAIN_ID.GOERLI_TESTNET) as Chain,
  CHAINS.get(CHAIN_ID.ARBITRUM_MAINNET) as Chain,
];

/*
[
    CHAIN_ID.OPTIMISM_MAINNET,
    {
      displayName: "Optimism",
      chainId: "10",
      isTestnet: false,
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://mainnet.optimism.io"],
      blockExplorerUrls: ["https://optimistic.etherscan.io/#/"],
      blockExplorerName: "Optimism Explorer",
      image: "",
      imageAltText: "Optimism Logo",
    },
  ],
  [
    CHAIN_ID.BSC_MAINNET,
    {
      displayName: "Binance Smart Chain",
      chainId: "56",
      isTestnet: false,
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ankr.com/bsc"],
      blockExplorerUrls: ["https://bscscan.com/#/"],
      blockExplorerName: "BscScan",
      image: "",
      imageAltText: "Binance Smart Chain Logo",
    },
  ],
  [
    CHAIN_ID.POLYGON_MAINNET,
    {
      displayName: "Polygon",
      chainId: "137",
      isTestnet: false,
      nativeCurrency: {
        name: "Matic",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/#/"],
      blockExplorerName: "Polygonscan",
      image: "",
      imageAltText: "Polygon Logo",
    },
  ],
  [
    CHAIN_ID.POLYGON_MUMBAI_TESTNET,
    {
      displayName: "Polygon Mumbai Testnet",
      chainId: "80001",
      isTestnet: true,
      nativeCurrency: {
        name: "Matic",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/#/"],
      blockExplorerName: "Polygonscan",
      image: "",
      imageAltText: "Polygon Logo",
    },
  ],
  [
    CHAIN_ID.ANDROMEDA_MAINNET,
    {
      displayName: "Andromeda",
      chainId: "1088",
      isTestnet: false,
      nativeCurrency: {
        name: "Metis",
        symbol: "METIS",
        decimals: 18,
      },
      rpcUrls: ["https://andromeda.metis.io/?owner=1088"],
      blockExplorerUrls: ["https://andromeda-explorer.metis.io/#/"],
      blockExplorerName: "Metis",
      image: "",
      imageAltText: "Andromeda Logo",
    },
  ],
  [
    CHAIN_ID.FANTOM_MAINNET,
    {
      displayName: "Fantom",
      chainId: "250",
      isTestnet: false,
      nativeCurrency: {
        name: "Fantom",
        symbol: "FTM",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ftm.tools"],
      blockExplorerUrls: ["https://ftmscan.com/#/"],
      blockExplorerName: "FTMScan",
      image: "",
      imageAltText: "Fantom Logo",
    },
  ],
  [
    CHAIN_ID.FANTOM_TESTNET,
    {
      displayName: "Fantom Testnet",
      chainId: "0xfa2",
      isTestnet: true,
      nativeCurrency: {
        name: "Fantom",
        symbol: "FTM",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.testnet.fantom.network"],
      blockExplorerUrls: ["https://testnet.ftmscan.com/#/"],
      blockExplorerName: "FTMScan",
      image: "",
      imageAltText: "Fantom Logo",
    },
  ],
  [
    CHAIN_ID.ARBITRUM_TESTNET,
    {
      displayName: "Arbitrum Testnet",
      chainId: "421611",
      isTestnet: true,
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
      blockExplorerUrls: ["https://rinkeby-explorer.arbitrum.io/#/"],
      blockExplorerName: "Arbitrum Explorer",
      image: "",
      imageAltText: "Arbitrum Logo",
    },
  ],
  [
    CHAIN_ID.AVALANCHE_MAINNET,
    {
      displayName: "Avalanche",
      chainId: "43114",
      isTestnet: false,
      nativeCurrency: {
        name: "Avalanche",
        symbol: "AVAX",
        decimals: 18,
      },
      rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
      blockExplorerUrls: ["https://snowtrace.io/#/"],
      blockExplorerName: "Snowtrace",
      image: "",
      imageAltText: "Avalanche Logo",
    },
  ],
  [
    CHAIN_ID.AVALANCHE_FUJI_TESTNET,
    {
      displayName: "Avalanche Fuji Testnet",
      chainId: "43113",
      isTestnet: true,
      nativeCurrency: {
        name: "Avalanche",
        symbol: "AVAX",
      },
      rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
      blockExplorerUrls: ["https://testnet.snowtrace.io/#/"],
      blockExplorerName: "Snowtrace",
      image: "",
      imageAltText: "Avalanche Logo",
    },
  ]
*/
