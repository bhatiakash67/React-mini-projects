import React, { useState } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

function StarRating() {

  const [starCount, setStarCount] = useState(5)

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (

    <div className="star-rating">
      <div className='star-content'>
        <div className="button-change">

          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            {Array.from({ length: starCount }, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={isHovered ? solidStar : regularStar}
                size='2x' 
                color={isHovered ? '#D5AB55' : undefined } />

            ))}
          </div>

          <div className="buttons">
          </div>
        </div>

      </div>

    </div>

  )
}

export default StarRating