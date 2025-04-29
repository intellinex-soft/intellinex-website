import React from 'react'

const MissionSection = () => {
    return (
        <section className='flex flex-col items-start justify-center gap-4 bg-gray-50 dark:bg-primary/5 p-6 rounded-lg'>
            <p className='text-2xl font-semibold'>Our Mission</p>
            <p className='text-sm text-justify'>
                To empower small and medium businesses with enterprise-grade IT solutions that are secure, efficient, and tailored to their needs — bridging the gap between business goals and technology potential.
            </p>
        </section>
    )
}

export default MissionSection