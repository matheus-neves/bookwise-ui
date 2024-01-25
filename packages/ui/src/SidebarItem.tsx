import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'

const sidebaritem = tv({
  slots: {
    containerClasses: [
      'flex items-center gap-3 cursor-pointer text-gray-400 hover:text-gray-100', 
      'before:mr-1 before:h-6 before:w-1 before:rounded-full'
    ],
    textClasses: '',
  },
  variants: {
    selected: {
      true: {
        containerClasses: 'before:bg-vertical text-gray-100 font-bold',
        textClasses: 'font-bold',
      },
      false: {
        containerClasses: 'hover:text-gray-100',
      }
    }
  },
  defaultVariants: {
    selected: false
  }
})

type SidebarItemProps = {
  icon: ReactNode
  text: string
  selected: boolean
} & ComponentProps<'div'> & VariantProps<typeof sidebaritem>

export function SidebarItem({ icon, text, selected, ...props }: SidebarItemProps) {

  const { containerClasses, textClasses } = sidebaritem();

  return (
    <div className={containerClasses({ selected })} {...props}>
      <div>{icon}</div>
      <span className={textClasses({ selected })}>{ text }</span>
    </div>
  )
}