import { ComponentProps, useEffect, useState } from "react";
import { Star, StarHalf } from '@phosphor-icons/react';
import config from "@ui-bookwise/tailwind-config/tailwind.config"

type RatingProps = {
  value?: number
  totalStars?: number
  starsSize?: number
  starsColor?: string
  readonly?: boolean
} & ComponentProps<'div'>;

export function Rating({
  totalStars = 5, 
  starsSize = 28, 
  value = 0, 
  starsColor = config.theme.extend.colors.purple[100], 
  readonly = false, 
  ...props}: RatingProps
  ) {

  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleHover = (value: number, percentage: number) => {
    const newValue = value - 0.5 + (percentage >= 0.5 ? 0.5 : percentage);
    setHoveredRating(newValue);
  };

  const handleLeave = () => setHoveredRating(0)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, value: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;

    if((rating === value - 0.5 && percentage <= 0.5) || (rating === value && percentage > 0.5)) {
      setRating(0)
      handleLeave()
      return false;
    }
    setRating(percentage <= 0.5 ? value - 0.5 : value);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, value: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    handleHover(value, percentage);
  }

  useEffect(() => {
    if(value) setRating(value)
  }, [value])

  return (
    <div {...props} className="flex">
      {Array.from({length: totalStars}, (_, index) => {
        const value = index + 1

        const isHalfFilled = value - 0.5 <= (hoveredRating || rating) && (hoveredRating || rating) < value
        const isFullFilled = (hoveredRating || rating) >= value;

        return (
          <button
            key={value}
            onClick={(e) => handleClick(e, value)}
            onMouseMove={(e) => handleMouseMove(e, value)}
            onMouseLeave={handleLeave}
            disabled={readonly}
            className="px-[2px]"
          >
            {
              isHalfFilled 
              ? <StarHalf size={starsSize} weight="fill" color={starsColor} /> 
              : <Star size={starsSize} weight={isFullFilled ? 'fill' : 'regular'} color={starsColor} />
            }
          </button>
        )
      })}
    </div>
  );
}
