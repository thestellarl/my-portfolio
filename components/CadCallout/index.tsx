import dynamic from "next/dynamic";
import type { CadCallout as CadCalloutData } from "@/data/cad";

const TinyViewport = dynamic(() => import("@/components/TinyViewport"));

/** Full-width banner linking to the CAD gallery. The whole card is the link. */
export const CadCallout = ({
  modelSrc,
  eyebrow,
  title,
  blurb,
  cta,
}: CadCalloutData) => (
  <a
    href={cta.href}
    className="group/cta flex w-full flex-col overflow-hidden rounded-lg bg-color3 text-left text-light1 shadow-[0_12px_32px_rgba(52,78,65,0.22)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(52,78,65,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color2 focus-visible:ring-offset-2 focus-visible:ring-offset-light1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:flex-row"
    aria-label={`${title}: ${cta.label}`}
  >
    {/* Auto-rotating model. Decorative here: no orbit controls, so a drag
        never swallows the click. */}
    <div
      className="pointer-events-none relative aspect-[16/9] w-full md:aspect-auto md:min-h-[300px] md:w-5/12 md:shrink-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0">
        <TinyViewport fill modelSrc={modelSrc} background="#344E41" />
      </div>
      <div className="absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-r from-transparent to-color3 md:block" />
    </div>

    <div className="flex flex-1 flex-col justify-center px-6 py-8 md:px-10 md:py-10">
      <p className="exp-meta text-lg leading-none text-color1">{eyebrow}</p>
      <h3 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        {title}
      </h3>
      <p className="mt-3 max-w-prose text-base leading-relaxed text-light1/80">
        {blurb}
      </p>
      <span className="exp-meta mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-light1 px-5 py-2 text-lg leading-tight text-color3 transition-colors group-hover/cta:bg-color1 motion-reduce:transition-none">
        {cta.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 transition-transform group-hover/cta:translate-x-1 motion-reduce:transition-none"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  </a>
);
