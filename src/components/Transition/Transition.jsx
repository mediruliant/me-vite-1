import React from 'react'
import { easeIn, easeInOut, easeOut, motion } from 'framer-motion'

const transition = (Comp) => {
    return () => (
        <>
        <Comp />
        <motion.div
            className='w-full h-full fixed top-0 left-0 z-[99] bg-slate-600 origin-bottom' 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]  }}
        />
        <motion.div
            className='w-full h-full fixed top-0 left-0 z-[99] bg-slate-600 origin-top' 
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        </>
    )
}

export default transition