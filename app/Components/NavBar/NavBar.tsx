'use client';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {Squash as Hamburger} from 'hamburger-react';
import Link from "next/link";


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('/');
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    const navMenu = [
        {id:1,title: 'Home', link:'/'},
        {id:2, title:'Projetos', link: '/projetos'},
        {id:3, title:'Experiência', link: '/experiencia'},
        {id:4, title:'Contato', link: '/contato'}
    ];

    const socialMenu = [
        {id:1, title: 'GitHub', link: 'https://github.com/Gui089?tab=overview&from=2024-10-01&to=2024-10-05', imageUrl: '/img/social.png'},
        {id:2, title: 'LinkedIn', link: 'https://www.linkedin.com/in/guilherme-coutinho-silva-95216a240/', imageUrl: '/img/linkedin (2).png'},
    ];

    useEffect(() => {
        setActiveLink(pathname);
    }, [pathname]);

    return (
        <>
           <div 
            style={{background: 'var(--background)'}} 
            className=" w-full sm:flex hidden fixed p-7 items-center justify-between top-0">

            <h1 className="text-xl font-semibold text-white">Guilherme 
                <span className="ml-2 text-xl font-normal text-gray-400">Coutinho</span>
            </h1>

            <div>
                <ul className="text-white flex gap-7 font-semibold">{navMenu.map(item => 
                    <Link href={item.link} key={item.id}>
                    <li 
                    className={`cursor-pointer gap-2 flex ${activeLink === item.link ? 'text-[#5de4a1]' : ''}`}
                    >
                        {activeLink === item.link ? <p>{"<"}</p> : ''}
                            {item.title}
                        {activeLink === item.link ? <p>{">"}</p> : ''}
                    </li>
                    </Link>
                )}</ul>
            </div>

            <div>
                <ul className="text-gray-400 font-thin flex gap-7">
                    {socialMenu.map(item => 
                    <Link href={item.link} target="__blank">
                    <li className="flex cursor-pointer items-center" key={item.id}>
                        <img width={25} height={25} src={item.imageUrl} alt="Logo social media" />
                        {item.title}
                    </li>
                    </Link>
                )}</ul>
            </div>
        </div>

        {/** menu mobile */}
        <div 
            style={{background:'var(--background)'}} 
            className="w-full p-5 sm:hidden bg-[#2d2e32] flex flex-col fixed items-center top-0">
            <div className="flex items-center gap-[100px] ">
                <h1 className="text-xl font-semibold text-white">Guilherme Coutinho</h1>
                <Hamburger color="var(--primaryGreen)" toggled={isOpen} toggle={setIsOpen}  />
            </div>
        
        {isOpen && <ul className="text-white flex flex-col gap-4 font-semibold">
            {navMenu.map(item =>
                <Link href={item.link} key={item.id}>
                <li 
                    className={`cursor-pointer gap-2 flex ${activeLink === item.link ? 'text-[#5de4a1]' : ''}`}
                    >
                    {activeLink === item.link ? <p>{"<"}</p> : ''}
                        {item.title}
                    {activeLink === item.link ? <p>{">"}</p> : ''}
                </li>
                </Link>
            )}
        </ul>}
        

    </div>
    </>
    )
}