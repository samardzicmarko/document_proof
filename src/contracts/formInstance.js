import web3 from "./web3";

const address = "0x13Dcb38B984FC27E5A5372CEc78Dc46ef7a7Ac36";

const abi = [
  [
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
  ],
];

const instance = new web3.eth.Contract(abi, address);

export default instance;
