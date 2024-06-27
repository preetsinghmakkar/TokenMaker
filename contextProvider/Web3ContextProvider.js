"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { JsonRpcProvider } from "ethers";
const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [network, setNetwork] = useState();

  const getProvider = (network) => {
    let provider;

    switch (network) {
      case "testnet":
        provider = new JsonRpcProvider(process.env.KAIA_BAOBAB_TESTNET_RPC_URL);
        break;
      case "mainnet":
        provider = new JsonRpcProvider(process.env.KAIA_BAOBAB_MAINNET_RPC_URL);
        break;
      default:
        provider = new ethers.BrowserProvider(window.ethereum);
    }
    return provider;
  };

  const getSigner = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = getProvider(network);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setAddress(address);
    return signer;
  };

  const connectMetamask = async () => {
    try {
      const signer = await getSigner();
    } catch (error) {
      console.log("Failed to Connect Metamask!");
    }
  };

  return (
    <Web3Context.Provider
      value={{ connectMetamask, address, getSigner, network, setNetwork }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Provider = () => useContext(Web3Context);

//0x5E05Bac2BE1AB97bB36db8A010f885b0ee987C1e
