import type { HTMLAttributes, RefAttributes } from 'react'

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'rounded' | 'quarter'
  foreground: string
  background?: string
  size?: string | number
  strokeWidth?: number
  duration?: number
}

// Tipo para el componente con ref
export type SpinnerComponent = React.ForwardRefExoticComponent<
  SpinnerProps & RefAttributes<HTMLDivElement>
>
