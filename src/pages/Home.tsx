import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import webDevelopmentImage from '../Assets/Wed develpment.png';
import graphicDesignImage from '../Assets/graphic design.png';
import uiUxImage from '../Assets/ui ux.png';
import socialMediaMarketingImage from '../Assets/social media marketing.png';

const services = [
  {
    title: 'Software Development',
    image: webDevelopmentImage,
    description:
      'I build responsive, high-performing websites and web apps that are clean, scalable, and tailored to business goals.',
  },
  {
    title: 'Graphic Design',
    image: graphicDesignImage,
    description:
      'I create polished visuals, branding assets, and marketing materials that make businesses stand out with clarity and impact.',
  },
  {
    title: 'UI/UX Design',
    image: uiUxImage,
    description:
      'I design intuitive digital experiences focused on usability, accessibility, and seamless interactions that delight users.',
  },
  {
    title: 'Social Media Marketing',
    image: socialMediaMarketingImage,
    description:
      'I turn content and brand strategy into engaging campaigns that grow reach, strengthen visibility, and connect with the right audience.',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="container mx-auto px-4 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-24">
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
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded-lg hover:bg-[#ffffff] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#1a4d57]/50"
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
                  src="https://res.cloudinary.com/drfdoiwg1/image/upload/v1783415830/karen_ftyosp.jpg"
                  alt="Kallen Mugambi - Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16 border-t border-gray-800">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#00F0FF]">
            What I Do
          </p>
          
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#111827] via-[#0b0f19] to-black p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.45)]"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-28 w-28 object-contain drop-shadow-[0_0_18px_rgba(0,240,255,0.18)] sm:h-32 sm:w-32"
                />
              </div>

              <div className="space-y-3 text-center">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-sm leading-6 text-gray-300">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
