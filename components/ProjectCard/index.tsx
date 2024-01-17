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
    <div className="flex w-full overflow-hidden bg-light2 max-h-60 relative rounded-lg">
      <div className="w-[30vw] max-w-[480px] shrink-0">
        <Image
          className="transition-all h-full"
          src={image}
          alt="recipro screenshot"
          sizes="100%"
          width={0}
          height={0}
          style={{
            width: "auto",
            objectFit: "cover",
            height: "100%",
          }}
          placeholder="blur"
        />
      </div>
      <a href={href} className="group text-color3">
        <div className="relative h-full">
          <div className="px-6 py-8">
            <h1 className="lg:text-3xl font-bold mb-4 text-xl lg:underline">
              {title}
            </h1>
            <p className="hidden md:block">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
