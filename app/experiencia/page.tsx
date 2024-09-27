'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Experience = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="absolute w-full mt-[130px] items-center flex justify-around">


            <div data-aos="fade-up" className="w-[30%]">
                <h1 className="text-white text-2xl">Experiência de Trabalho</h1>
                <h1 className='ml-[100px] mt-[100px]'>2024</h1>
            </div>

            <div  data-aos="fade-up" className='mt-[-65px]'>
                <h1 className='text-gray-500'>Minhas experiências coomo desenvolvedor:</h1>
            </div>
        </div>
    )
}

export default Experience;