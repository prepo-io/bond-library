import { CHAIN_ID } from "../constants";
import CUSTOM_PRICE_FEEDS from "../custom-price-feeds";
import { ProtocolDefinition } from "../types";

export default {
  name: "prePO",
  description:
    "prePO is a decentralized trading platform allowing anyone, anywhere to gain exposure to any pre-public asset.",
  logoUrl: "https://imgur.com/nDauUpK",
  links: {
    governanceVote: "https://snapshot.org/#/prepo.eth",
    twitter: "https://twitter.com/prepo_io",
    github: "https://github.com/prepo-io",
    medium: "https://medium.com/prepo",
    homepage: "https://prepo.io/",
    discord: "https://discord.com/invite/XSQRdJactS",
  },
  issuerAddresses: { [CHAIN_ID.GOERLI_TESTNET]: "0xe5011a7cc5CDA29F02CE341B2847B58abEFA7c26" },
  tokens: [
    {
      name: "prePO",
      symbol: "PPO",
      logoUrl: "https://imgur.com/NNI5hnR",
      priceSources: [{ source: "custom", customPriceFunction: CUSTOM_PRICE_FEEDS.PPO }],
      purchaseLinks: { [CHAIN_ID.GOERLI_TESTNET]: "https://sale.prepo.io/" },
      addresses: { [CHAIN_ID.GOERLI_TESTNET]: "0xB40DBBb7931Cfef8Be73AEEC6c67d3809bD4600B" },
    },
  ],
} as ProtocolDefinition;