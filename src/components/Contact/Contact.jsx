import React from 'react'
import transition from '../Transition/Transition';
import Nav from '../Nav/Nav';


const Contact = () => {
  return (
    <>
    <Nav />
    <div className="w-screen h-screen flex items-center justify-center">
        <h1 className='text-4xl font-bold'>Contact</h1>
    </div>
    </>
  )
}

export default transition(Contact);