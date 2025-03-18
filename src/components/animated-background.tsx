"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  speed: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Initialize stars
    function initStars() {
      const stars: Star[] = []
      const starCount = Math.floor((canvas.width * canvas.height) / 1000)

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random(),
          speed: Math.random() * 0.05 + 0.01,
        })
      }

      starsRef.current = stars
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        // Calculate gradient effect - more opacity at top, less at bottom
        const gradientFactor = 1 - (star.y / canvas.height) * 0.8

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * gradientFactor})`
        ctx.fill()

        // Move stars
        star.y += star.speed

        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

