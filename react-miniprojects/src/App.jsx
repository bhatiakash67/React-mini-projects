import React from 'react'
import Profiles from './components/2profilecards/Profiles'
import Counter from './components/1counter/Counter'
import SingleAccordion from './components/3accordion/SingleAccordion.jsx'
import MultipleAccordion from './components/3accordion/MultipleAccordion.jsx'
import TempControlApp from './components/4temp-control-app/TempControl.jsx'
import StarRating from './components/5-star-rating/StarRating.jsx'

function App () {
  return (
    <>
    {/* <Counter /> */}
    {/* <Profiles /> */}
    {/* <SingleAccordion /> */}
    {/* <MultipleAccordion />  */}
    {/* <TempControlApp /> */}
    <StarRating noOfStars= '5' />
    </>
  )
}

export default App