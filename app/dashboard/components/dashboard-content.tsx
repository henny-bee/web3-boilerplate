"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Wallet,
  PieChart,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Bitcoin,
  EclipseIcon as Ethereum,
  DollarSign,
} from "lucide-react"
import { motion } from "framer-motion"

const portfolioData = [
  { name: "Bitcoin", symbol: "BTC", amount: "2.45", value: "$89,234", change: "+5.2%", positive: true },
  { name: "Ethereum", symbol: "ETH", amount: "15.8", value: "$34,567", change: "-2.1%", positive: false },
  { name: "Solana", symbol: "SOL", amount: "450", value: "$12,890", change: "+8.7%", positive: true },
  { name: "Cardano", symbol: "ADA", amount: "2,340", value: "$5,678", change: "+1.4%", positive: true },
]

const recentTransactions = [
  { type: "Buy", asset: "BTC", amount: "0.5", value: "$18,234", time: "2 hours ago" },
  { type: "Sell", asset: "ETH", amount: "2.1", value: "$4,567", time: "5 hours ago" },
  { type: "Stake", asset: "SOL", amount: "100", value: "$2,890", time: "1 day ago" },
]

export function DashboardContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your portfolio overview.</p>
          </div>
          <div className="flex gap-4 mt-4 lg:mt-0">
            <Button className="neon-glow">
              <DollarSign className="mr-2 h-4 w-4" />
              Deposit
            </Button>
            <Button variant="outline" className="glass-effect bg-transparent">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Withdraw
            </Button>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-effect">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$142,369</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +4.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">24h Change</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">+$2,847</div>
              <p className="text-xs text-muted-foreground">+2.04% increase</p>
            </CardContent>
          </Card>

          <Card className="glass-effect">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Across 8 different assets</p>
            </CardContent>
          </Card>

          <Card className="glass-effect">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">P&L Today</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">+$1,234</div>
              <p className="text-xs text-muted-foreground">+0.87% profit</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Portfolio Holdings */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle>Portfolio Holdings</CardTitle>
              <CardDescription>Your current cryptocurrency positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioData.map((asset, index) => (
                  <motion.div
                    key={asset.symbol}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        {asset.symbol === "BTC" && <Bitcoin className="h-5 w-5" />}
                        {asset.symbol === "ETH" && <Ethereum className="h-5 w-5" />}
                        {asset.symbol !== "BTC" && asset.symbol !== "ETH" && (
                          <span className="text-xs font-bold">{asset.symbol}</span>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{asset.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {asset.amount} {asset.symbol}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{asset.value}</p>
                      <div className="flex items-center">
                        {asset.positive ? (
                          <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                        )}
                        <span className={`text-sm ${asset.positive ? "text-green-500" : "text-red-500"}`}>
                          {asset.change}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest trading activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((tx, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center space-x-4">
                      <Badge variant={tx.type === "Buy" ? "default" : tx.type === "Sell" ? "destructive" : "secondary"}>
                        {tx.type}
                      </Badge>
                      <div>
                        <p className="font-medium">
                          {tx.amount} {tx.asset}
                        </p>
                        <p className="text-sm text-muted-foreground">{tx.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{tx.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                View All Transactions
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart Placeholder */}
        <Card className="glass-effect mt-8">
          <CardHeader>
            <CardTitle>Portfolio Performance</CardTitle>
            <CardDescription>Your portfolio value over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Chart component would go here</p>
                <p className="text-sm text-muted-foreground">Integration with charting library like Recharts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
