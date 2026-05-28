import Link from 'next/link'
import type { SanityImageSource } from '@sanity/image-url'

import { client } from '../../sanity/lib/client'
import { urlFor } from '../../sanity/lib/image'
import { postsQuery } from '../../sanity/lib/queries'

type PostListItem = {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt?: string
  coverImage?: SanityImageSource & { alt?: string }
}

export const metadata = {
  title: 'Blog',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogIndexPage() {
  const posts = await client.fetch<PostListItem[]>(postsQuery)

  return (
    <main className="min-h-screen bg-light1 font-sans text-color3">
      <div className="mx-auto max-w-screen-xl px-6 py-20 md:px-12 lg:px-24">
        <header className="mb-16 border-b border-color3/15 pb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-color2">
            Writing
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-color3 sm:text-6xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-color3/70">
            Notes, projects, and the occasional deep dive.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-color3/70">No posts yet. Check back soon.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const cover = post.coverImage
                ? urlFor(post.coverImage)
                    .width(800)
                    .height(500)
                    .fit('crop')
                    .auto('format')
                    .url()
                : null

              return (
                <li key={post._id} className="group">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-color3/10 transition hover:-translate-y-1 hover:shadow-lg hover:ring-color2/40"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-color1/30">
                      {cover ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={cover}
                          alt={post.coverImage?.alt ?? post.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-color1 to-color2 text-light1">
                          <span className="font-mono text-sm tracking-widest opacity-70">
                            {post.title.slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <time
                        dateTime={post.publishedAt}
                        className="text-xs font-medium uppercase tracking-wider text-color2"
                      >
                        {formatDate(post.publishedAt)}
                      </time>
                      <h2 className="mt-2 text-xl font-semibold text-color3 transition group-hover:text-color2">
                        {post.title}
                      </h2>
                      {post.excerpt ? (
                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-color3/70">
                          {post.excerpt}
                        </p>
                      ) : null}
                      <span className="mt-auto pt-5 text-sm font-medium text-color2">
                        Read post
                        <span
                          aria-hidden
                          className="ml-1 inline-block transition group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </main>
  )
}
