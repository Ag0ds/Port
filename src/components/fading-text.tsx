"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface FadingTextProps {
  text: string
  interval?: number
  className?: string
}

export function FadingText({ text, interval = 2000, className }: FadingTextProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible((prev) => !prev)
    }, interval)

    return () => clearInterval(timer)
  }, [interval])

  return (
    <div className={cn("transition-opacity duration-1000", visible ? "opacity-100" : "opacity-0", className)}>
      {text}
    </div>
  )
}

