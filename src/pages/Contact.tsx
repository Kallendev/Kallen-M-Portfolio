import { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  Download,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const budgetSuggestions = [
    'Under $100',
    '$100 - $300',
    '$300 - $700',
    '$700+',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBudgetSuggestion = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      budget: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f79cacdc-15d8-4830-a0a3-45f0ec23584e',
          from_name: 'KALLEN MUGAMBI STUDIO',
          subject: `NEW CLIENT INQUIRY — ${formData.name}`,
          replyto: formData.email,

          name: formData.name,
          email: formData.email,
          subject_line: formData.subject || 'Not specified',
          projectType: formData.projectType || 'Not specified',
          budget: formData.budget || 'Not specified',
          message: formData.message,

          botcheck: '',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          projectType: '',
          budget: '',
          message: '',
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="container mx-auto px-4 lg:px-8 py-20 md:py-32">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I&apos;d love to hear
              from you.
            </p>
            <div className="w-20 h-1 bg-[#00F0FF] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <a
                    href="mailto:kallenmugambi@gmail.com"
                    className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-[#00F0FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#00F0FF]/20"
                  >
                    <div className="w-12 h-12 bg-[#00F0FF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00F0FF]/20 transition-colors">
                      <Mail size={24} className="text-[#00F0FF]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">
                        kallenmugambi@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+254740690760"
                    className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF3366]/20"
                  >
                    <div className="w-12 h-12 bg-[#FF3366]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FF3366]/20 transition-colors">
                      <Phone size={24} className="text-[#FF3366]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium">+254 740 690 760</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#00F0FF]/10 to-transparent rounded-xl border border-[#00F0FF]/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Download My CV
                </h3>
                <p className="text-gray-300 mb-4">
                  Want to know more about my experience and qualifications? Download
                  my curriculum vitae.
                </p>
                <a
                  href="/KALLEN MUGAMBI CV.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-[#00F0FF] text-black font-semibold rounded-lg hover:bg-[#FF3366] hover:text-white transition-colors"
                >
                  <Download size={20} className="mr-2" />
                  Download CV
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h2>

              {submitted ? (
                <div className="relative overflow-hidden rounded-2xl border border-[#00F0FF]/30 bg-gradient-to-br from-[#00F0FF]/12 via-[#0a0a0a] to-[#FF3366]/12 p-8 text-center shadow-[0_0_40px_rgba(0,240,255,0.08)]">
                  <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#00F0FF]/10 blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-[#FF3366]/10 blur-3xl" />

                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-400/30 bg-green-500/10">
                    <CheckCircle2 size={34} className="text-green-400" />
                  </div>

                  <div className="mb-3 flex items-center justify-center gap-2">
                    <Sparkles size={16} className="text-[#00F0FF]" />
                    <p className="text-xs font-semibold tracking-[0.25em] text-[#00F0FF] uppercase">
                      Message Delivered
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    Thank you for reaching out
                  </h3>

                  <p className="text-gray-300 max-w-md mx-auto leading-7">
                    Your message has been sent successfully. I&apos;ll review it and get
                    back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {error && (
                    <div className="flex items-start gap-3 p-4 rounded-lg border border-red-500/30 bg-red-900/20">
                      <AlertCircle className="text-red-400 mt-0.5" size={20} />
                      <p className="text-red-200 text-sm">{error}</p>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:ring-2 focus:ring-[#00F0FF]/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:ring-2 focus:ring-[#00F0FF]/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:ring-2 focus:ring-[#00F0FF]/20 transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#00F0FF] focus:ring-2 focus:ring-[#00F0FF]/20 transition-all"
                    >
                      <option value="">Select type</option>
                      <option value="Website Design">Website Design</option>
                      <option value="Web Development">Web Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Branding">Branding</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Budget
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:ring-2 focus:ring-[#00F0FF]/20 transition-all"
                      placeholder="Enter amount or budget range"
                    />

                    <div className="flex flex-wrap gap-2 mt-3">
                      {budgetSuggestions.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleBudgetSuggestion(item)}
                          className={`px-3 py-2 text-sm rounded-full border transition-all ${
                            formData.budget === item
                              ? 'bg-[#00F0FF] text-black border-[#00F0FF]'
                              : 'bg-gray-900 text-gray-300 border-gray-700 hover:border-[#00F0FF] hover:text-white'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:ring-2 focus:ring-[#00F0FF]/20 transition-all resize-none"
                      placeholder="Tell me about your project, goals, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded-lg hover:bg-[#FF3366] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF3366]/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <Send size={20} />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;