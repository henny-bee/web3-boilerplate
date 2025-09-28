"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  {
    title: "Total Volume",
    value: "$2.4B",
    change: "+12.5%",
    icon: DollarSign,
    color: "text-green-500",
  },
  {
    title: "Active Users",
    value: "150K+",
    change: "+8.2%",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Markets",
    value: "500+",
    change: "+15.3%",
    icon: TrendingUp,
    color: "text-purple-500",
  },
  {
    title: "Uptime",
    value: "99.9%",
    change: "Stable",
    icon: Activity,
    color: "text-orange-500",
  },
]

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Trusted by Millions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the largest community of crypto traders and investors worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect hover:neon-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground mb-2">{stat.title}</p>
                  <p className={`text-sm font-medium ${stat.color}`}>{stat.change}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
