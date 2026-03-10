import { hero } from '@/data/data'
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const BackgroundImageSlider: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const [incoming, setIncoming] = useState((0 + 1) % hero.length)
  const [isSliding, setIsSliding] = useState(false)
  const [paused, setPaused] = useState(false)

  const length = hero.length
  const intervalRef = useRef<number | null>(null)
  const slideTimeoutRef = useRef<number | null>(null)

  // Start/stop autoplay
  useEffect(() => {
    startAutoplay()
    return () => {
      stopAutoplay()
      clearSlideTimeout()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, paused])

  const startAutoplay = () => {
    stopAutoplay()
    if (paused) return
    // autoplay every 8s (change to 15000 for 15s)
    intervalRef.current = window.setInterval(() => {
      triggerNext()
    }, 8000)
  }

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const clearSlideTimeout = () => {
    if (slideTimeoutRef.current) {
      clearTimeout(slideTimeoutRef.current)
      slideTimeoutRef.current = null
    }
  }

  // Trigger next slide (left -> right slide-in)
  const triggerNext = () => {
    if (isSliding) return
    const nextIdx = (current + 1) % length
    setIncoming(nextIdx)
    setIsSliding(true)

    // after transition completes, commit the incoming slide as current
    clearSlideTimeout()
    slideTimeoutRef.current = window.setTimeout(() => {
      setCurrent(nextIdx)
      // set the next incoming to next after that
      setIncoming((nextIdx + 1) % length)
      setIsSliding(false)
    }, 1000) // match transition duration
  }

  // Trigger previous slide (we show previous sliding in from left as well)
  const triggerPrev = () => {
    if (isSliding) return
    const prevIdx = (current - 1 + length) % length
    setIncoming(prevIdx)
    setIsSliding(true)

    clearSlideTimeout()
    slideTimeoutRef.current = window.setTimeout(() => {
      setCurrent(prevIdx)
      setIncoming((prevIdx + 1) % length)
      setIsSliding(false)
    }, 1000)
  }

  if (!Array.isArray(hero) || length === 0) return null

  return (
    <div
      className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => {
        setPaused(true)
        stopAutoplay()
      }}
      onMouseLeave={() => {
        setPaused(false)
        startAutoplay()
      }}
    >
      {/* Current (visible behind) */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover z-0 transition-transform duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${hero[current].img})` }}
        aria-hidden
      />

      {/* Incoming: slides in from left (-translate-x-full -> translate-x-0) */}
      <div
        className={`absolute inset-0 w-full h-full bg-center bg-cover z-10 transform transition-transform duration-[1000ms] ease-in-out ${
          isSliding ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundImage: `url(${hero[incoming].img})` }}
        aria-hidden
      />

      {/* Dim overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-20" />

      {/* Content overlay — show content for the current slide */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16 lg:px-24 z-30">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
            {hero[current].title}
          </h2>
          <p className="text-white/90 mb-6">{hero[current].description}</p>
          <a
            href={hero[current].link ?? '#'}
            className="inline-block bg-white text-gray-900 px-5 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity duration-300 ease-in-out"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Controls */}
      <button
        aria-label="previous"
        onClick={triggerPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 bg-black/40 text-white p-2 rounded hover:bg-black/60 transition-all duration-300 ease-in-out"
      >
        <FaChevronLeft />
      </button>
      <button
        aria-label="next"
        onClick={triggerNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 bg-black/40 text-white p-2 rounded hover:bg-black/60 transition-all duration-300 ease-in-out"
      >
        <FaChevronRight />
      </button>

      {/* Dots + counter */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex items-center gap-4">
        <div className="text-white/90 text-sm">
          {current + 1} / {length}
        </div>
        <div className="flex gap-2">
          {hero.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (idx === current || isSliding) return
                // jump to a specific slide by sliding it in
                setIncoming(idx)
                setIsSliding(true)
                clearSlideTimeout()
                slideTimeoutRef.current = window.setTimeout(() => {
                  setCurrent(idx)
                  setIncoming((idx + 1) % length)
                  setIsSliding(false)
                }, 1000)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                idx === current ? 'bg-white scale-110' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BackgroundImageSlider
