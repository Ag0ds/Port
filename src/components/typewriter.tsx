"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayAfterWord?: number
  delayBeforeDelete?: number
  className?: string
  cursorClassName?: string
}

export function Typewriter({
  words = ["Hello World", "Type and Delete", "Like a Typewriter"],
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterWord = 1000,
  delayBeforeDelete = 500,
  className,
  cursorClassName,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const currentWord = words[wordIndex]

  const typeText = useCallback(() => {
    if (displayedText.length < currentWord.length) {
      setDisplayedText(currentWord.substring(0, displayedText.length + 1))
    } else {
      setIsPaused(true)
      setTimeout(() => {
        setIsPaused(false)
        setIsTyping(false)
      }, delayBeforeDelete)
    }
  }, [displayedText, currentWord, delayBeforeDelete])

  const deleteText = useCallback(() => {
    if (displayedText.length > 0) {
      setDisplayedText(displayedText.substring(0, displayedText.length - 1))
    } else {
      setIsTyping(true)
      setWordIndex((prev) => (prev + 1) % words.length)
    }
  }, [displayedText, words.length])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isPaused) {
      if (isTyping) {
        timeout = setTimeout(typeText, typingSpeed)
      } else {
        timeout = setTimeout(deleteText, deletingSpeed)
      }
    } else {
      timeout = setTimeout(() => setIsPaused(false), delayAfterWord)
    }

    return () => clearTimeout(timeout)
  }, [isTyping, isPaused, typeText, deleteText, typingSpeed, deletingSpeed, delayAfterWord])

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span>{displayedText}</span>
      <span className={cn("ml-1 inline-block w-2 h-5 bg-current animate-blink", cursorClassName)}></span>
    </div>
  )
}

