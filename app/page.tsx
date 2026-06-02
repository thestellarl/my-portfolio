import { client } from "../sanity/lib/client";
import { latestPostsQuery } from "../sanity/lib/queries";
import Landing from "@/components/Landing";
import BlogCallout, {
  type BlogCalloutPost,
} from "@/components/BlogCallout";

export default async function Page() {
  const posts = await client.fetch<BlogCalloutPost[]>(latestPostsQuery);

  return <Landing blogCallout={<BlogCallout posts={posts} />} />;
}
