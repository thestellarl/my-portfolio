import Link from 'next/link'
import { YouTubeEmbed } from '@next/third-parties/google'
import type { PortableTextComponents } from 'next-sanity'

import { urlFor } from '../../sanity/lib/image'

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="mt-12 mb-6 text-4xl font-bold tracking-tight text-color3">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-3xl font-bold tracking-tight text-color3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-2xl font-semibold text-color3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 mb-2 text-xl font-semibold text-color3">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="my-5 text-lg leading-relaxed text-color3/90">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-color2 bg-light2/50 px-6 py-3 italic text-color3/80">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 list-disc space-y-2 pl-6 text-lg text-color3/90 marker:text-color2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 list-decimal space-y-2 pl-6 text-lg text-color3/90 marker:text-color2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-color3">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-light2 px-1.5 py-0.5 font-mono text-[0.9em] text-color3">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href: string = value?.href ?? '#'
      const external = /^https?:\/\//.test(href)
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-color2 underline decoration-color2/40 underline-offset-4 transition hover:decoration-color2"
          >
            {children}
          </a>
        )
      }
      return (
        <Link
          href={href}
          className="text-color2 underline decoration-color2/40 underline-offset-4 transition hover:decoration-color2"
        >
          {children}
        </Link>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      const src = urlFor(value).width(1600).fit('max').auto('format').url()
      return (
        <figure className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={value.alt ?? ''}
            className="w-full rounded-lg shadow-md"
            loading="lazy"
          />
          {value.caption ? (
            <figcaption className="mt-2 text-center text-sm text-color3/70">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      )
    },
    instagram: ({ value }) => {
      const url: string | undefined = value?.url
      if (!url) return null
      // Matches https://(www.)instagram.com/{p|reel|tv}/{shortcode}/...
      const match = url.match(
        /^https?:\/\/(?:www\.)?instagram\.com\/(p|reel|tv)\/([^/?#]+)/,
      )
      if (!match) return null
      const [, kind, shortcode] = match
      const embedSrc = `https://www.instagram.com/${kind}/${shortcode}/embed/`
      return (
        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-[540px] overflow-hidden rounded-lg border border-color3/10 bg-light2 shadow-md">
            <iframe
              src={embedSrc}
              title={value.caption ?? 'Instagram post'}
              className="block h-[720px] w-full"
              loading="lazy"
              scrolling="no"
              allow="encrypted-media"
              allowFullScreen
            />
          </div>
          {value.caption ? (
            <figcaption className="mt-2 text-center text-sm text-color3/70">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      )
    },
    youtube: ({ value }) => {
      const url: string | undefined = value?.url
      if (!url) return null
      // Matches the video id from watch?v=, youtu.be/, /embed/, or /shorts/ URLs
      const match = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]+)/,
      )
      if (!match) return null
      const [, id] = match
      return (
        <figure className="my-8 flex flex-col items-center">
          <div className="w-full overflow-hidden rounded-lg border border-color3/10 bg-light2 shadow-md [&_lite-youtube]:max-w-full">
            <YouTubeEmbed videoid={id} params="rel=0" />
          </div>
          {value.caption ? (
            <figcaption className="mt-2 text-center text-sm text-color3/70">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      )
    },
  },
}
