import Image from "next/image";
import { Button } from "../Button";

interface IProjectCardProps {
  title: string;
  image: string;
  href: string;
}

export const ProjectCard = ({ title, image, href }: IProjectCardProps) => {
  return (
    <div className="flex justify-center items-center group rounded w-[30vw] h-[30vw] bg-white relative hover:scale-105 transition-transform content-center overflow-hidden">
      <Image
        className="group-hover:blur-md group-hover:opacity-80 transition-all w-full"
        src={image}
        alt="recipro screenshot"
        sizes="100vh"
        fill
        width={0}
        height={0}
        style={{ objectFit: "cover", justifyContent: "start" }}
      />
      <div className="flex flex-col z-10 h-full py-6 px-8 justify-between opacity-0 group-hover:opacity-100 transition-opacity">
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <Button href={href}>Visit</Button>
      </div>
    </div>
  );
};
