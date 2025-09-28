import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WalletProvider } from "@/context/wallet-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "CryptoVault - Advanced Web3 Platform",
  description: "The ultimate Web3 platform for DeFi, NFTs, and blockchain analytics",
  keywords: ["Web3", "DeFi", "NFT", "Blockchain", "Crypto"],
  authors: [{ name: "CryptoVault Team" }],
  openGraph: {
    title: "CryptoVault - Advanced Web3 Platform",
    description: "The ultimate Web3 platform for DeFi, NFTs, and blockchain analytics",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <WalletProvider>
            {children}
            <Toaster />
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
