'use client';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('/');

    const pathname = usePathname();

    const navMenu = [
        {id:1,title: 'Home', link:'/'},
        {id:2, title:'Projetos', link: '/projetos'},
        {id:3, title:'Experiência', link: '/experiencia'},
        {id:4, title:'Contato', link: '/contato'}
    ];

    const socialMenu = [
        {id:1, title: 'GitHub', link: '', imageUrl: '/img/social.png'},
        {id:2, title: 'LinkedIn', link: '', imageUrl: '/img/linkedin (2).png'},
    ];

    useEffect(() => {
        setActiveLink(pathname);
    }, [pathname]);

    return (
        <div className="flex p-7 items-center justify-between">

            <h1 className="text-xl font-semibold text-white">Guilherme 
                <span className="ml-2 text-xl font-normal text-gray-400">Coutinho</span>
            </h1>

            <div>
                <ul className="text-white flex gap-7 font-semibold">{navMenu.map(item => 
                    <li 
                    className={`cursor-pointer gap-2 flex ${activeLink === item.link ? 'text-[#5de4a1]' : ''}`}
                    key={item.id}>
                        {activeLink === item.link ? <p>{"<"}</p> : ''}
                            {item.title}
                        {activeLink === item.link ? <p>{">"}</p> : ''}
                    </li>
                )}</ul>
            </div>

            <div>
                <ul className="text-gray-400 font-thin flex gap-7">{socialMenu.map(item => 
                    <li className="flex cursor-pointer items-center" key={item.id}>
                        <img width={25} height={25} src={item.imageUrl} alt="Logo social media" />
                        {item.title}
                    </li>
                )}</ul>
            </div>

        </div>
    )
}