import type { AnchorHTMLAttributes, FC } from 'react'
import clsx from 'clsx'
import type { Breakpoint } from '@/consts'

type ButtonSize = 'sm' | 'lg'

type ResponsiveButtonSize = ButtonSize | Partial<Record<Breakpoint, ButtonSize>>

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
  size?: ResponsiveButtonSize
}

const getSizeClasses = (size: ResponsiveButtonSize) => {
  if (typeof size === 'string') return `button--${size}`

  return Object.entries(size).map(([breakpoint, value]) =>
    breakpoint === 'base' ? `button--${value}` : `button--${breakpoint}-${value}`
  )
}

const ButtonLink: FC<ButtonLinkProps> = ({ variant = 'primary', size = 'sm', className, ...props }) => (
  <a className={clsx('button', `button--${variant}`, getSizeClasses(size), className)} {...props} />
)

export default ButtonLink
