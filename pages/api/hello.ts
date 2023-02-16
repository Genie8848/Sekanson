// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export const project = {
  uid: "QU21DLBcts6RG674PcnZ",
  canAcceptERC20: true,
  contractMetaFile: null,
  tokenURI: null,
  supply: 5000,
  testnetContractAddress: null,
  payables: [
    { address: "0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3", amount: 100 },
  ],
  contractURI: null,
  onlyOwnerMinting: false,
  name: "My Mintplex Project",
  network: "ethereum",
  adminAddress: ["0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3"],
  walletMax: 3,
  maxMintPerTxn: 2,
  enforceRoyalties: true,
  hasTimedDrop: false,
  allowlistDropTime: null,
  isPaidPremium: false,
  hasSupplyCap: true,
  hasWhiteLabel: false,
  hasWalletMax: false,
  whitelistedAddresses: [],
  headerMark: null,
  contractFile: null,
  earlyMintWalletIncentiveCap: 1,
  earlyMintIncentiveCap: 100,
  hasAllowListing: false,
  metadataExtension: ".json",
  earlyMintIncentivePrice: 0,
  hasEarlyMintWalletIncentive: false,
  tokenSymbol: "MINTPLEX",
  productionTxnHash: null,
  hasMintFee: true,
  publicDropTime: null,
  mintingOpen: true,
  testnetTxnHash: null,
  contractType: "ERC-721A",
  erc20PaymentOptionsMainnet: [],
  website: "",
  mintPrice: 0.01,
  erc20PaymentOptionsTestnet: [],
  hasEarlyMintIncentive: false,
  imageExtension: ".png",
  contractVersion: 2,
  createdAt: { _seconds: 1673094430, _nanoseconds: 189000000 },
  earlyMintWalletIncentivePrice: 0,
  productionContractAddress: null,
  metadataCid: null,
  sellerFeeBasisPoints: 0,
  preRevealImageCid: null,
  preRevealMetadataCid: null,
  plan: "free",
};
// export let projects = [
//   {
//     uid: "QU21DLBcts6RG674PcnZ",
//     canAcceptERC20: true,
//     contractMetaFile: null,
//     tokenURI: null,
//     supply: 5000,
//     testnetContractAddress: null,
//     payables: [
//       { address: "0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3", amount: 100 },
//     ],
//     contractURI: null,
//     onlyOwnerMinting: false,
//     name: "My Mintplex Project",
//     network: "ethereum",
//     adminAddress: ["0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3"],
//     walletMax: 3,
//     maxMintPerTxn: 2,
//     enforceRoyalties: true,
//     hasTimedDrop: false,
//     allowlistDropTime: null,
//     isPaidPremium: false,
//     hasSupplyCap: true,
//     hasWhiteLabel: false,
//     hasWalletMax: false,
//     whitelistedAddresses: [],
//     headerMark: null,
//     contractFile: null,
//     earlyMintWalletIncentiveCap: 1,
//     earlyMintIncentiveCap: 100,
//     hasAllowListing: false,
//     metadataExtension: ".json",
//     earlyMintIncentivePrice: 0,
//     hasEarlyMintWalletIncentive: false,
//     tokenSymbol: "MINTPLEX",
//     productionTxnHash: null,
//     hasMintFee: true,
//     publicDropTime: null,
//     mintingOpen: true,
//     testnetTxnHash: null,
//     contractType: "ERC-721A",
//     erc20PaymentOptionsMainnet: [],
//     website: "",
//     mintPrice: 0.01,
//     erc20PaymentOptionsTestnet: [],
//     hasEarlyMintIncentive: false,
//     imageExtension: ".png",
//     contractVersion: 2,
//     createdAt: { _seconds: 1673094430, _nanoseconds: 189000000 },
//     earlyMintWalletIncentivePrice: 0,
//     productionContractAddress: null,
//     metadataCid: null,
//     sellerFeeBasisPoints: 0,
//     preRevealImageCid: null,
//     preRevealMetadataCid: null,
//     plan: "free",
//   },
//   {
//     uid: "ZhvS2PNlQNVKgAGHlsGv",
//     contractFile: null,
//     contractType: "ERC-1155",
//     productionContractAddress: null,
//     tokenSymbol: "MINTPLEX",
//     sellerFeeBasisPoints: 0,
//     name: "My Mintplex Project",
//     payables: [
//       { amount: 100, address: "0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3" },
//     ],
//     plan: "free",
//     createdAt: { _seconds: 1673351940, _nanoseconds: 44000000 },
//     headerMark: null,
//     website: "",
//     hasWhiteLabel: false,
//     testnetTxnHash: null,
//     testnetContractAddress: null,
//     adminAddress: ["0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3"],
//     isPaidPremium: false,
//     contractVersion: 3,
//     contractMetaFile: null,
//     enforceRoyalties: true,
//     network: "polygon",
//     productionTxnHash: null,
//   },
//   {
//     uid: "jaUACXcaEH4FIhbjID0C",
//     supply: 10000,
//     headerMark: null,
//     network: "ethereum",
//     contractMetaFile: null,
//     payables: [
//       { amount: 100, address: "0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3" },
//     ],
//     createdAt: { _seconds: 1673351940, _nanoseconds: 44000000 },
//     mintPrice: 0.0001,
//     canAcceptERC20: true,
//     productionTxnHash: null,
//     hasMaxMintPerTxn: true,
//     productionContractAddress: null,
//     plan: "free",
//     testnetContractAddress: null,
//     hasSupplyCap: true,
//     name: "My Custom Token",
//     contractVersion: 1,
//     hasWalletMax: true,
//     isPaidPremium: false,
//     website: "",
//     erc20PaymentOptionsMainnet: [],
//     maxMintPerTxn: 100,
//     contractType: "ERC-20",
//     erc20PaymentOptionsTestnet: [],
//     testnetTxnHash: null,
//     contractFile: null,
//     walletMax: 100,
//     tokenSymbol: "TOKEN",
//     sellerFeeBasisPoints: 0,
//     adminAddress: ["0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3"],
//   },
// ];

export const application = {
  uid: "tCsiAaTfHQTxMjW6W3eh",
  adminAddress: ["0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3"],
  name: null,
  ctaText: null,
  productionContractAddress: null,
  priceRuleId: null,
  shopifyAPIKey: null,
  url: null,
  adminAccessScope: null,
  bannerBgColor: "#FFFFFF",
  testnetContractAddress: null,
  tokenId: null,
  ctaTextColor: "#000000",
  type: "shop_plugin",
  createdAt: { _seconds: 1673351940, _nanoseconds: 54000000 },
  isPaidPremium: false,
  discountCode: null,
  desiredBalance: 1,
  network: "ethereum",
  contractType: "ERC-721A",
  shopURL: null,
};
// export let applications = [
//   {
//     uid: "tCsiAaTfHQTxMjW6W3eh",
//     adminAddress: ["0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3"],
//     name: null,
//     ctaText: null,
//     productionContractAddress: null,
//     priceRuleId: null,
//     shopifyAPIKey: null,
//     url: null,
//     adminAccessScope: null,
//     bannerBgColor: "#FFFFFF",
//     testnetContractAddress: null,
//     tokenId: null,
//     ctaTextColor: "#000000",
//     type: "shop_plugin",
//     createdAt: { _seconds: 1673351940, _nanoseconds: 54000000 },
//     isPaidPremium: false,
//     discountCode: null,
//     desiredBalance: 1,
//     network: "ethereum",
//     contractType: "ERC-721A",
//     shopURL: null,
//   },
// ];

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
