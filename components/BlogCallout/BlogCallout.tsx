import Link from "next/link";

export type BlogCalloutPost = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
  });
}

/**
 * Compact blog teaser intended to live in the hero, below the typewriter.
 * Lists the latest post titles and links out to the full blog index.
 */
export function BlogCallout({ posts }: { posts: BlogCalloutPost[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="font-sans text-color3">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-color2 sm:text-xs">
          Latest writing
        </span>
        <span aria-hidden className="h-px flex-1 bg-color3/25" />
      </div>

      <ul className="space-y-1.5">
        {posts.map((post, i) => (
          <li key={post._id}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-3 py-1 text-sm sm:text-base"
            >
              <span className="font-mono text-[11px] text-color2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="truncate font-medium underline decoration-color3/30 decoration-1 underline-offset-4 transition group-hover:text-color2 group-hover:decoration-color2">
                {post.title}
              </span>
              <time
                dateTime={post.publishedAt}
                className="hidden text-[11px] uppercase tracking-wider text-color2 sm:inline"
              >
                {formatDate(post.publishedAt)}
              </time>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/blog"
        className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-color3 underline decoration-color2 decoration-2 underline-offset-4 transition hover:text-color2 sm:text-base"
      >
        Read the blog
        <span
          aria-hidden
          className="inline-block transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </div>
  );
}

export default BlogCallout;
