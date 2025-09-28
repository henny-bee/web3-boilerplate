"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

interface WalletState {
  isConnected: boolean
  address: string | null
  balance: string | null
  chainId: number | null
}

interface WalletContextType extends WalletState {
  connect: () => Promise<void>
  disconnect: () => void
  switchNetwork: (chainId: number) => Promise<void>
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
    address: null,
    balance: null,
    chainId: null,
  })
  const { toast } = useToast()

  const connect = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })

        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        })

        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0], "latest"],
        })

        setWallet({
          isConnected: true,
          address: accounts[0],
          balance: (Number.parseInt(balance, 16) / 1e18).toFixed(4),
          chainId: Number.parseInt(chainId, 16),
        })

        toast({
          title: "Wallet Connected",
          description: `Connected to ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`,
        })
      } else {
        toast({
          title: "Wallet Not Found",
          description: "Please install MetaMask or another Web3 wallet",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet",
        variant: "destructive",
      })
    }
  }

  const disconnect = () => {
    setWallet({
      isConnected: false,
      address: null,
      balance: null,
      chainId: null,
    })
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
    })
  }

  const switchNetwork = async (targetChainId: number) => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${targetChainId.toString(16)}` }],
      })
    } catch (error: any) {
      if (error.code === 4902) {
        toast({
          title: "Network Not Added",
          description: "Please add this network to your wallet",
          variant: "destructive",
        })
      }
    }
  }

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnect()
        }
      })

      window.ethereum.on("chainChanged", (chainId: string) => {
        setWallet((prev) => ({
          ...prev,
          chainId: Number.parseInt(chainId, 16),
        }))
      })
    }
  }, [])

  return (
    <WalletContext.Provider value={{ ...wallet, connect, disconnect, switchNetwork }}>
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}

declare global {
  interface Window {
    ethereum?: any
  }
}

