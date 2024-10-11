import Link from "next/link";
import Image from "next/image";

interface CardProjectProps {
    title: string;
    imageUrl: string;
    linkGit:string;
    link:string;
}

export const CardProject = ({title, imageUrl, linkGit, link}: CardProjectProps) => {
    return (
        <div className="flex w-[300px] h-[300px] mt-[20px] relative">

            <h1 className="absolute text-white font-semibold text-xl mt-[220px] ml-[70px] z-10">
                {title}
            </h1>

            <Link href={link} target="__blank">
                <Image 
                    className="rounded-md opacity-45 cursor-pointer"
                    src={imageUrl}  
                    alt="imagem de projeto" 
                    width={300} 
                    height={300}
                />
            </Link>

            <Link target="__blank" className="opacity-90 absolute mt-[220px] ml-[20px] z-10" href={linkGit}>
                <Image width={30} height={30} src="/img/social.png" alt="logo github" />
            </Link>

        </div>
    )
}
