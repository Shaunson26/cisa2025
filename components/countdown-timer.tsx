"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div className="flex flex-col items-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-lg bg-card shadow-sm border">
          <span className="text-4xl font-bold">{timeLeft.days}</span>
          <div className="absolute -bottom-3 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
            Days
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-lg bg-card shadow-sm border">
          <span className="text-4xl font-bold">{timeLeft.hours}</span>
          <div className="absolute -bottom-3 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
            Hours
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-lg bg-card shadow-sm border">
          <span className="text-4xl font-bold">{timeLeft.minutes}</span>
          <div className="absolute -bottom-3 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
            Minutes
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-lg bg-card shadow-sm border">
          <span className="text-4xl font-bold">{timeLeft.seconds}</span>
          <div className="absolute -bottom-3 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
            Seconds
          </div>
        </div>
      </div>
    </div>
  )
}

