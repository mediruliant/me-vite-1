import React from 'react'
import transition from '../Transition/Transition';
import Nav from '../Nav/Nav';

const About = () => {
  return (
    <>
    <Nav />
    <div className="w-screen h-screen flex items-center justify-center">
        <h1 className='text-4xl font-bold'>About</h1>
    </div>
    </>
  )
}

export default transition(About);