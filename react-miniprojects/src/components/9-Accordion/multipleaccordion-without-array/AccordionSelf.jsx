import React, { useState } from 'react'
import QnAComponent from './QnAComponent'

function AccordionSelf() {

    return (
        <div className="body flex justify-center items-center h-screen">
            <div className="innerbody p-5 border-xl w-1/2 bg-gray-200 rounded-2xl">
                <h1 className='text-3xl font-bold flex m-4'>Frequently Asked Questions</h1>

                <QnAComponent question="Q1" answer="ans1" />
                <QnAComponent question="Q2" answer="ans2" />
                <QnAComponent question="Q3" answer="ans3" />
                
            </div>
        </div>
    )
}

export default AccordionSelf