import React from 'react'
import { Button } from '../ui/button'

const CallToActionComponent = () => {
    return (
        <section className='bg-gradient-to-br from-primary to-primary/65 p-4'>
            <div className="container mx-auto flex flex-col items-center justify-center py-10">
                <h1 className='text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-gray-50 to-gray-400  text-center font-sans font-bold'>Ships Your Ideas to Production</h1>
                <p className='text-center mt-3 text-gray-200 font-light' >
                    Go from ideas to production with <span>intellinex soft</span>, <br />
                    the software builder for creative pros.
                </p>
                <div className='mt-6' >
                    <Button className='text-primary rounded-full text-xs bg-white hover:bg-slate-200 transition-all duration-150 ease-in-out cursor-pointer' >
                        Get started
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CallToActionComponent