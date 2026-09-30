import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-soft hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-400',
  secondary:
    'border border-ink-200 bg-white text-ink-700 shadow-soft hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100 dark:hover:border-brand-500 dark:hover:bg-brand-500/10',
  ghost:
    'bg-transparent text-ink-600 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white',
}

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-sm',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  children?: ReactNode
}

interface ButtonAsButton extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  to?: undefined
}

interface ButtonAsLink extends CommonProps {
  to: string
  href?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsLink

export const Button = forwardRef<HTMLButtonElement, ButtonAsButton>(function Button(
  { variant = 'primary', size = 'md', icon, iconPosition = 'left', className = '', children, ...props },
  ref,
) {
  return (
    <button ref={ref} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {icon && iconPosition === 'left' && <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>}
    </button>
  )
})

export function ButtonLink({
  to,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  children,
}: ButtonAsLink) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {icon && iconPosition === 'left' && <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>}
    </Link>
  )
}

export type { ButtonProps }
