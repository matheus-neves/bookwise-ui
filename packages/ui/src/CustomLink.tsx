import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from 'tailwind-variants'

const customlink = tv({
  slots: {
    container: 'flex items-center max-w-max gap-2 py-1 px-2 rounded-[4px] text-sm font-bold transition-colors cursor-pointer',
    prevIconContainer: 'w-4 h-4 *:w-full *:h-full',
    nextIconContainer: 'w-4 h-4 *:w-full *:h-full'
  },
  variants: {
    size: {
      small: {},
      medium: {
        container: 'gap-3 text-base',
        prevIconContainer: 'w-5 h-5 ',
        nextIconContainer: 'w-5 h-5'
      }
    },
    color: {
      white: {
        container: 'text-gray-200 hover:bg-gray-800'
      },
      purple: {
        container: 'text-purple-100 hover:bg-gray-700'
      },
    },
  },
  defaultVariants: {
    size: 'small',
    color: 'white',
  }
})

type CustomLinkProps = {
  children: ReactNode
  prevIcon?: ReactNode
  nextIcon?: ReactNode
} & ComponentProps<'div'> & VariantProps<typeof customlink>

export function CustomLink({ children, size, color, className, prevIcon, nextIcon,  ...props }: CustomLinkProps) {
  const {container, prevIconContainer, nextIconContainer} = customlink();
  return (
    <div className={container({ size, color })} {...props}>
      {prevIcon && <div className={prevIconContainer({ size, color })}>{prevIcon}</div>}
      {children}
      {nextIcon && <div className={nextIconContainer({ size, color })}>{nextIcon}</div>}
    </div>
  )
}