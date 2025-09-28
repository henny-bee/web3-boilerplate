"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "./theme-provider"
import { Palette, Sun, Moon, Zap, Gamepad2 } from "lucide-react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const themes = [
    { name: "light", label: "Light", icon: Sun },
    { name: "dark", label: "Dark", icon: Moon },
    { name: "retro", label: "Retro", icon: Zap },
    { name: "cyberpunk", label: "Cyberpunk", icon: Gamepad2 },
  ] as const

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="glass-effect bg-transparent">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-effect">
        {themes.map(({ name, label, icon: Icon }) => (
          <DropdownMenuItem key={name} onClick={() => setTheme(name)} className={theme === name ? "bg-primary/20" : ""}>
            <Icon className="mr-2 h-4 w-4" />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
