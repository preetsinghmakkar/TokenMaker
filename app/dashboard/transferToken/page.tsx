"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TransferFormSchema } from "@/constants";
import { writeContract } from "@wagmi/core";
import { config } from "../../../constants/walletProvider";
import { useAccount } from "wagmi";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  BurnableTokenABI,
  MintableTokenABI,
  PausableTokenABI,
  CappedTokenABI,
  TimeLockTokenABI,
} from "@/constants/AllTokensABI";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Oval } from "react-loader-spinner";
import { ethers } from "ethers";
import { CircleX } from "lucide-react";

interface TransferTokenProps {
  data: {
    address: string;
    tokenType: string;
  };
}

const TransferToken: React.FC<TransferTokenProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [errorTokenTransfer, seterrorTokenTransfer] = useState("");
  const formSchema = TransferFormSchema();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      to: "",
      transferAmount: "",
    },
  });

  const { chain } = useAccount();

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      let abi: any;
      let address: any = data.address;
      let chainId: any = chain?.id;

      switch (data.tokenType) {
        case "mintable":
          abi = MintableTokenABI;
          break;

        case "burnable":
          abi = BurnableTokenABI;
          break;

        case "pausable":
          abi = PausableTokenABI;
          break;

        case "capped":
          abi = CappedTokenABI;
          break;

        case "timeLock":
          abi = TimeLockTokenABI;
          break;
        default:
          throw new Error("Unsupported token type");
      }

      const to = value.to;
      const amount = ethers.parseUnits(value.transferAmount, 18);

      const hash = await writeContract(config, {
        abi: abi,
        address: address,
        functionName: "transfer",
        chainId: chainId,
        args: [to, amount],
      });

      console.log(hash);

      console.log("Successfully Transferred");
      setIsDialogOpen(true);
    } catch (error) {
      console.log("Error in Transfer:", error);
      seterrorTokenTransfer(
        "Unable to Transfer! For Help Get in Touch With Our Staff."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col m-4 items-center justify-start min-h-screen p-4 bg-white w-full">
      {errorTokenTransfer && (
        <p className="text-red-500 m-4 ">
          {" "}
          <CircleX /> {errorTokenTransfer}
        </p>
      )}

      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Transfer Tokens Now!</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="to"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>To</FormLabel>
                    <FormControl>
                      <Input placeholder="0xz..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="transferAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Transfer Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading}>
                {isLoading ? <Oval height={20} width={20} /> : "Submit"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Success</DialogTitle>
            <DialogDescription>
              Token transfer was successful!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TransferToken;
