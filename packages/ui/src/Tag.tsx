import { ComponentProps } from "react";

import { tv, VariantProps } from 'tailwind-variants'

const tag = tv({
  base: 'rounded-full px-4 py-1 border hover:bg-purple-200 hover:border-purple-100 hover:text-gray-100',
  variants: {
    selected: {
      true: 'text-gray-100 border-purple-200 bg-purple-200',
      false: 'text-purple-100 border-purple-100'
    }
  },
  defaultVariants: {
    selected: false
  }
})

type TagProps = {
  label: string
  isSelected: boolean
  onSelect: () => void
} & ComponentProps<'button'> & VariantProps<typeof tag>

export function Tag({ label, isSelected, onSelect, ...props }: TagProps) {
  return <button type="button" className={tag({selected: isSelected})} onClick={onSelect} {...props}>{label}</button>
}