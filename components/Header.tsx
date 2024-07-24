"use client";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <nav className="flex justify-between items-center bg-white shadow-md border-2 p-5">
      <Link href="/dashboard" className="flex flex-row items-center">
        <Image src="/logo.jpg" alt="logo" width={74} height={29} />

        <h2 className="font-bold text-2xl hidden lg:inline-block">
          TokenMaker
        </h2>
      </Link>
      <div className="flex items-center space-x-4">
        <ConnectButton />
      </div>
    </nav>
  );
};

export default Header;
