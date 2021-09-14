import web3 from "./web3";

const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_points",
        type: "uint256",
      },
    ],
    name: "createContest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "forms",
    outputs: [
      {
        internalType: "contract Form",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnAllBids",
    outputs: [
      {
        internalType: "contract Form[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export default (address) => {
  const instance = new web3.eth.Contract(abi, address);
  return instance;
};
