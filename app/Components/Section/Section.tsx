'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const Section = () => {

    const itemsSkills = [
        {id:1,description:'Utilizo Nextjs e React em projeto font-end, sempre prezando pela qualidade e limpeza do codigo .', title: 'Front-end', imageUrl: '/img/programming.png'},
        {id:2,description:'Trabalho principalmente com .NET e Nodejs, jutamente com os bancos de dados Postgres, MySQL e MongoDB', title: 'Back-end', imageUrl: '/img/terminal.png'},
        {id:3,description:'Na parte da infra, uso AWS e Docker, tanto para ambiente de desenvolvimento quanto para deploy .', title: 'Infra', imageUrl: '/img/infra.png'},
    ];

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="w-full flex h-[800px] bg-[#25262a] justify-around items-center">
            
            <div className='mt-[70px] ml-9'>
                <ul className='flex flex-col gap-4'>
                    {itemsSkills.map(item => 
                        <li 
                            data-aos="fade-up"
                            className='bg-[#2d2e32] p-5 w-[400px] h-[200px] shadow-md'
                            key={item.id}>
                                <div className='flex justify-between'>
                                    <p 
                                        className='text-[#5de4a1] text-xl '>
                                            {item.title}
                                    </p>

                                    <img  
                                        src={item.imageUrl} alt='logo code' width={25} height={5}/>
                                </div>
                                
                                <div className='w-[80%] mt-4'>
                                    <p className='text-gray-400'>{item.description}</p>
                                </div>
                            </li>
                    )}
                </ul>
            </div>

            <div data-aos="fade-up" className='w-[350px]' >
                <h1 className='text-gray-400'>Introdução</h1>

                <div data-aos="fade-right" className='mt-5'>
                    <h1 className='text-2xl text-white'>Olá!, me chamo Guilherme Coutinho Silva</h1>
                </div>

                <div data-aos="fade-right" className='mt-4'>
                    <h1 className='text-gray-400 text-xl'>Conheça minha história de 2 anos e meio como desenvolvedor!</h1>
                </div>

                <div data-aos="fade-right" className='mt-4'>
                    <h1 className='text-gray-400'>Comecei meus estudos como desenvolvedor em 2020, autulamente curso análise e desenvolvimento de sistemas na UNOPAR, no Terceiro semestre, atuei como freelancer, e em 2022 á 2023 atuei na Fuvir, e atualemente trabalho na SinergiaRH . </h1>
                </div>
            </div>
            
        </div>
    )
}