import React from 'react'

const NotFoundComponent = () => {
    return (
        <div className='h-auto flex flex-col items-center justify-center mb-10' >
            <h2 className='bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/50 font-bold text-9xl'>404</h2>
            <p className='max-w-xl text-center mb-5 mt-5 text-gray-600 dark:text-gray-300' >The page you are looking for doesn&apos;t exist or has been moved. Please go back to the homepage.</p>
        </div>
    )
}

export default NotFoundComponent