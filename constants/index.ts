import { Github, Linkedin, Twitter } from "lucide-react";
import { z } from "zod";
// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home", icons: null },

  {
    href: "#FAQs",
    key: "FAQs",
    label: "FAQs",
    icons: null,
  },
  {
    href: "#Contact",
    key: "Contact",
    label: "Contact",
    icons: null,
  },
  {
    href: "#howItWorks",
    key: "how-it-works",
    label: "How It Works",
    icons: null,
  },
  {
    href: "https://github.com/preetsinghmakkar/",
    key: "github",
    label: "Github",
    icons: Github,
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About TokenMaker",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Community Stories", "User Reviews", "Developer Resources"],
  },
];

export const SOCIALS = [
  {
    href: "https://x.com/Preet132319",
    key: "twitter",
    label: "Twitter",
    icons: Twitter,
  },
  {
    href: "https://www.linkedin.com/in/preet-singh-a65967302/",
    key: "linkedin",
    label: "LinkedIn",
    icons: Linkedin,
  },
  {
    href: "https://github.com/preetsinghmakkar/TokenMaker",
    key: "github",
    label: "Github",
    icons: Github,
  },
];
export const getWords = (type: string) => {
  const typeText =
    type === "mintable"
      ? "Mintable Token"
      : type === "burnable"
      ? "Burnable Token"
      : type === "capped"
      ? "Capped Token"
      : type === "pausable"
      ? "Pausable Token"
      : type === "timeLock"
      ? "TimeLock Token"
      : "";

  return [
    {
      text: "Create ",
    },
    {
      text: typeText,
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "with",
    },
    {
      text: "One ",
    },
    {
      text: "Click.",
    },
  ];
};

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
