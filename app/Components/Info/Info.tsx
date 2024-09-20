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
            className="flex mt-[60px] ml-[50px] flex-col mb-[50px] gap-[30px]"

            >
            <div className="p-2 w-[200px] rounded-md font-semibold" style={{backgroundColor:"var(--primaryGreen)"}}>
                <h1>Full Stack Developer</h1>
            </div>
            
            <div data-aos="fade-up"  className='flex flex-col gap-5 w-[400px]'>
                <h1 className='text-3xl text-white'>
                    Bem vindo(a) ao meu portfólio .
                </h1>

                <p className='text-gray-400 font-light w-[300px] sm:w-full'>
                    Atualmente atuo como desenvolvedor full-stack júnio na SinergiaRH, atuo na criação e manunteção de aplicações com Nextjs/React, NodeJs e .Net
                </p>
            </div>

            <div data-aos="fade-up">
                <u className='text-[#5de4a1] font-semibold text-xl cursor-pointer'>
                    Contate-me!
                </u>
            </div>

        </div>
    )
}