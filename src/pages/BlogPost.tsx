import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Heart, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { supabase } from '../lib/supabase';
import Comments from '../components/Comments';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  image_url: string;
  published_date: string;
  likes_count: number;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchPost();
      checkIfLiked();
    }
  }, [slug]);

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (error) {
      console.error('Error fetching blog post:', error);
    } else {
      setPost(data);
    }
    setLoading(false);
  };

  const checkIfLiked = () => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    setLiked(likedPosts.includes(slug));
  };

  const handleLike = async () => {
    if (!post || liked) return;

    const { error } = await supabase
      .from('blog_posts')
      .update({ likes_count: post.likes_count + 1 })
      .eq('id', post.id);

    if (!error) {
      setPost({ ...post, likes_count: post.likes_count + 1 });
      setLiked(true);

      const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
      likedPosts.push(slug);
      localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-[#00F0FF] border-t-transparent rounded-full"></div>
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

          <div className="space-y-6">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  {formatDate(post.published_date)}
                </div>

                <button
                  onClick={handleLike}
                  disabled={liked}
                  className={`flex items-center gap-2 transition-colors ${
                    liked
                      ? 'text-[#FF3366] cursor-not-allowed'
                      : 'hover:text-[#FF3366] cursor-pointer'
                  }`}
                >
                  <Heart size={18} className={liked ? 'fill-current' : ''} />
                  {post.likes_count}
                </button>
              </div>
            </div>

            <div className="w-full h-px bg-gray-800"></div>

            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-white mt-8 mb-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-white mt-6 mb-3">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold text-white mt-4 mb-2">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-white leading-relaxed mb-4 text-lg">
                      {children}
                    </p>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-[#00F0FF] hover:text-[#00D4E6] underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">
                      {children}
                    </ol>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#00F0FF] pl-4 italic text-gray-400 my-4">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-800 text-[#00F0FF] px-2 py-1 rounded text-sm">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-900 border border-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
                      {children}
                    </pre>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            <div className="w-full h-px bg-gray-800 my-8"></div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Comments</h3>
              <p className="text-sm text-gray-400 mb-4">
                Sign in with GitHub to leave a comment. Powered by{' '}
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
