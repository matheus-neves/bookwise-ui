import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from 'tailwind-variants'

const iconbutton = tv({
  base: 'rounded p-2',
  variants: {
    color: {
      primary: 'bg-gray-600 hover:bg-gray-500 transition-colors',
      transparent: 'bg-transparent hover:brightness-125 transition-all'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
}) 

export type IconButtonProps = {
  children: ReactNode
} & ComponentProps<'button'> & VariantProps<typeof iconbutton>

export function IconButton({ children, className, color }: IconButtonProps) {
  return <button className={iconbutton({ color, className })}>{children}</button>
}