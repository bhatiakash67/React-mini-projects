import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from './pages/0homepage/HomePage.jsx'
import Counter from './pages/1counter/Counter.jsx'
import Profiles from './pages/2profilecards/Profiles.jsx'
import MultipleAccordion from './pages/3accordion/MultipleAccordion.jsx'
import SingleAccordion from './pages/3accordion/SingleAccordion.jsx'
import TempControlApp from './pages/4temp-control-app/TempControl.jsx'
import StarRating from './pages/5star-rating/StarRating.jsx'
import ColourChanger from './pages/6random-colour-generator/ColourChanger.jsx'
import ImageCarousel from './pages/7image-carousel/ImageCarousel.jsx'
import QuoteGenerator from './pages/8quote-generator/QuoteGenerator.jsx'
import ToggleAccordionWithArray from './pages/9-Accordion/accordion-with-array/ToggleAccordionWithArray.jsx'
import ToggleAccordionWithAPI from './pages/9-Accordion/accordion-with-apidata/ToggleAccordionWithAPI.jsx'
import AccordionSelf from './pages/9-Accordion/multipleaccordion-without-array/AccordionSelf.jsx'
import LoadMoreData from './pages/10-load-more-data/LoadMoreData.jsx'

const router = createBrowserRouter(
        createRoutesFromElements(
                <Route path='/' element={<Layout />}>
                        <Route path='' element={<HomePage />}></Route>
                        <Route path='counter' element={<Counter />}></Route>
                        <Route path='profiles' element={<Profiles />}></Route>
                        <Route path='multiple-accordion' element={<MultipleAccordion />}></Route>
                        <Route path='single-accordion' element={<SingleAccordion />}></Route>
                        <Route path='tempcontrol-app' element={<TempControlApp />}></Route>
                        <Route path='star-rating' element={<StarRating />}></Route>
                        <Route path='colour-changer' element={<ColourChanger />}></Route>
                        <Route path='image-carousel' element={<ImageCarousel />}></Route>
                        <Route path='quote-generator' element={<QuoteGenerator url="https://api.quotable.io/quotes/random" limit={25} />}></Route>
                        <Route path='accordion-with-array' element={<ToggleAccordionWithArray />}></Route>
                        <Route path='accordion-with-api' element={<ToggleAccordionWithAPI />}></Route>
                        <Route path='multiple-accordion-with-components' element={<AccordionSelf />}></Route>
                        <Route path='load-more-data' element={<LoadMoreData />}></Route>
                </Route>
        )
)

ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
                <RouterProvider router={router} />
        </React.StrictMode>,
)