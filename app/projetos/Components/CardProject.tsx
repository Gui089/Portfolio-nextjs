import Link from "next/link";

interface CardProjectProps {
    title: string;
    imageUrl: string;
    linkGit:string;
}

export const CardProject = ({title, imageUrl, linkGit}: CardProjectProps) => {
    return (
        <div className="flex w-[300px] h-[300px] mt-[20px]">

            <h1 className="absolute text-white font-semibold text-xl mt-[250px] ml-[70px]">
                {title}
            </h1>

            <img 
                className="rounded-md opacity-45"
                src={imageUrl}  
                alt="imagem de projeto" 
                width={300} 
                height={300}
            />

            <Link target="__blank" className=" opacity-90 absolute mt-[250px] ml-[20px]" href={linkGit}>
                <img width={30} height={30} src="/img/social.png" alt="logo github" />
            </Link>

        </div>
    )
}