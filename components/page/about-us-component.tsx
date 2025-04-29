"use client"
import React from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import AboutUsSection from '../section/about-us-section'
import MissionSection from '../section/mission-section'
import VisionSection from '../section/vision-section'
import WhatWeDoSection from '../section/what-we-do-section'
import WhyChooseUs from '../section/why-choose-us';
import MeetOutTeamSection from '../section/meet-our-team-section';
import { Team } from '@/types/team';

const AboutUsComponent = ({ teams }: { teams: Team[] }) => {
    React.useEffect(() => {
        AOS.init()
    }, []);

    return (
        <div className='mb-10 flex flex-col gap-10'>
            <AboutUsSection />
            <section className='container mx-auto' data-aos="fade-up">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <MissionSection />
                    <VisionSection />
                </div>
            </section>
            <WhatWeDoSection />
            <WhyChooseUs />
            <MeetOutTeamSection teams={teams} />
        </div>
    )
}

export default AboutUsComponent