import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Heart, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Comments from "../components/Comments";
import { blogPosts, BlogPost as BlogPostType } from "../data/blogPosts";

const LIKED_KEY = "likedPosts"; // string[] of slugs
const LIKE_COUNTS_KEY = "blogLikeCounts"; // { [slug]: number }

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const post = useMemo<BlogPostType | null>(() => {
    if (!slug) return null;
    return blogPosts.find((p) => p.slug === slug) || null;
  }, [slug]);

  useEffect(() => {
    setLoading(true);

    if (!slug || !post) {
      setLoading(false);
      return;
    }

    const likedPosts: string[] = JSON.parse(localStorage.getItem(LIKED_KEY) || "[]");
    setLiked(likedPosts.includes(slug));

    const counts: Record<string, number> = JSON.parse(
      localStorage.getItem(LIKE_COUNTS_KEY) || "{}"
    );
    setLikesCount(typeof counts[slug] === "number" ? counts[slug] : 0);

    setLoading(false);
  }, [slug, post]);

  const handleLike = () => {
    if (!slug || !post || liked) return;

    // instant UI update
    setLiked(true);
    setLikesCount((prev) => prev + 1);

    // persist liked slugs
    const likedPosts: string[] = JSON.parse(localStorage.getItem(LIKED_KEY) || "[]");
    if (!likedPosts.includes(slug)) likedPosts.push(slug);
    localStorage.setItem(LIKED_KEY, JSON.stringify(likedPosts));

    // persist counts
    const counts: Record<string, number> = JSON.parse(
      localStorage.getItem(LIKE_COUNTS_KEY) || "{}"
    );
    counts[slug] = (typeof counts[slug] === "number" ? counts[slug] : 0) + 1;
    localStorage.setItem(LIKE_COUNTS_KEY, JSON.stringify(counts));
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

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
          <Link
            to="/blog"
            className="text-[#00F0FF] hover:text-[#00D4E6] transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <article className="container mx-auto px-4 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00F0FF] transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <div className="space-y-8">
            {/* Cover */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-gray-800">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            {/* Title + Meta */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-gray-400">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-800 bg-gray-900/40">
                  <Calendar size={18} />
                  <span className="text-sm">{formatDate(post.published_date)}</span>
                </div>

                <button
                  onClick={handleLike}
                  disabled={liked}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                    liked
                      ? "border-[#FF3366]/50 bg-[#FF3366]/10 text-[#FF3366] cursor-not-allowed"
                      : "border-gray-800 bg-gray-900/40 hover:border-[#FF3366]/60 hover:text-[#FF3366]"
                  }`}
                  aria-label="Like this post"
                >
                  <Heart size={18} className={liked ? "fill-current" : ""} />
                  <span className="text-sm font-semibold">{likesCount}</span>
                  {liked && <span className="text-xs opacity-80">Liked</span>}
                </button>
              </div>
            </div>

            <div className="w-full h-px bg-gray-800" />

            {/* Content */}
            <div
              className="
                prose prose-invert max-w-none

                prose-p:text-white/90 prose-p:text-[18px] prose-p:leading-8
                prose-headings:text-white
                prose-h1:text-[#00F0FF]
                prose-h2:text-white
                prose-h3:text-[#00F0FF]

                prose-strong:text-white
                prose-em:text-white/90

                prose-a:text-[#00F0FF] hover:prose-a:text-[#00D4E6]

                prose-li:text-white/85
                prose-hr:border-gray-800

                prose-blockquote:border-l-[#00F0FF]
                prose-blockquote:text-white/70

                prose-code:text-[#00F0FF]
              "
            >
              <ReactMarkdown
                components={{
                  // cleaner paragraph rhythm
                  p: ({ children }) => (
                    <p className="mb-6 first:text-white first:text-xl first:leading-9">
                      {children}
                    </p>
                  ),

                  // headings spacing
                  h1: ({ children }) => (
                    <h1 className="mt-12 mb-4 text-4xl font-extrabold text-[#00F0FF] tracking-tight">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="mt-12 mb-3 text-2xl font-bold text-white tracking-tight">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-8 mb-2 text-xl font-bold text-[#00F0FF] tracking-tight">
                      {children}
                    </h3>
                  ),

                  // nicer quote
                  blockquote: ({ children }) => (
                    <blockquote className="my-8 border-l-4 border-[#00F0FF] pl-5 italic text-white/70">
                      {children}
                    </blockquote>
                  ),

                  // clean lists
                  ul: ({ children }) => (
                    <ul className="my-6 list-disc pl-6 space-y-2 text-white/85">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="my-6 list-decimal pl-6 space-y-2 text-white/85">
                      {children}
                    </ol>
                  ),

                  // links
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-[#00F0FF] hover:text-[#00D4E6] underline underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),

                  // inline code
                  code: ({ children }) => (
                    <code className="bg-gray-900/70 border border-gray-800 px-2 py-1 rounded text-sm text-[#00F0FF]">
                      {children}
                    </code>
                  ),

                  // code blocks
                  pre: ({ children }) => (
                    <pre className="bg-gray-900 border border-gray-800 p-4 rounded-xl overflow-x-auto my-6">
                      {children}
                    </pre>
                  ),

                  // horizontal rule
                  hr: () => <div className="my-10 h-px w-full bg-gray-800" />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            <div className="w-full h-px bg-gray-800 my-2" />

            {/* Comments */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold text-white mb-2">Comments</h3>
              <p className="text-sm text-gray-400 mb-4">
                Sign in with GitHub to leave a comment. Powered by{" "}
                <a
                  href="https://utteranc.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00F0FF] hover:text-[#00D4E6]"
                >
                  Utterances
                </a>
                .
              </p>
              <Comments />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;