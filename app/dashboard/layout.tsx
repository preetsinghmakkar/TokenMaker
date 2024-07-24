"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconBrandTabler,
  IconCoins,
  IconCoin,
  IconCoinYen,
  IconCoinPound,
  IconCoinRupee,
  IconSwipeRight,
} from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { DashboardCards } from "@/components/DashboardCards";
import Header from "@/components/Header";
import WagmiProviderContext from "@/constants/walletProvider";

import "@rainbow-me/rainbowkit/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Interact with My Token",
      href: "/dashboard/interact",
      icon: (
        <IconSwipeRight
          stroke={2}
          className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"
        />
      ),
    },
    {
      label: "Mintable Token",
      href: "/dashboard/mintableToken",
      icon: (
        <IconCoin
          stroke={2}
          className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"
        />
      ),
    },
    {
      label: "Burnable Token",
      href: "/dashboard/burnableToken",
      icon: (
        <IconCoinYen
          stroke={2}
          className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"
        />
      ),
    },
    {
      label: "Pausable Token",
      href: "/dashboard/pausableToken",
      icon: (
        <IconCoins
          stroke={2}
          className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"
        />
      ),
    },
    {
      label: "Capped Token",
      href: "/dashboard/cappedToken",
      icon: (
        <IconCoinPound
          stroke={2}
          className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"
        />
      ),
    },
    {
      label: "Time Lock Token",
      href: "/dashboard/timeLockToken",
      icon: (
        <IconCoinRupee className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <WagmiProviderContext>
          <Header />

          <div
            className={cn(
              "rounded-md flex flex-col md:flex-row bg-white shadow-sm dark:bg-neutral-800 w-full flex-1 max-w-9xl mx-auto border border-white dark:border-neutral-700 overflow-hidden",
              "h-auto"
            )}
          >
            <Sidebar open={open} setOpen={setOpen} animate={false}>
              <SidebarBody className="justify-between gap-10">
                <div className="flex flex-col flex-1 overflow-y-auto">
                  <div className="mt-8 flex flex-col gap-2 ">
                    {links.map((link, idx) => (
                      <SidebarLink key={idx} link={link} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center p-2 bg-white rounded-full shadow-lg hover:bg-slate-100 transition duration-300">
                  <UserButton
                    showName
                    appearance={{
                      elements: {
                        rootBox: "flex items-center space-x-2",
                        userName: "text-white font-semibold",
                      },
                    }}
                  />
                </div>
              </SidebarBody>
            </Sidebar>
            {children}
          </div>
        </WagmiProviderContext>
      </body>
    </html>
  );
}
