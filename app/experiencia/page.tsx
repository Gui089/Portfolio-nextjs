'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Experience = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="absolute w-full mt-[100px] items-center flex justify-around">


            <div data-aos="fade-up" className="w-[30%] mt-[90px]">
                <h1 className="text-white text-2xl">Experiência de Trabalho</h1>
                <h1 className='ml-[100px] mt-[100px] font-semibold text-xl text-[#5de4a1]'>2024</h1>

                <div className='w-full mt-[239px] bg-slate-400 h-[1px]'></div>

                <h1 className='ml-[100px] mt-[100px] font-semibold text-xl text-[#5de4a1]'>2023 - 2024</h1>

            </div>

            <div  data-aos="fade-up" className='mt-[-20px]'>
                <h1 className='text-gray-500'>Minhas experiências coomo desenvolvedor:</h1>
                <h1 className='text-gray-200 mt-[95px]'>SinergiaRH - Desenvolvedor Full Stack - React/.NET</h1>

                <div className='w-[300px] flex items-center'>
                    <p className='text-gray-400'>
                        Sou responsável pela criação e manutenção 
                        de aplicações em React/Nextjs no front-end e .NET no back-end, trabalho com testes end to end, testes unitários,
                        com deploy na AWS via EC2, utilizando Docker para ambiente de desenvolvimento e banco de dados PostgreSQL e MySQL .
                        </p>
                </div>

                <div className='w-full mt-[50px] bg-slate-400 h-[1px]'></div>

                
            </div>

            
        </div>
    )
}

export default Experience;