import { ComponentProps, ReactNode } from "react"

import { twMerge } from 'tailwind-merge'

type TextInputContainerProps = {
  children: ReactNode
} & ComponentProps<'div'>

export function TextInputContainer({children, className, ...props}: TextInputContainerProps) {
  return (
    <div className={twMerge("flex items-center gap-2 border border-gray-500 rounded-[4px] has-[:focus]:border-green-100", className)} {...props}>
      {children}
    </div>
  )
}

type TextInputProps = ComponentProps<'input'>

export function TextInput({ className, ...props }: TextInputProps) {
  return <input className={twMerge("py-4 pl-5 pr-5 w-full bg-gray-800 rounded-[4px] placeholder:text-gray-400 text-gray-200 text-sm caret-green-200 peer outline-none", className)} {...props} />    
}

type TextInputIconWrapperProps = {
  children: ReactNode
} & ComponentProps<'div'>

export function TextInputIconWrapper({ className, children, ...props }: TextInputIconWrapperProps) {
  return <div className={twMerge("pr-5 text-gray-500 peer-[:focus]:text-green-100", className)} {...props}>{children}</div>
}