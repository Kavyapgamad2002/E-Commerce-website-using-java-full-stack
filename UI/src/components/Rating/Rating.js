import React, { useMemo } from 'react';
import SvgStarIcon from '../common/SvgStarIcon';
import { SvgEmptyStar } from '../common/SvgEmptyStar';

const Rating = ({ rating }) => {
  const ratingNumber = useMemo(() => {
    const parsedRating = Number(rating);
    return isNaN(parsedRating) ? 0 : Math.max(0, Math.min(5, Math.floor(parsedRating))); // Clamp rating between 0 and 5
  }, [rating]);

  return (
    <div className="flex items-center">
      {[...Array(ratingNumber)].map((_, index) => (
        <SvgStarIcon key={index} />
      ))}
      {[...Array(5 - ratingNumber)].map((_, index) => (
        <SvgEmptyStar key={index} />
      ))}
      <p className="px-2 text-gray-500">{rating}</p>
    </div>
  );
};

export default Rating;
