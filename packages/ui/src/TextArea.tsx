import { ComponentProps, ReactNode } from "react"

import { twMerge } from 'tailwind-merge'

type TextAreaContainerProps = {
  children: ReactNode
} & ComponentProps<'div'>

export function TextAreaContainer({children, className, ...props}: TextAreaContainerProps) {
  return (
    <div className={twMerge("flex flex-col items-end relative border border-gray-500 rounded-[4px] has-[:focus]:border-green-100", className)} {...props}>
      {children}
    </div>
  )
}

type TextAreaProps = {
  counter: boolean
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
} & ComponentProps<'textarea'>

export function TextArea({ className, counter, rows = 4, maxLength = 300, value, onChange, ...props }: TextAreaProps) {
  return (
    <>
      <textarea 
        className={twMerge("pt-4 pl-5 pr-5 w-full bg-gray-800 rounded-[4px] placeholder:text-gray-400 text-gray-200 text-sm caret-green-200 peer outline-none resize-none", className)} 
        rows={rows} 
        maxLength={maxLength} 
        value={value} 
        onChange={onChange}
        {...props} 
      /> 
      <span className="pr-1 pb-1 text-xs text-gray-400 h-5">{counter && `${value?.toString().length}/${maxLength}`}</span>
    </>
  )   
}