import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText, type PortableTextBlock } from 'next-sanity'
import type { SanityImageSource } from '@sanity/image-url'

import { client } from '../../../sanity/lib/client'
import { urlFor } from '../../../sanity/lib/image'
import { postBySlugQuery, postSlugsQuery } from '../../../sanity/lib/queries'
import { portableTextComponents } from '../portableText'

type Post = {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt?: string
  coverImage?: SanityImageSource & { alt?: string }
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: SanityImageSource & { alt?: string }
  }
  body?: PortableTextBlock[]
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(postSlugsQuery)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await client.fetch<Post | null>(postBySlugQuery, { slug })
  if (!post) return {}

  const title = post.seo?.metaTitle ?? post.title
  const description = post.seo?.metaDescription ?? post.excerpt

  const ogImageSource = post.seo?.ogImage ?? post.coverImage
  const ogImage = ogImageSource
    ? urlFor(ogImageSource).width(1200).height(630).fit('crop').auto('format').url()
    : undefined
  const imageAlt = ogImageSource?.alt ?? title
  const images = ogImage
    ? [{ url: ogImage, width: 1200, height: 630, alt: imageAlt }]
    : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await client.fetch<Post | null>(postBySlugQuery, { slug })

  if (!post) notFound()

  const cover = post.coverImage
    ? urlFor(post.coverImage).width(1800).fit('max').auto('format').url()
    : null

  return (
    <main className="min-h-screen bg-light1 font-sans text-color3">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-color2 transition hover:text-color3"
        >
          <span aria-hidden className="mr-1">
            ←
          </span>
          Back to blog
        </Link>

        <article className="mt-10">
          <header className="mb-10 border-b border-color3/15 pb-8">
            <time
              dateTime={post.publishedAt}
              className="text-sm font-medium uppercase tracking-[0.18em] text-color2"
            >
              {formatDate(post.publishedAt)}
            </time>
            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-color3 sm:text-5xl">
              {post.title}
            </h1>
            {post.excerpt ? (
              <p className="mt-5 text-xl leading-relaxed text-color3/70">
                {post.excerpt}
              </p>
            ) : null}
          </header>

          {cover ? (
            <figure className="-mx-6 mb-12 overflow-hidden rounded-none sm:mx-0 sm:rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cover}
                alt={post.coverImage?.alt ?? post.title}
                className="h-auto w-full"
              />
            </figure>
          ) : null}

          {post.body ? (
            <div className="font-sans">
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </div>
          ) : null}
        </article>
      </div>
    </main>
  )
}
