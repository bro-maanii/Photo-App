"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

import { Button } from "@/components/ui/button"


export function ModeToggle() {
  const { setTheme } = useTheme()
  const[count,setcount]=useState(false)
  function handleClick() {
    if (count===false) {
      setTheme("dark")
      setcount(true)
    }else{
      setTheme("light")
      setcount(false)
    }
  }

  return (
        <Button variant="outline" size="icon" onClick={handleClick} className="rounded-full border-black dark:border-white dark:hover:bg-blue-600">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only"></span>
        </Button>
  )
}
