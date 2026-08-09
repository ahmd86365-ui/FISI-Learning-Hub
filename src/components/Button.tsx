import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-glow dark:bg-brand-500 dark:hover:bg-brand-400',
  secondary:
    'bg-ink-100 text-ink-800 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-100 dark:hover:bg-ink-700',
  ghost:
    'bg-transparent text-ink-600 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white',
}

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3.5 text-sm',
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
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
