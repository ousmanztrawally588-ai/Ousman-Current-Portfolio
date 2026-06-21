import { getFeaturedBlogs } from "@/lib/blogs";
import { IndexPageClient } from "@/components/common/index-page-client";

export default function IndexPage() {
  const featuredBlogs = getFeaturedBlogs();

  return <IndexPageClient featuredBlogs={featuredBlogs} />;
}