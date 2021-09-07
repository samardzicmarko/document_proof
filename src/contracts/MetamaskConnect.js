import detectEthereumProvider from "@metamask/detect-provider";
//import Web3 from "web3";
//
export default async () => {
  let web3;
  let accountAddress;

  const provider = await detectEthereumProvider();

  if (provider) {
    window.ethereum.on("accountsChanged", () => {});
    console.log("ETH succes ");
  } else {
    console.error("Not recognized");
  }

  return { web3, accountAddress };
};
