import { z } from "zod";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CreateTokenFormSchema = (type: string) => {
  return z.object({
    name: z.string().min(2, "Token name must be at least 2 characters long"),
    symbol: z
      .string()
      .min(2, "Token symbol must be at least 2 characters long"),
    mintAmount: z
      .string()
      .min(2, "Minted Amount must be at least 2 characters long"),
    capAmount:
      type === "capped" || type === "timeLock"
        ? z.string().min(2, "Cap amount must be at least 2 characters long")
        : z.string().optional(),
  });
};

export const InteractFormSchema = () => {
  return z.object({
    address: z.string().min(10),
    tokenType: z.string().nonempty(),
  });
};

export const TransferFormSchema = () => {
  return z.object({
    to: z.string().min(10),
    transferAmount: z.string().min(1),
  });
};
