import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Heart, ArrowRight } from "lucide-react";
import { blogPosts, BlogPost } from "../data/blogPosts";

const LIKE_COUNTS_KEY = "blogLikeCounts";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sorted = [...blogPosts].sort(
      (a, b) =>
        new Date(b.published_date).getTime() -
        new Date(a.published_date).getTime()
    );
    setPosts(sorted);
    setLoading(false);
  }, []);

  const getLikesForSlug = (slug: string) => {
    const counts: Record<string, number> = JSON.parse(
      localStorage.getItem(LIKE_COUNTS_KEY) || "{}"
    );
    return typeof counts[slug] === "number" ? counts[slug] : 0;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-[#00F0FF] border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="container mx-auto px-4 lg:px-8 py-20 md:py-32">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Kallensight
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Insights, thoughts, and stories from my journey in technology,
              design, and creativity.
            </p>
            <div className="w-20 h-1 bg-[#00F0FF] mx-auto" />
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                Blog posts coming soon. Stay tuned!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-2xl border border-gray-800 hover:border-[#00F0FF] transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-[#00F0FF]/20 flex flex-col transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-800">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F0FF] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-white/80 text-[15px] leading-relaxed mb-5 flex-1 line-clamp-3">
                      {post.preview}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-2 text-gray-400 text-sm bg-gray-900/40 px-3 py-1 rounded-full border border-gray-800">
                        <Calendar size={14} />
                        {formatDate(post.published_date)}
                      </div>

                      <div className="flex items-center gap-2 text-gray-400 text-sm bg-gray-900/40 px-3 py-1 rounded-full border border-gray-800">
                        <Heart size={14} className="text-[#FF3366]" />
                        {getLikesForSlug(post.slug)}
                      </div>
                    </div>

                    {/* Read more */}
                    <div className="mt-4 flex items-center text-[#00F0FF] text-sm font-semibold group-hover:gap-2 transition-all">
                      Read article
                      <ArrowRight
                        size={16}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;