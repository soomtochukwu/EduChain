"use client";
import "@rainbow-me/rainbowkit/styles.css";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  getDefaultConfig,
  lightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { metaMaskWallet, trustWallet } from "@rainbow-me/rainbowkit/wallets";
import { arbitrumSepolia, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const { wallets } = getDefaultWallets();

const config = getDefaultConfig({
  appName: "cuberhack",
  projectId: "43729b23db241dc0e811f7cbe2318b3b",
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [metaMaskWallet, trustWallet],
    },
  ],
  chains: [
    arbitrumSepolia,
    sepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [arbitrumSepolia]
      : []),
  ],
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#005500",
            accentColorForeground: "white",
            fontStack: "system",
            overlayBlur: "small",
            borderRadius: "large",
          })}
          modalSize="compact"
          initialChain={arbitrumSepolia}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
