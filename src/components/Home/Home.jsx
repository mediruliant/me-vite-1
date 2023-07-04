import React from 'react'
import transition from '../Transition/Transition'
import Nav from '../Nav/Nav'
import './Home.css'

const Home = () => {
  return (
    <>
    <Nav />
    <div className="home h-[300vh] flex items-center justify-center">
        <h1 className='text-4xl font-bold'>Home</h1>
    </div>
    </>
  )
}

export default transition(Home)