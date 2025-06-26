import { forwardRef } from 'react'
import { useSpinner } from './hooks'
import type { SpinnerProps } from './types'

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(
  { variant, foreground, background, size, strokeWidth, duration, ...restProps },
  ref
) {
  const { style } = useSpinner({ variant, foreground, background, size, strokeWidth, duration })

  return (
    <div
      ref={ref}
      style={style}
      {...restProps}
    />
  )
})

Spinner.displayName = 'Spinner'
