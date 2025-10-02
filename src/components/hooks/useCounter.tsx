import { useState, useEffect, useRef } from 'react'

interface UseCounterOptions {
  end: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
}

const useCounter = ({ 
  end, 
  duration = 2000, 
  delay = 0, 
  suffix = '', 
  prefix = '' 
}: UseCounterOptions) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          
          setTimeout(() => {
            const increment = end / (duration / 16) // 60fps
            let current = 0
            
            const timer = setInterval(() => {
              current += increment
              if (current >= end) {
                setCount(end)
                clearInterval(timer)
              } else {
                setCount(Math.ceil(current))
              }
            }, 16)

            return () => clearInterval(timer)
          }, delay)
        }
      },
      { threshold: 0.3 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [end, duration, delay, hasStarted])

  const displayValue = `${prefix}${count}${suffix}`

  return { count, displayValue, elementRef }
}

export default useCounter