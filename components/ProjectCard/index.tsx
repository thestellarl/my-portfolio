import Image from "next/image";
import { Button } from "../Button";

interface IProjectCardProps {
  title: string;
  image: string;
  href?: string;
  description?: string;
}

export const ProjectCard = ({
  title,
  image,
  href,
  description,
}: IProjectCardProps) => {
  return (
    <div className="flex w-full items-center project-card">
      <div className="h-full">
        <div className="relative w-[30vw] h-[30vw] max-w-[480px] max-h-[480px]">
          <Image
            className="transition-all w-full"
            src={image}
            alt="recipro screenshot"
            sizes="100vh"
            fill
            width={0}
            height={0}
            style={{
              objectFit: "cover",
              justifyContent: "start",
            }}
          />
        </div>
      </div>
      <a href={href} className="group text-light2">
        <div className="relative h-full">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold mb-4 group-hover:tracking-widest transition-all">
              {title}
            </h1>
            <p>{description}</p>
            {/* <Button href={href}>Visit</Button> */}
          </div>
        </div>
      </a>
    </div>
  );
};