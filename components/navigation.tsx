"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "./theme-switcher"
import { WalletButton } from "./wallet-button"
import { Menu, X, Zap } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl gradient-text">CryptoVault</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/dashboard" className="hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/analytics" className="hover:text-primary transition-colors">
              Analytics
            </Link>
            <Link href="/nft" className="hover:text-primary transition-colors">
              NFT
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeSwitcher />
            <WalletButton />
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/dashboard" className="block hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/analytics" className="block hover:text-primary transition-colors">
              Analytics
            </Link>
            <Link href="/nft" className="block hover:text-primary transition-colors">
              NFT
            </Link>
            <div className="flex items-center space-x-4 pt-4">
              <ThemeSwitcher />
              <WalletButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
