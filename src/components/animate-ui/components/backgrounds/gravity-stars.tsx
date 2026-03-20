"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

type MouseGravity = "attract" | "repel"
type GlowAnimation = "instant" | "ease" | "spring"
type StarsInteractionType = "bounce" | "merge"

type GravityStarsProps = {
  starsCount?: number
  starsSize?: number
  starsOpacity?: number
  glowIntensity?: number
  glowAnimation?: GlowAnimation
  movementSpeed?: number
  mouseInfluence?: number
  mouseGravity?: MouseGravity
  gravityStrength?: number
  starsInteraction?: boolean
  starsInteractionType?: StarsInteractionType
} & React.ComponentProps<"div">

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  baseOpacity: number
  mass: number
  glowMultiplier?: number
  glowVelocity?: number
}

function GravityStarsBackground({
  starsCount = 75,
  starsSize = 2,
  starsOpacity = 0.75,
  glowIntensity = 15,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  glowAnimation = "ease",
  movementSpeed = 0.3,
  mouseInfluence = 100,
  mouseGravity = "attract",
  gravityStrength = 75,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  starsInteraction = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  starsInteractionType = "bounce",
  className,
  ...props
}: GravityStarsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animRef = useRef<number | null>(null)
  const starsRef = useRef<Particle[]>([])
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const [dpr, setDpr] = useState(1)
  const [canvasSize, setCanvasSize] = useState({
    width: 800,
    height: 600,
  })

  const readColor = useCallback(() => {
    const el = containerRef.current
    if (!el) return "#ffffff"
    const cs = getComputedStyle(el)
    return cs.color || "#ffffff"
  }, [])

  const initStars = useCallback(
    (w: number, h: number) => {
      starsRef.current = Array.from({ length: starsCount }).map(() => {
        const angle = Math.random() * Math.PI * 2
        const speed = movementSpeed * (0.5 + Math.random() * 0.5)
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * starsSize + 1,
          opacity: starsOpacity,
          baseOpacity: starsOpacity,
          mass: Math.random() * 0.5 + 0.5,
          glowMultiplier: 1,
          glowVelocity: 0,
        }
      })
    },
    [starsCount, movementSpeed, starsOpacity, starsSize],
  )

  const redistributeStars = useCallback((w: number, h: number) => {
    starsRef.current.forEach((p) => {
      p.x = Math.random() * w
      p.y = Math.random() * h
    })
  }, [])

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const rect = container.getBoundingClientRect()
    const nextDpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2))
    setDpr(nextDpr)
    canvas.width = Math.max(1, Math.floor(rect.width * nextDpr))
    canvas.height = Math.max(1, Math.floor(rect.height * nextDpr))
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`
    setCanvasSize({ width: rect.width, height: rect.height })
    if (starsRef.current.length === 0) {
      initStars(rect.width, rect.height)
    } else {
      redistributeStars(rect.width, rect.height)
    }
  }, [initStars, redistributeStars])

  const handlePointerMove = useCallback((e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    let clientX = 0
    let clientY = 0
    if ("touches" in e) {
      const t = e.touches[0]
      if (!t) return
      clientX = t.clientX
      clientY = t.clientY
    } else {
      clientX = (e as MouseEvent).clientX
      clientY = (e as MouseEvent).clientY
    }
    mouseRef.current = { x: clientX - rect.left, y: clientY - rect.top }
  }, [])

  const updateStars = useCallback(() => {
    const w = canvasSize.width
    const h = canvasSize.height
    const mouse = mouseRef.current
    for (let i = 0; i < starsRef.current.length; i++) {
      const p = starsRef.current[i]
      const dx = mouse.x - p.x
      const dy = mouse.y - p.y
      const dist = Math.hypot(dx, dy)
      if (dist < mouseInfluence && dist > 0) {
        const force = (mouseInfluence - dist) / mouseInfluence
        const nx = dx / dist
        const ny = dy / dist
        const g = force * (gravityStrength * 0.001)
        if (mouseGravity === "attract") {
          p.vx += nx * g
          p.vy += ny * g
        } else {
          p.vx -= nx * g
          p.vy -= ny * g
        }
        p.opacity = Math.min(1, p.baseOpacity + force * 0.4)
      } else {
        p.opacity = Math.max(p.baseOpacity * 0.3, p.opacity - 0.02)
      }
      p.x += p.vx
      p.y += p.vy
      p.vx *= 0.999
      p.vy *= 0.999
      if (p.x < 0) p.x = w
      if (p.x > w) p.x = 0
      if (p.y < 0) p.y = h
      if (p.y > h) p.y = 0
    }
  }, [
    canvasSize.width,
    canvasSize.height,
    mouseGravity,
    mouseInfluence,
    gravityStrength,
  ])

  const drawStars = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      const color = readColor()
      for (const p of starsRef.current) {
        ctx.save()
        ctx.shadowColor = color
        ctx.shadowBlur = glowIntensity * (p.glowMultiplier || 1) * 2
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(p.x * dpr, p.y * dpr, p.size * dpr, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    },
    [dpr, glowIntensity, readColor],
  )

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    updateStars()
    drawStars(ctx)
    // eslint-disable-next-line react-hooks/immutability
    animRef.current = requestAnimationFrame(animate)
  }, [updateStars, drawStars])

  useEffect(() => {
    resizeCanvas()
    const container = containerRef.current
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(resizeCanvas)
        : null
    if (container && ro) ro.observe(container)
    const onResize = () => resizeCanvas()
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
      if (ro && container) ro.disconnect()
    }
  }, [resizeCanvas])

  useEffect(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current)
    animRef.current = requestAnimationFrame(animate)
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      animRef.current = null
    }
  }, [animate])

  return (
    <div
      ref={containerRef}
      data-slot="gravity-stars-background"
      className={cn("relative size-full overflow-hidden", className)}
      onMouseMove={(e) => handlePointerMove(e.nativeEvent)}
      onTouchMove={(e) => handlePointerMove(e.nativeEvent)}
      {...props}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}

export { GravityStarsBackground, type GravityStarsProps }
