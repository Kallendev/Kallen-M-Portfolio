import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Heart, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  preview: string;
  image_url: string;
  published_date: string;
  likes_count: number;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('published_date', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
    } else {
      setPosts(data || []);
    }
    setLoading(false);
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

  return (
    <div className="min-h-screen bg-black">
      <section className="container mx-auto px-4 lg:px-8 py-20 md:py-32">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Kallensight
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Insights, thoughts, and stories from my journey in technology, design,
              and creativity.
            </p>
            <div className="w-20 h-1 bg-[#00F0FF] mx-auto"></div>
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
                  className="group bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-[#00F0FF] transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-[#00F0FF]/20 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-800">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F0FF] transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-white text-sm mb-4 flex-1 line-clamp-3">
                      {post.preview}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar size={16} />
                        {formatDate(post.published_date)}
                      </div>

                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Heart size={16} className="text-[#FF3366]" />
                        {post.likes_count}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center text-[#00F0FF] text-sm font-medium group-hover:gap-2 transition-all">
                      Read more
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
