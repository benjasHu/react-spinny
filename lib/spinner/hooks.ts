import { type CSSProperties, useEffect, useMemo } from 'react'
import type { SpinnerProps } from './spinner'

export function useSpinner({
  variant = 'default',
  background = 'hsl(0 0% 0% / 0.5)',
  foreground = 'hsl(0 0% 0%)',
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
        mask: `conic-gradient(#0000 10%,#000),linear-gradient(#000 0 0) content-box`,
        maskComposite: 'subtract'
      }
    } else if (variant === 'rounded') {
      defaultProps = {
        ...defaultProps,
        background: `radial-gradient(farthest-side,${foreground} 96%,#0000) top/${strokeWidth}px ${strokeWidth}px no-repeat, conic-gradient(#0000 30%,${foreground})`,
        mask: `radial-gradient(farthest-side, rgba(0, 0, 0, 0) calc(100% - ${strokeWidth}px), #000 calc(100% - ${strokeWidth * 0.95}px))`
      }
    } else if (variant === 'quarter') {
      defaultProps = {
        ...defaultProps,
        borderWidth: `${strokeWidth}px`,
        borderStyle: 'solid',
        borderTopColor: background,
        borderLeftColor: background,
        borderBottomColor: background,
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
