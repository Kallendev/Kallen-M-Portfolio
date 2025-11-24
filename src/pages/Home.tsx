import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="container mx-auto px-4 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Kallen Mugambi
              </h1>
              <p className="text-xl md:text-2xl text-[#00F0FF] font-medium">
                Software Developer, Graphic Designer, UI/UX Designer
              </p>
            </div>

            <p className="text-lg text-white leading-relaxed max-w-xl">
              I craft digital experiences that blend creativity, technology, and
              user-centered design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/work"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded-lg hover:bg-[#FF3366] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF3366]/50"
              >
                See My Work
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <a
                href="/KALLEN MUGAMBI CV.pdf"
                download
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-[#00F0FF] hover:bg-[#00F0FF] hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00F0FF] rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#00F0FF] shadow-2xl shadow-[#00F0FF]/50">
                <img
                  src="https://res.cloudinary.com/drfdoiwg1/image/upload/v1763720889/kallenpassport_i03uan.jpg"
                  alt="Kallen Mugambi - Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-[#00F0FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#00F0FF]/20">
            <div className="w-12 h-12 bg-[#00F0FF]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00F0FF]/20 transition-colors">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Software Development</h3>
            <p className="text-gray-400">
              Building scalable web applications with modern technologies and best
              practices.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF3366]/20">
            <div className="w-12 h-12 bg-[#FF3366]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FF3366]/20 transition-colors">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Graphic Design</h3>
            <p className="text-gray-400">
              Creating visually stunning designs that communicate your brand's
              message effectively.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-[#00F0FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#00F0FF]/20">
            <div className="w-12 h-12 bg-[#00F0FF]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00F0FF]/20 transition-colors">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
            <p className="text-gray-400">
              Designing intuitive interfaces that prioritize user experience and
              accessibility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
