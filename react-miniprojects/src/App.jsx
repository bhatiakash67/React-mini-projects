import React from 'react'
import Counter from './pages/1counter/Counter'
import Profiles from './pages/2profilecards/Profiles'
import SingleAccordion from './pages/3accordion/SingleAccordion.jsx'
import MultipleAccordion from './pages/3accordion/MultipleAccordion.jsx'
import TempControlApp from './pages/4temp-control-app/TempControl.jsx'
import StarRating from './pages/5star-rating/StarRating.jsx'
import ColourChanger from './pages/6random-colour-generator/ColourChanger.jsx'
import ImageCarousel from './pages/7image-carousel/ImageCarousel.jsx'
import QuoteGenerator from './pages/8quote-generator/QuoteGenerator.jsx'
import AccordionSelf from './pages/9-Accordion/multipleaccordion-without-array/AccordionSelf.jsx'
import ToggleAccordionWithArray from './pages/9-Accordion/accordion-with-array/ToggleAccordionWithArray.jsx'
import ToggleAccordionWithAPI from './pages/9-Accordion/accordion-with-apidata/ToggleAccordionWithAPI.jsx'
import LoadMoreData from './pages/10-load-more-data/LoadMoreData.jsx'

function App () {
  return (
    <>
    <Counter />
    
    {/* <Profiles /> */}
    
    {/* <SingleAccordion /> */}
    
    {/* <MultipleAccordion />  */}
    
    {/* <TempControlApp /> */}
    
    {/* <StarRating noOfStars= '5' /> */}
    
    {/* <ColourChanger /> */}
    
    {/* <ImageCarousel /> */}

    {/* <QuoteGenerator url="https://api.quotable.io/quotes/random" limit={25} /> */}

    {/* <AccordionSelf /> */}

    {/* <ToggleAccordionWithArray /> */}

    {/* <ToggleAccordionWithAPI /> */}

    {/* <LoadMoreData /> */}
    </>
  )
}
export default App