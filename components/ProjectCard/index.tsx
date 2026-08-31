import Image from "next/image";
import type { Project } from "@/data/projects";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="inline-block h-3.5 w-3.5 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    />
  </svg>
);

interface ProjectCardProps extends Project {
  /** Put the image on the right instead of the left (desktop only). */
  reverse?: boolean;
}

export const ProjectCard = ({
  title,
  image,
  imageAlt,
  imagePosition,
  context,
  period,
  role,
  summary,
  highlights,
  links,
  technologies,
  reverse = false,
}: ProjectCardProps) => {
  const meta = [context, role, period].filter(Boolean);

  return (
    <article
      className={`flex w-full flex-col overflow-hidden rounded-lg bg-light2 text-left text-color3 md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image fills whatever height the text column needs — no fixed crop.
          Cards without an image are text-only at full width. */}
      {image && (
        <div className="relative aspect-[16/9] w-full md:aspect-auto md:w-5/12 md:min-h-[280px] md:shrink-0">
          <Image
            className="object-cover"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(min-width: 1280px) 520px, (min-width: 768px) 42vw, 100vw"
            placeholder="blur"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col px-6 py-6 md:px-8 md:py-7">
        <p className="exp-meta flex flex-wrap gap-x-3 text-lg leading-none text-color2">
          {meta.map((item, i) => (
            <span key={item}>
              {i > 0 && (
                <span className="mr-3 text-color3/40" aria-hidden="true">
                  ·
                </span>
              )}
              {item}
            </span>
          ))}
        </p>

        <h3 className="mt-3 text-xl font-bold leading-tight sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed">
          {summary}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="mt-3 max-w-prose space-y-1.5" aria-label="Highlights">
            {highlights.map((line) => (
              <li
                key={line}
                className="grid grid-cols-[1.25rem_1fr] text-sm leading-relaxed text-color3/90"
              >
                <span
                  className="exp-plus select-none text-lg leading-[1.4] text-color2"
                  aria-hidden="true"
                >
                  +
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Push links + tags to the bottom so cards in a row line up */}
        <div className="mt-auto pt-5">
          {links && links.length > 0 && (
            <ul className="flex flex-wrap gap-2" aria-label="Links">
              {links.map((link) => {
                const external = /^https?:\/\//.test(link.href);
                return (
                  <li key={link.href}>
                    <a
                      className="group/link exp-meta inline-flex items-center gap-1.5 rounded-full border border-color2 bg-color2 px-3 py-1 text-base leading-tight text-light1 transition-colors hover:bg-color3 hover:border-color3 focus-visible:bg-color3 focus-visible:border-color3 focus-visible:outline-none motion-reduce:transition-none"
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      aria-label={`${link.label}: ${title}${
                        external ? " (opens in a new tab)" : ""
                      }`}
                    >
                      {link.label}
                      <ArrowIcon />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}

          {technologies && technologies.length > 0 && (
            <ul
              className={`flex flex-wrap gap-1.5 ${links?.length ? "mt-3" : ""}`}
              aria-label="Technologies used"
            >
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="exp-meta rounded-full border border-color3/20 px-2.5 py-0.5 text-base leading-tight"
                >
                  {technology}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};
