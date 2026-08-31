import TinyViewport from "@/components/TinyViewport";
import { cadModels } from "@/data/cad";
import "../App.css";

export const metadata = {
  title: "CAD & 3D Printing - Lucas Stella",
  description: "CAD models designed and 3D printed by Lucas Stella.",
};

const Page = () => (
  <main className="flex w-full flex-col items-center py-16 text-color3 md:py-24">
    <div className="w-full max-w-screen-xl px-5 md:px-12 lg:px-24">
      <a
        className="group/link exp-meta inline-flex items-center gap-2 rounded-full border border-color3/20 px-3 py-1 text-base leading-tight text-color3 transition-colors hover:border-color2 hover:text-color2 focus-visible:border-color2 focus-visible:text-color2 focus-visible:outline-none motion-reduce:transition-none"
        href="/"
        aria-label="Back to home"
      >
        <span
          className="transition-transform group-hover/link:-translate-x-1 motion-reduce:transition-none"
          aria-hidden="true"
        >
          ←
        </span>
        cd ~
      </a>

      <h1
        className="text-color2 mb-2 mt-8 text-xl leading-tight"
        style={{ fontFamily: "var(--font-terminal)" }}
      >
        <span className="inline-block">lucas@lstella.dev</span>
        <span className="inline-block">:~/cad$ ls</span>
      </h1>
      <p className="mb-8 max-w-prose leading-normal text-color3/80">
        Functional parts designed in CAD and printed at home. Every model below
        is live — drag to spin it.
      </p>

      <ol className="flex flex-col gap-y-8">
        {cadModels.map(({ src, title, description, tags }, index) => (
          <li key={src}>
            <article
              className={`flex w-full flex-col overflow-hidden rounded-lg bg-light2 text-left md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Touch scrolling wins over orbit on phones; drag-to-spin from sm up. */}
              <div className="pointer-events-none relative aspect-[16/9] w-full sm:pointer-events-auto md:aspect-auto md:min-h-[300px] md:w-5/12 md:shrink-0">
                <div className="absolute inset-0">
                  <TinyViewport fill modelSrc={src} background="#E0DDCF" />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center px-6 py-6 md:px-8 md:py-7">
                <p className="exp-meta text-lg leading-none text-color2">
                  models/{src}
                </p>
                <h2 className="mt-3 text-xl font-bold leading-tight sm:text-2xl">
                  {title}
                </h2>
                {description && (
                  <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed">
                    {description}
                  </p>
                )}
                {tags && tags.length > 0 && (
                  <ul
                    className="mt-5 flex flex-wrap gap-1.5"
                    aria-label="Materials and components"
                  >
                    {tags.map((tag) => (
                      <li
                        key={tag}
                        className="exp-meta rounded-full border border-color3/20 px-2.5 py-0.5 text-base leading-tight"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  </main>
);

export default Page;
