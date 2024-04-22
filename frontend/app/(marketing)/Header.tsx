import { Button } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center">
      <header className="px-4 lg:px-6 h-16 w-full lg:py-9 rounded-b-xl lg:w-3/4 bg-green-200 flex items-center border-b">
        <div className="flex items-center  gap-2">
          <Image
            alt="Cuber Edu. Logo"
            width={50}
            height={50}
            src={"/logo.jpeg "}
          />
          <span className="font-bold">EduChain</span>
        </div>
        <div className="text-sm font-medium ml-auto">
          <ConnectButton label="Sign in or Login" />
        </div>
      </header>
    </div>
  );
};

export default Header;
