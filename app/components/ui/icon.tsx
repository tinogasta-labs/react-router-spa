import type { IconName } from '@/icon-name'
import type { SVGProps } from 'react'
import { cn } from '~/utils/misc'
import spriteHref from './icons/sprite.svg'

export { spriteHref }

const sizeClassName = {
  font: 'size-[1em]',
  xs: 'size-3',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-7',
} as const

type Size = keyof typeof sizeClassName

export function Icon({
  name,
  title,
  size = 'sm',
  className,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName
  size?: Size
  title?: string
}) {
  return (
    <svg
      {...props}
      className={cn(sizeClassName[size], 'inline self-center', className)}
    >
      <title>{title ?? name}</title>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  )
}
