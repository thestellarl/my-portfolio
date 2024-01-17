import Image, { StaticImageData } from "next/image";
import { Button } from "../Button";

interface IProjectCardProps {
  title: string;
  image: StaticImageData;
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
    <div className="flex w-full overflow-hidden md:max-h-60 bg-light2 relative rounded-lg flex-1 grow-[1] flex-col md:flex-row">
      <div className="flex-1">
        <Image
          className="transition-all w-full h-auto md:w-auto md:h-full object-cover"
          src={image}
          alt="recipro screenshot"
          sizes="100%"
          width={0}
          height={0}
          placeholder="blur"
        />
      </div>
      <a href={href} className="group text-color3 flex-1 grow-[2]">
        <div className="relative h-full">
          <div className="px-6 py-8">
            <h1 className="lg:text-3xl font-bold mb-4 text-xl lg:underline">
              {title}
            </h1>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
