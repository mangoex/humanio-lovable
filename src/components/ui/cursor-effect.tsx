import { useEffect, useRef, useState, useCallback } from 'react'

export function CursorEffect() {
  const hLineRef = useRef<HTMLDivElement>(null)
  const vLineRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const [visible, setVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const ringPos = useRef({ x: 0, y: 0 })
  const targetPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t

  const animateRing = useCallback(() => {
    ringPos.current.x = lerp(ringPos.current.x, targetPos.current.x, 0.12)
    ringPos.current.y = lerp(ringPos.current.y, targetPos.current.y, 0.12)
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
    }
    rafRef.current = requestAnimationFrame(animateRing)
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      if (!visible) setVisible(true)
      if (hLineRef.current) hLineRef.current.style.transform = `translateY(${y}px)`
      if (vLineRef.current) vLineRef.current.style.transform = `translateX(${x}px)`
      if (dotRef.current) dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      targetPos.current = { x, y }
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setIsHovering(!!t.closest('button, a, [data-cursor="hover"], input, textarea'))
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onOver)
    rafRef.current = requestAnimationFrame(animateRing)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafRef.current)
    }
  }, [visible, animateRing])

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      {/* Crosshair overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s' }}
      >
        <div
          ref={hLineRef}
          className="absolute left-0 top-0 w-full h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.15) 15%, rgba(6,182,212,0.35) 50%, rgba(6,182,212,0.15) 85%, transparent 100%)',
            boxShadow: '0 0 8px rgba(6,182,212,0.3)',
            willChange: 'transform',
          }}
        />
        <div
          ref={vLineRef}
          className="absolute left-0 top-0 h-full w-[1px]"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.15) 15%, rgba(6,182,212,0.35) 50%, rgba(6,182,212,0.15) 85%, transparent 100%)',
            boxShadow: '0 0 8px rgba(6,182,212,0.3)',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10001] rounded-full"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s, width 0.2s, height 0.2s, background 0.2s, box-shadow 0.2s',
          width: isHovering ? '10px' : '5px',
          height: isHovering ? '10px' : '5px',
          background: isHovering ? 'rgba(6,182,212,1)' : 'rgba(255,255,255,0.9)',
          boxShadow: isHovering ? '0 0 12px rgba(6,182,212,0.9)' : '0 0 4px rgba(255,255,255,0.6)',
          willChange: 'transform',
        }}
      />

      {/* Cursor ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] rounded-full"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s, width 0.3s, height 0.3s, border-color 0.3s, box-shadow 0.3s',
          width: isHovering ? '44px' : '28px',
          height: isHovering ? '44px' : '28px',
          border: isHovering ? '1.5px solid rgba(6,182,212,0.8)' : '1px solid rgba(255,255,255,0.25)',
          boxShadow: isHovering ? '0 0 16px rgba(6,182,212,0.4), inset 0 0 8px rgba(6,182,212,0.1)' : 'none',
          background: isHovering ? 'rgba(6,182,212,0.05)' : 'transparent',
          willChange: 'transform',
        }}
      />
    </>
  )
}
