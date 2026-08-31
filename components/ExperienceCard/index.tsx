import React from "react";
import type { Experience } from "@/data/experience";

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none ${className}`}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const ExperienceCard = ({
  position,
  company,
  companyUrl,
  location,
  startDate,
  endDate,
  summary,
  highlights,
  projects,
  technologies,
}: Experience) => {
  const wrapRef = React.useRef<HTMLDivElement>(null);

  // JS fallback for the scroll-scrubbed 3D roll: browsers without CSS
  // scroll-driven animations (Firefox, older Safari) never run the
  // `card-roll` keyframes, so reproduce the same curve from scroll events.
  React.useEffect(() => {
    if (CSS.supports("animation-timeline: view()")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wrap = wrapRef.current;
    const scroller = wrap?.closest(".App");
    if (!wrap || !scroller) return;

    const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
    let raf = 0;

    const update = () => {
      if (window.innerWidth < 1024) {
        wrap.style.opacity = "";
        wrap.style.transform = "";
        return;
      }
      const vh = scroller.clientHeight;
      const r = wrap.getBoundingClientRect();
      const st = scroller.getBoundingClientRect().top;
      // 0 = below the viewport, 1 = fully scrolled out the top
      const t = Math.min(
        1,
        Math.max(0, 1 - (r.top - st + r.height) / (vh + r.height)),
      );
      let opacity = 1;
      let focus = 1;
      let rx = 0;
      let scale = 1;
      let y = 0;
      if (t < 0.42) {
        const k = t / 0.42;
        focus = k;
        rx = lerp(-42, 0, k);
        scale = lerp(0.88, 1, k);
        y = lerp(96, 0, k);
        opacity =
          t < 0.25
            ? lerp(0, 0.55, t / 0.25)
            : lerp(0.55, 1, (t - 0.25) / 0.17);
      } else if (t > 0.58) {
        const k = (t - 0.58) / 0.42;
        focus = 1 - k;
        rx = lerp(0, 38, k);
        scale = lerp(1, 0.9, k);
        y = lerp(0, -80, k);
        opacity =
          t < 0.75
            ? lerp(1, 0.55, (t - 0.58) / 0.17)
            : lerp(0.55, 0, (t - 0.75) / 0.25);
      }
      wrap.style.setProperty("--focus", focus.toFixed(3));
      wrap.style.opacity = opacity.toFixed(3);
      wrap.style.transform = `perspective(900px) rotateX(${rx.toFixed(
        2,
      )}deg) scale(${scale.toFixed(3)}) translateY(${y.toFixed(1)}px)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="exp-wrap" ref={wrapRef}>
      <article className="exp relative text-left">
        {/* Panel that fades in behind the card as it scrolls into focus */}
        <div className="exp-focus absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md lg:-inset-x-6 lg:block bg-color1 bg-opacity-50" />

        <div className="relative z-10">
          {/* Meta line: when + where, set in the terminal face to match the prompt */}
          <p
            className="exp-meta flex flex-wrap items-baseline justify-between gap-x-4 text-lg leading-none text-color2"
            aria-label={`${startDate} to ${endDate}, ${location}`}
          >
            <span>
              {startDate} — {endDate}
            </span>
            <span>{location}</span>
          </p>

          <h3 className="mt-3 text-xl font-bold leading-tight text-color3 sm:text-2xl">
            {position}
          </h3>
          <a
            className="group/link mt-1 inline-flex items-baseline gap-1 text-base font-medium text-color3/80 hover:text-color2 focus-visible:text-color2 focus-visible:outline-none focus-visible:underline"
            href={companyUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${company} (opens in a new tab)`}
          >
            {company}
            <ArrowIcon className="translate-y-px" />
          </a>

          <p className="mt-4 max-w-prose text-[0.95rem] leading-relaxed text-color3">
            {summary}
          </p>

          {highlights.length > 0 && (
            <ul className="exp-highlights mt-4 space-y-1.5" aria-label="Highlights">
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

          {projects && projects.length > 0 && (
            <div className="mt-5">
              <p className="exp-meta text-base leading-none text-color3/60">
                projects/
              </p>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {projects.map((project) => {
                  const body = (
                    <>
                      <span className="flex items-baseline gap-1 text-sm font-semibold text-color3">
                        {project.name}
                        {project.href && <ArrowIcon />}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-color3/80">
                        {project.description}
                      </span>
                    </>
                  );
                  const cls =
                    "block h-full rounded-md border border-color3/15 bg-light1/50 px-3 py-2.5";
                  return (
                    <li key={project.name}>
                      {project.href ? (
                        <a
                          className={`group/link ${cls} transition-colors hover:border-color2 hover:bg-light1/80 focus-visible:border-color2 focus-visible:outline-none motion-reduce:transition-none`}
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} (opens in a new tab)`}
                        >
                          {body}
                        </a>
                      ) : (
                        <div className={cls}>{body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <ul
            className="mt-5 flex flex-wrap gap-1.5"
            aria-label="Technologies used"
          >
            {technologies.map((technology) => (
              <li
                key={technology}
                className="exp-meta rounded-full border border-color3/20 px-2.5 py-0.5 text-base leading-tight text-color3"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ExperienceCard;
