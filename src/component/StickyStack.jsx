import React, { useEffect, useRef, useState } from 'react'
import './ScrollStack.css'

export const StickyStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
)

const StickyStack = ({ children, className = '', onStackComplete }) => {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = Math.max(1, rect.height - vh)
      const sc = Math.min(Math.max(-rect.top, 0), total)
      const p = sc / total
      setProgress(p)
      if (onStackComplete) onStackComplete(p > 0.85)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const onResize = () => setVw(window.innerWidth)
    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [onStackComplete])

  const count = React.Children.count(children)

  return (
    <div ref={containerRef} className={`sticky-stack-scroller ${className}`.trim()}>
      <div className="sticky-stack-inner">
        {React.Children.map(children, (child, i) => {
          const activeIndex = Math.min(count - 1, Math.max(0, Math.floor(progress * count)))
          const scale = 1
          const isMobile = vw <= 480
          const isTablet = vw > 480 && vw <= 900
          const base = isMobile ? 120 : isTablet ? 140 : 160
          const topOffset = `calc(-2vh + ${base}px)`
          return (
            <div className="sticky-card-wrapper">
              <div
                className="sticky-card-inner"
                style={{
                  transform: `scale(${scale})`,
                  top: topOffset,
                  zIndex: i === activeIndex ? 100 : 1,
                  opacity: i === activeIndex ? 1 : 0,
                  pointerEvents: i === activeIndex ? 'auto' : 'none',
                  transition: 'opacity 200ms ease-out'
                }}
              >
                {child}
              </div>
            </div>
          )
        })}
        <div className="scroll-stack-end" />
      </div>
    </div>
  )
}

export default StickyStack
