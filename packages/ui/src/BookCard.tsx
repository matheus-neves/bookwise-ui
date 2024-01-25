import { ComponentProps, useState } from "react";
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const bookCardContainer = tv({
  base: 'flex w-full rounded-lg border-2',
  variants: {
    variant: {
      myBooks: 'max-w-[600px] gap-6 py-5 px-6 bg-gray-600 border-gray-600 hover:border-gray-500',
      trendingBooks: 'max-w-[308px] gap-5 py-4 px-5 bg-gray-700 border-gray-700 hover:border-gray-600'
    }
  },
  defaultVariants: {
    variant: 'myBooks'
  }
})

type BookCardProps = {
  children: React.ReactNode;
} & ComponentProps<'div'> & VariantProps<typeof bookCardContainer>

export function BookCardContainer({ children, className, variant, ...props }: BookCardProps) {
  return <div className={bookCardContainer({ variant, className })} {...props}>{children}</div>
}

type ImageWrapperProps = {
  children: React.ReactNode
  className?: string
} & ComponentProps<'div'>

export function BookCardImageWrapper({ children, ...props }: ImageWrapperProps) {
  return <div className="rounded-[4px] overflow-hidden" {...props}>{children}</div>
}

type ContentProps = {
  children: React.ReactNode;
} & ComponentProps<'div'>

export function BookCardContent({ children, ...props }: ContentProps) {
  return (
    <div className="flex flex-col flex-1 justify-between" {...props}>
      {children}
    </div>
  )
}

type HeadingProps = {
  title: string
  author: string
} & ComponentProps<'div'>

export function BookCardHeading({title, author, className, ...props}: HeadingProps) {
  return (
    <div {...props} className={twMerge("flex flex-col", className)}>
      <strong className="font-bold text-gray-100 line-clamp-1">{title}</strong>
      <span className="text-sm font-normal text-gray-400">{author}</span>
    </div>
  )
}

type DescriptionProps = {
  description: string
  wordLimit?: number
} & ComponentProps<'div'>

export function BookCardDescription({ description, wordLimit = 20 }: DescriptionProps) {
  const [showMore, setShowMore] = useState(false);
  const words = description.split(' ');
  const truncatedText = words.slice(0, wordLimit).join(' ');
  const hasMoreContent = words.length > wordLimit;
  const displayText = showMore ? description : `${truncatedText}${hasMoreContent ? '...' : ''}`;
  
  return (
    <p className="text-sm text-gray-300">
      {displayText}
      {hasMoreContent && !showMore && (
        <span 
          className="text-sm font-bold text-purple-100 ml-2 hover:underline cursor-pointer" 
          onClick={() => setShowMore(true)}>
          Show More
        </span>
      )}
    </p>
  );
}