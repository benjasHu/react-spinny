import { forwardRef, type HTMLAttributes } from 'react'
import { useSpinner } from './hooks'

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'rounded' | 'quarter'
  foreground: string
  background?: string
  size?: number
  strokeWidth?: number
  duration?: number
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ variant, foreground, background, size, strokeWidth, duration, ...restProps }, ref) => {
    const { style } = useSpinner({ variant, foreground, background, size, strokeWidth, duration })

    return (
      <div
        ref={ref}
        style={style}
        {...restProps}
      />
    )
  }
)

Spinner.displayName = 'Spinner'
