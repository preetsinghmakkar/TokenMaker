"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ConnectMetamask from "@/components/ConnectMetamask";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { ethers } from "ethers";
import { useWeb3Provider } from "@/contextProvider/Web3ContextProvider";
import { InteractFormSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomTokenInput from "@/components/CustomInputs";
import { Button } from "@/components/ui/button";
import { MintableTokenABI } from "@/components/AllTokensABI";
import { toast, ToastContainer } from "react-toastify";
import InteractionFunctionality from "./interactionFunctionality";
import Footer from "@/components/Footer";

interface dataProps {
  address: string;
  tokenType: string;
}

const Interact = () => {
  //useState Hooks
  const { getSigner, address, network, setNetwork } = useWeb3Provider();
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [enableInteraction, setEnableInteraction] = useState(false);
  const [tokenData, setTokenData] = useState<dataProps>({
    address: "",
    tokenType: "",
  });

  //fetching the signer
  useEffect(() => {
    const fetchSigner = async () => {
      const signer = await getSigner();
      setSigner(signer);
    };
    fetchSigner();
  }, [getSigner]);

  //form Schema
  const formSchema = InteractFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      tokenType: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setTokenData(data);

      setEnableInteraction(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {enableInteraction ? (
        <InteractionFunctionality data={tokenData} />
      ) : (
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
                    name="address"
                    label="Token Address"
                    placeholder="Enter your token Address"
                  />

                  <div className="mb-4">
                    <label
                      htmlFor="dropdown"
                      className="block text-sm font-medium "
                    >
                      Select an Option
                    </label>
                    <select
                      id="dropdown"
                      {...form.register("tokenType")}
                      className="mt-1 block w-full bg-gray-400 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option disabled value="">
                        Select an option
                      </option>
                      <option value="mintable">Mintable</option>
                      <option value="burnable">Burnable</option>
                      <option value="pausable">Pausable</option>
                      <option value="capped">Capped</option>
                      <option value="timeLock">TimeLock</option>
                    </select>
                  </div>

                  <div className="flex space-x-4 mt-4">
                    <Button
                      variant="default"
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Interact
                    </Button>
                  </div>
                </form>
              </Form>
            </section>
          </main>

          <ToastContainer />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Interact;
