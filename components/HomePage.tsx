"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ConnectMetamask from "./ConnectMetamask";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { ethers } from "ethers";
import { useWeb3Provider } from "@/contextProvider/Web3ContextProvider";
import { CreateTokenFormSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Control, FieldValues } from "react-hook-form";
import CustomTokenInput from "./CustomInputs";
import { Button } from "./ui/button";
import {
  BurnableTokenABI,
  MintableTokenABI,
  PausableTokenABI,
  CappedTokenABI,
  TimeLockTokenABI,
  mintableTokenBytecode,
  burnableTokenByteCode,
  pausableTokenByteCode,
  cappedTokenByteCode,
  timeLockTokenByteCode,
} from "./AllTokensABI";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import { TailSpin } from "react-loader-spinner";

interface CreateTokenFormProps {
  type: "mintable" | "burnable" | "pausable" | "capped" | "timeLock";
}
type TokenData = {
  name: string;
  symbol: string;
  supply: string;
  contractAddress: string;
};
const HomePage: React.FC<CreateTokenFormProps> = ({ type }) => {
  //useState Hooks
  const { getSigner, address, network, setNetwork } = useWeb3Provider();
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [token, setToken] = useState<TokenData>({
    name: "",
    symbol: "",
    supply: "",
    contractAddress: "",
  });
  const [loading, setLoading] = useState(false);

  //fetching the signer
  useEffect(() => {
    const fetchSigner = async () => {
      const signer = await getSigner();
      setSigner(signer);
    };
    fetchSigner();
  }, [getSigner]);

  //form Schema
  const formSchema = CreateTokenFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      symbol: "",
      mintAmount: undefined,
      capAmount: undefined,
    },
  });

  const fetchContract = async () => {
    if (!signer) {
      console.error("Signer is not set");
      return null;
    }

    let factory;

    switch (type) {
      case "mintable":
        factory = new ethers.ContractFactory(
          MintableTokenABI,
          mintableTokenBytecode,
          signer
        );
        break;

      case "burnable":
        factory = new ethers.ContractFactory(
          BurnableTokenABI,
          burnableTokenByteCode,
          signer
        );
        break;

      case "pausable":
        factory = new ethers.ContractFactory(
          PausableTokenABI,
          pausableTokenByteCode,
          signer
        );
        break;

      case "capped":
        factory = new ethers.ContractFactory(
          CappedTokenABI,
          cappedTokenByteCode,
          signer
        );
        break;

      case "timeLock":
        factory = new ethers.ContractFactory(
          TimeLockTokenABI,
          timeLockTokenByteCode,
          signer
        );
        break;
    }

    return factory;
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const factory: any = await fetchContract();

      let contract;

      if (type === "capped" || type === "timeLock") {
        let dataCapAmount: any = ethers.parseUnits(
          data.capAmount as string,
          18
        );
        contract = await factory.deploy(data.name, data.symbol, dataCapAmount);
      } else {
        contract = await factory.deploy(data.name, data.symbol);
      }

      const mintTx = await contract.mint(
        address,
        ethers.parseUnits(data.mintAmount, 18),
        { gasLimit: 300000 }
      );

      await mintTx.wait();

      console.log("Contract deployed at:", contract.target);

      setToken({
        name: data.name,
        symbol: data.symbol,
        supply: data.mintAmount,
        contractAddress: contract.target,
      });

      toast.success(
        `Token Created! Name: ${data.name}, Symbol: ${data.symbol}, Token Supply: ${data.mintAmount}, Token Address : ${contract.target}`
      );

      return contract;
    } catch (error: any) {
      console.error("Error:", error);
      if (error.reason) {
        toast.error(`Error: ${error.reason}`);
      } else {
        toast.error("An error occurred while creating the token");
      }
    } finally {
      setLoading(false);
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
        <section className="text-center mb-16">
          {token.name && token.symbol && (
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
              <h3 className="text-2xl font-semibold">Token Created!</h3>
              <p className="mt-2">
                <strong>Name:</strong> {token.name}
              </p>
              <p className="mt-1">
                <strong>Symbol:</strong> {token.symbol}
              </p>
              <p className="mt-1">
                <strong>Total Supply:</strong> {token.supply}
              </p>
              <p className="mt-1">
                <strong>Token Address :</strong> {token.contractAddress}
              </p>
            </div>
          )}
          <div className="relative h-64 w-full mx-auto">
            <Image
              src="/home-banner.png"
              layout="fill"
              objectFit="cover"
              alt="Home Image"
              className="rounded"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-4xl font-bold">Create ERC20 Tokens Now!</h2>
            <p className="mt-2">
              Our platform provides you the ability to create ERC20 tokens on
              Kaia.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mt-6 gap-4">
            <Link
              href="../mintable/"
              className="w-40 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
            >
              Mintable Token
            </Link>
            <Link
              href="../burnable/"
              className="w-40 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
            >
              Burnable Token
            </Link>
            <Link
              href="../pausable/"
              className="w-40 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
            >
              Pausable Token
            </Link>
            <Link
              href="../capped/"
              className="w-40 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
            >
              Capped Token
            </Link>
            <Link
              href="../timeLock/"
              className="w-40 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
            >
              TimeLock Token
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-gray-800 p-8 rounded-lg max-w-lg mx-auto"
            >
              <div className="flex justify-end mb-4">
                <Link
                  href={
                    "https://github.com/preetsinghmakkar/custom-erc20-tokens"
                  }
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Code
                </Link>
              </div>

              <CustomTokenInput
                control={form.control}
                name="name"
                label="Token Name"
                placeholder="Enter your token name"
              />

              <CustomTokenInput
                control={form.control}
                name="symbol"
                label="Token Symbol"
                placeholder="Enter your token Symbol"
              />

              <CustomTokenInput
                control={form.control}
                name="mintAmount"
                label="Token Supply"
                placeholder="Enter your token Supply"
              />

              {(type === "capped" || type === "timeLock") && (
                <CustomTokenInput
                  control={form.control}
                  name="capAmount"
                  label="Max Token Supply"
                  placeholder="Enter your token Supply"
                />
              )}

              <div className="flex space-x-4 mt-4">
                <Button
                  disabled={loading}
                  variant="default"
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  {loading ? (
                    <TailSpin color="#FFF" height={24} width={24} />
                  ) : (
                    "Create"
                  )}
                </Button>
                <Link
                  href={"../interact/"}
                  type="button"
                  className="bg-blue-500 py-2 px-4 rounded w-full text-center"
                >
                  Interact with Token
                </Link>
              </div>
              <p className="mt-4">
                {" "}
                ** Remember to save Token Address after creation
              </p>
            </form>
          </Form>
        </section>
      </main>

      <ToastContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
