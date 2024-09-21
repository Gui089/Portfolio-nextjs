'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { CardProject } from './Components/CardProject';


const Projects = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const projects = [
        {id:1, title:'Viajou-Anotou',imageUrl: '/img/viajouAnotou.png', linkGit:'https://github.com/Gui089/Viajou-Anotou?tab=readme-ov-file',link:'https://viajou-anotou321.netlify.app/'}
    ];

    return (
        <div className="w-full h-[800px] absolute mt-[85px] flex justify-around">
            
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
                    />)}
                    </ul>
            </div>

            <div>
                <h1>Outros projetos</h1>
            </div>

        </div>
    )
} 

export default Projects;