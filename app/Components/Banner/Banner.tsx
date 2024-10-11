'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';

export const Banner = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up">
            <Image 
                width={700} 
                height={700} 
                src="/img/Banner2.png" 
                alt="logo dev" 
            />
        </div>
    )
}