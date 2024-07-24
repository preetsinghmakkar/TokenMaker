import { ethers } from "ethers";

export const getSigner = async () => {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  console.log(signer);
  return signer;
};
