"use client"

import { useTheme } from "./theme-provider"

export function AnimatedBackground() {
  const { theme } = useTheme()

  if (theme === "cyberpunk") {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="cyber-grid absolute inset-0 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>
    )
  }

  if (theme === "retro") {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-yellow-100 to-pink-200" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-orange-400/40 rounded-full blur-2xl animate-float" />
          <div
            className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-pink-400/40 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-indigo-500/20 dark:bg-indigo-400/20 rounded-full blur-2xl animate-float" />
    </div>
  )
}
