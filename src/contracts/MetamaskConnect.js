import detectEthereumProvider from "@metamask/detect-provider";
//import Web3 from "web3";
//
export default async () => {
  let web3;
  let accountAddress;

  const provider = await detectEthereumProvider();

  if (provider) {
    await window.ethereum.enable();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    console.log(account);
    window.ethereum.on("accountsChanged", function(accounts) {
      console.log(accounts[0]);
    });
  } else {
    console.error("Not recognized");
  }

  return { web3, accountAddress };
};
