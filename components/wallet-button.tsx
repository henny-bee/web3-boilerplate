"use client"

import { Button } from "@/components/ui/button"
import { useWallet } from "@/context/wallet-provider"
import { Wallet, LogOut } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function WalletButton() {
  const { isConnected, address, balance, connect, disconnect } = useWallet()

  if (!isConnected) {
    return (
      <Button onClick={connect} className="glass-effect neon-glow">
        <Wallet className="mr-2 h-4 w-4" />
        Connect Wallet
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="glass-effect bg-transparent">
          <Wallet className="mr-2 h-4 w-4" />
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-effect">
        <DropdownMenuItem disabled>Balance: {balance} ETH</DropdownMenuItem>
        <DropdownMenuItem onClick={disconnect}>
          <LogOut className="mr-2 h-4 w-4" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
