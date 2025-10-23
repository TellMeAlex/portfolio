import { ReactNode } from 'react'

export type CardSize = 'small' | 'medium' | 'large' | 'xl'

export interface CardProps {
  children: ReactNode
  size?: CardSize
  className?: string
  loading?: boolean
  error?: boolean
  onClick?: () => void
  ariaLabel?: string
  id?: string
}
