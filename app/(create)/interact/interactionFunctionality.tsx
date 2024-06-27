"use client";
import { useState, useEffect } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ConnectMetamask from "@/components/ConnectMetamask";
import { ethers } from "ethers";
import { useWeb3Provider } from "@/contextProvider/Web3ContextProvider";
import {
  BurnableTokenABI,
  MintableTokenABI,
  PausableTokenABI,
  CappedTokenABI,
  TimeLockTokenABI,
} from "@/components/AllTokensABI";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TransferFormSchema } from "@/lib/utils";
import CustomTokenInput from "@/components/CustomInputs";
import Footer from "@/components/Footer";

interface dataProps {
  address: string;
  tokenType: string;
}

interface TransferFormInputs {
  to: string;
  transferAmount: string;
}

const InteractionFunctionality = ({ data }: { data: dataProps }) => {
  const { getSigner, address, network, setNetwork } = useWeb3Provider();
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [name, setName] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");
  const [totalSupply, setTotalSupply] = useState<string>("");

  const methods = useForm<TransferFormInputs>({
    resolver: zodResolver(TransferFormSchema()),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    const fetchSigner = async () => {
      const signer = await getSigner();
      setSigner(signer);
    };
    fetchSigner();
  }, [getSigner]);

  useEffect(() => {
    const fetchContract = async () => {
      if (!signer) {
        console.error("Signer is not set");
        return null;
      }

      let contractInstance: ethers.Contract | null = null;

      switch (data.tokenType) {
        case "mintable":
          contractInstance = new ethers.Contract(
            data.address,
            MintableTokenABI,
            signer
          );
          break;
        case "burnable":
          contractInstance = new ethers.Contract(
            data.address,
            BurnableTokenABI,
            signer
          );
          break;
        case "pausable":
          contractInstance = new ethers.Contract(
            data.address,
            PausableTokenABI,
            signer
          );
          break;
        case "capped":
          contractInstance = new ethers.Contract(
            data.address,
            CappedTokenABI,
            signer
          );
          break;
        case "timeLock":
          contractInstance = new ethers.Contract(
            data.address,
            TimeLockTokenABI,
            signer
          );
          break;
        default:
          console.error("Unsupported token type");
          return;
      }

      setContract(contractInstance);
    };

    fetchContract();
  }, [signer, data]);

  useEffect(() => {
    const fetchTokenDetails = async () => {
      try {
        if (!contract) {
          console.error("Contract is not set");
          return;
        }

        const fetchedName = await contract.name();
        const fetchedSymbol = await contract.symbol();
        const fetchedTotalSupply = await contract.totalSupply();
        const formattedSupply = ethers.formatEther(fetchedTotalSupply);

        setName(fetchedName);
        setSymbol(fetchedSymbol);
        setTotalSupply(formattedSupply);
      } catch (error) {
        console.error("Error fetching token details:", error);
        toast.error("An error occurred while fetching token details");
      }
    };

    if (contract) {
      fetchTokenDetails();
    }
  }, [contract]);

  const onSubmit = async (data: TransferFormInputs) => {
    try {
      if (!contract) {
        console.error("Contract is not set");
        return;
      }

      const to = data.to;
      const amount = ethers.parseUnits(data.transferAmount, 18);
      const transfer = await contract.transfer(to, amount);
      const tx = await transfer.wait();

      console.log("Transferred: ", tx);
      toast.success("Tokens transferred successfully!");
    } catch (error) {
      console.error("Error during transfer:", error);
      toast.error("An error occurred while transferring tokens");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-green-400 to-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Kaia</h1>
          <div className="flex items-center space-x-4">
            <ConnectMetamask />
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-grow py-16">
        <section className="bg-gray-800 p-8 rounded-lg max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Token Details</h2>
          <p className="mb-2">
            <strong>Name:</strong> {name}
          </p>
          <p className="mb-2">
            <strong>Symbol:</strong> {symbol}
          </p>
          <p className="mb-4">
            <strong>Total Supply:</strong> {totalSupply}
          </p>

          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <CustomTokenInput
                control={control}
                name="to"
                label="Recipient Address"
                placeholder="Enter recipient address"
              />
              <CustomTokenInput
                control={control}
                name="transferAmount"
                label="Amount to Transfer"
                placeholder="Enter amount to transfer"
              />
              <Button
                variant="default"
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Transfer Tokens
              </Button>
            </form>
          </FormProvider>
        </section>
      </main>

      <ToastContainer />

      <Footer />
    </div>
  );
};

export default InteractionFunctionality;
