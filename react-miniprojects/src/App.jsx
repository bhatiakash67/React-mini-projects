import React from 'react'
import Profiles from './components/2profilecards/Profiles'
import Counter from './components/1counter/Counter'
import SingleAccordion from './components/3accordion/SingleAccordion.jsx'
import MultipleAccordion from './components/3accordion/MultipleAccordion.jsx'
import TempControlApp from './components/4temp-control-app/TempControl.jsx'
import StarRating from './components/5star-rating/StarRating.jsx'
import ColourChanger from './components/6random-colour-generator/ColourChanger.jsx'
import ImageCarousel from './components/7image-carousel/ImageCarousel.jsx'
import QuoteGenerator from './components/8quote-generator/QuoteGenerator.jsx'
import AccordionSelf from './components/9-Accordion/multipleaccordion-without-array/AccordionSelf.jsx'
import ToggleAccordionWithArray from './components/9-Accordion/accordion-with-array/ToggleAccordionWithArray.jsx'

function App () {
  return (
    <>
    {/* <Counter /> */}
    
    {/* <Profiles /> */}
    
    {/* <SingleAccordion /> */}
    
    {/* <MultipleAccordion />  */}
    
    {/* <TempControlApp /> */}
    
    {/* <StarRating noOfStars= '5' /> */}
    
    {/* <ColourChanger /> */}
    
    {/* <ImageCarousel /> */}

    {/* <QuoteGenerator url="https://api.quotable.io/quotes/random" limit={25} /> */}

    {/* <AccordionSelf /> */}

    <ToggleAccordionWithArray />
    </>
  )
}

export default App