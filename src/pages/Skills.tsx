import { Link } from 'react-router-dom';
import { Award, Code, Palette, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Software Development',
      icon: Code,
      color: '#00F0FF',
      skills: [
        'MongoDB',
        'Express.js',
        'React',
        'Node.js',
        'TypeScript',
        'JavaScript',
        'TailwindCSS',
        'REST APIs',
        'Git/GitHub',
        'Jest',
        'Cypress',
        'Webpack',
        'Vite',
      ],
    },
    {
      title: 'Graphic Design',
      icon: Palette,
      color: '#00F0FF',
      skills: [
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Canva',
        'Branding',
        'Logo Design',
        'Typography',
        'Color Theory',
        'Print Design',
        'Digital Illustration',
      ],
    },
    {
      title: 'UI/UX Design',
      icon: Layers,
      color: '#00F0FF',
      skills: [
        'Figma',
        'Wireframing',
        'Prototyping',
        'Accessibility (WCAG)',
        'Interaction Design',
        'Design Systems',
        'User Research',
        'Usability Testing',
        'Information Architecture',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="container mx-auto px-4 lg:px-8 py-20 md:py-32">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Skills & Expertise
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit spanning software development, graphic design,
              and UI/UX design.
            </p>
            <div className="w-20 h-1 bg-[#00F0FF] mx-auto"></div>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 transition-all duration-300 p-8 hover:shadow-xl"
                style={{
                  borderColor: `${category.color}00`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = category.color;
                  e.currentTarget.style.boxShadow = `0 20px 25px -5px ${category.color}33, 0 8px 10px -6px ${category.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1f2937';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors" style={{
                    backgroundColor: `${category.color}1a`,
                  }}>
                    <category.icon size={28} style={{ color: category.color }} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {category.title}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 hover:shadow-md"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = category.color;
                        e.currentTarget.style.boxShadow = `0 4px 6px -1px ${category.color}33, 0 2px 4px -2px ${category.color}33`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#374151';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <Link
              to="/certificates"
              className="group inline-flex items-center px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded-lg hover:bg-[#FF3366] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF3366]/50"
            >
              <Award size={20} className="mr-2" />
              Proof of Mastery
              <span className="ml-2 text-sm opacity-80">View Certificates</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
