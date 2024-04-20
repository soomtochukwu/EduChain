import { Button } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center">
      <header className="px-4 lg:px-6 h-16 w-3/4   flex items-center border-b">
        <div className="flex items-center  gap-2">
          <Image
            alt="Cuber Edu. Logo"
            width={30}
            height={30}
            src={"/images/logo.png "}
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