import { type CSSProperties, useEffect, useMemo } from 'react'
import type { SpinnerProps } from './types'

export function useSpinner({
  variant = 'default',
  foreground,
  background,
  size = 40,
  strokeWidth = 6,
  duration = 800
}: SpinnerProps) {
  const style = useMemo(() => {
    let defaultProps: CSSProperties = {
      width: size,
      aspectRatio: 1,
      borderRadius: '50%',
      animation: `spin-animation ${duration}ms infinite linear`
    }

    if (variant === 'default') {
      defaultProps = {
        ...defaultProps,
        background: foreground,
        padding: strokeWidth,
        WebkitMask: `conic-gradient(#0000 10%,#000),linear-gradient(#000 0 0) content-box`,
        WebkitMaskComposite: 'source-out',
        mask: `conic-gradient(#0000 10%,#000),linear-gradient(#000 0 0) content-box`,
        maskComposite: 'subtract'
      }
    } else if (variant === 'rounded') {
      defaultProps = {
        ...defaultProps,
        background: `radial-gradient(farthest-side,${foreground} 94%,#0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%,${foreground})`,
        WebkitMask: `radial-gradient(farthest-side, #0000 calc(100% - ${strokeWidth}px), #000 0)`
      }
    } else if (variant === 'quarter') {
      defaultProps = {
        ...defaultProps,
        borderWidth: `${strokeWidth}px`,
        borderStyle: 'solid',
        borderColor: background,
        borderRightColor: foreground
      }
    }

    return defaultProps
  }, [variant, foreground, background, duration, size, strokeWidth])

  useEffect(() => {
    const styleId = 'spinny-styles'

    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        @keyframes spin-animation {
          100% {
            transform: rotate(1turn);
          }
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  return { style }
}
