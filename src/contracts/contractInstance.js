import web3 from './web3';

const abi = []// THE ABI

export default (address) => {
  const instance = new web3.eth.Contract(abi, address);
  return instance;
};