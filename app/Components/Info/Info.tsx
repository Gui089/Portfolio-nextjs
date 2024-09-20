'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const Info = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div 
            data-aos="fade-up" 
            className="flex ml-[50px] flex-col mb-[400px]"
            
            >
            <div className="p-2 rounded-md font-semibold" style={{backgroundColor:"var(--primaryGreen)"}}>
                <h1>Full Stack Developer</h1>
            </div>
            
            <div>

            </div>

        </div>
    )
}