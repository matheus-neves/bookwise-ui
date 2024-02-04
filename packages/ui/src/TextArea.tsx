import { ComponentProps, ReactNode } from "react"

import { twMerge } from 'tailwind-merge'

type TextAreaContainerProps = {
  children: ReactNode
} & ComponentProps<'div'>

export function TextAreaContainer({children, className, ...props}: TextAreaContainerProps) {
  return (
    <div className={twMerge("flex flex-col relative border bg-gray-800 border-gray-500 rounded-[4px] has-[:focus]:border-green-100 ", className)} {...props}>
      {children}
    </div>
  )
}

type TextAreaProps = {
  counter: boolean
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
} & ComponentProps<'textarea'>

export function TextArea({ className, counter, rows = 6, maxLength = 300, value, onChange, ...props }: TextAreaProps) {
  return (
    <>
      <textarea 
        className={twMerge("pt-4 pl-5 pr-5 w-full bg-transparent rounded-[4px] placeholder:text-gray-400 text-gray-200 text-sm caret-green-200 peer outline-none resize-none", className)} 
        rows={rows} 
        maxLength={maxLength} 
        value={value} 
        onChange={onChange}
        {...props} 
      /> 
      <span className="w-full text-right h-5 pr-2 pb-1 text-xs bg-inherit rounded-[4px] text-gray-400">{counter && `${value?.toString().length}/${maxLength}`}</span>
    </>
  )   
}