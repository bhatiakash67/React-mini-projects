import React, { useState } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

function StarRating({ noOfStars }) {

  const [selectedStarIndex, setSelectedStarIndex] = useState(null)
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseOver = (currentIndex) => {
    setIsHovered(currentIndex);

  };

  const handleMouseOut = () => {
    setIsHovered(null);
  };

  const handleStarClick = (currentIndex) => {
    setSelectedStarIndex(currentIndex)
  }

  return (

    <div className="star-rating">
      <div className='star-content'>
        <div className="button-change">

          <div
            onMouseOut={handleMouseOut}>

            {Array.from({ length: noOfStars }, (_, index) => (
              
              <FontAwesomeIcon
                key={index}
                icon= { (isHovered !== null && index <= isHovered) ||
                  (selectedStarIndex !== null && index <= selectedStarIndex)
                  ? solidStar
                  : regularStar
                }
                size='5x'
                className={
                  (isHovered !== null && index <= isHovered) ||
                    (selectedStarIndex !== null && index <= selectedStarIndex)
                    ? 'buttoncolor'
                    : ''
                }
                onMouseOver={() => handleMouseOver(index)}
                onClick={() => { handleStarClick(index) }} />

            ))}
          </div>

        </div>

      </div>

    </div>

  )
}

export default StarRating