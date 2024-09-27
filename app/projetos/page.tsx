'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { CardProject } from './Components/CardProject';
import Link from 'next/link';


const Projects = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const projects = [
        {id:1, title:'Viajou-Anotou',imageUrl: '/img/viajouAnotou.png', linkGit:'https://github.com/Gui089/Viajou-Anotou?tab=readme-ov-file',link:'https://viajou-anotou321.netlify.app/'}
    ];

    const otherProjects = [
        {id:1, title:'Me Avalia', imageUrl:'/img/meAvalia.png', linkGit: 'https://github.com/Gui089/Me-Avalia', link: 'https://euphonious-basbousa-219ad7.netlify.app/'},
        {id:2, title:'Quiz dos Games', imageUrl:'/img/QuizDosGames.png', linkGit: 'https://github.com/Gui089/QuizGames', link: 'https://amazing-custard-bce79d.netlify.app/'},
        {id:3, title:'Dev Freela(Em Produção)', imageUrl:'https://tse3.mm.bing.net/th?id=OIP.JKp6A46ihy5-X_NlcIdvagHaDt&pid=Api&P=0&h=180', linkGit: 'https://github.com/Gui089/Dev-Freela', link: 'https://github.com/Gui089/Dev-Freela'}
    ];

    return (
        <div className="flex-col sm:flex-row items-center sm:items-start w-full h-[800px]  mt-[85px] flex justify-around">
            
            <div data-aos="fade-up" className="w-[350px]">
                <h1 className="text-white text-3xl mt-[100px]">Meus Projetos</h1>
                <p className='text-gray-500 mt-[40px]'>Aqui estão meus projetos pessoais feitos em Next/React, NodeJs e .NET</p>

                <ul data-aos="fade-up">
                    {projects.map(item => 
                    <CardProject 
                        key={item.id} 
                        title={item.title} 
                        linkGit={item.linkGit} 
                        imageUrl={item.imageUrl} 
                        link={item.link}
                    />)}
                    </ul>
                
                <Link data-aos="fade-up" href="https://github.com/Gui089" target='__blank'>
                    <u className='text-[#5de4a1] text-xl font-semibold cursor-pointer'>Mais Projetos</u>
                </Link>
            </div>

            <div className='mt-[100px]'>
            <ul>
                    {otherProjects.map(item => 
                        <li data-aos="fade-up"  key={item.id}>
                            <CardProject
                                title={item.title} 
                                linkGit={item.linkGit} 
                                imageUrl={item.imageUrl} 
                                link={item.link}
                            />
                        </li>
                        )}
                    </ul>
            </div>

        </div>
    )
} 

export default Projects;