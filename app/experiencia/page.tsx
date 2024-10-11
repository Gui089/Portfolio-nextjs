'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Experience = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="w-full mt-[-150px] flex flex-col lg:flex-row items-center justify-around mr-[-20px] lg:mr-0">
            
            <div data-aos="fade-up" className="w-full lg:w-[30%] mb-10 lg:mb-0">
                <h1 className="text-white text-2xl text-center lg:text-left">Experiência de Trabalho</h1>
                <h1 data-aos="fade-up" className='ml-[0px] lg:ml-[100px] mt-[50px] lg:mt-[100px] font-semibold text-xl text-[#5de4a1]'>2024</h1>
                <div data-aos="fade-up" className='w-full mt-[50px] lg:mt-[239px] bg-slate-400 h-[1px]'></div>
                <h1 data-aos="fade-up" className='ml-[0px] lg:ml-[100px] mt-[50px] lg:mt-[100px] font-semibold text-xl text-[#5de4a1]'>2023 - 2024</h1>
            </div>

            
            <div data-aos="fade-up" className='w-full lg:w-auto mt-[50px] lg:mt-[290px] px-5 lg:px-0'>
                <h1 data-aos="fade-up" className='text-gray-500 mt-[20px] lg:mt-[90px]'>Minhas experiências como desenvolvedor:</h1>
                <h1 data-aos="fade-up" className='text-gray-200 mt-[40px] lg:mt-[95px]'>SinergiaRH - Desenvolvedor Full Stack - React/.NET</h1>
                <div data-aos="fade-up" className='w-full lg:w-[300px] flex items-center'>
                    <p data-aos="fade-up" className='text-gray-400'>
                        Sou responsável pela criação e manutenção de aplicações em React/Nextjs no front-end e .NET no back-end, trabalho com testes end to end, testes unitários, deploy na AWS via EC2, utilizando Docker para ambiente de desenvolvimento e banco de dados PostgreSQL e MySQL.
                    </p>
                </div>
                <div data-aos="fade-up" className='w-full mt-[30px] bg-slate-400 h-[1px]'></div>

                <h1 data-aos="fade-up" className='text-gray-200 mt-[40px] lg:mt-[95px]'>Fuvir - Desenvolvedor Full Stack - React/NodeJs</h1>
                <div data-aos="fade-up" className='w-full lg:w-[300px] flex items-center'>
                    <p data-aos="fade-up" className='text-gray-400'>
                        Fui responsável pela criação e manutenção de aplicações em React/Nextjs no front-end e NodeJs no back-end, trabalho com testes end to end, testes unitários, deploy na AWS via EC2, utilizando Docker para ambiente de desenvolvimento e banco de dados PostgreSQL e MongoDB.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;
