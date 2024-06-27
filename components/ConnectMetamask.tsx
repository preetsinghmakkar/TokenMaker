"use client";
import React, { useEffect } from "react";
import { useWeb3Provider } from "@/contextProvider/Web3ContextProvider";

const ConnectMetamask = () => {
  const { connectMetamask, getSigner, address } = useWeb3Provider();

  const handleClick = () => {
    connectMetamask();
  };

  const shortenAddress = (addr: string) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  useEffect(() => {
    const connect = async () => {
      await connectMetamask();
      const signer = await getSigner();
    };

    connect();
  }, [address]);

  return (
    <div className="mt-4 mb-4">
      <button
        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white py-2 px-6 rounded-full shadow-lg 
               focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 
               transition-transform transform hover:scale-105 duration-300 ease-in-out"
        onClick={handleClick}
      >
        {address ? shortenAddress(address) : "Connect Metamask"}
      </button>
    </div>
  );
};

export default ConnectMetamask;
