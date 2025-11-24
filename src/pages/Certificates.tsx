import { useEffect, useState } from 'react';
import { Award, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Certificate {
  id: string;
  title: string;
  image_url: string;
  issued_date: string | null;
  issuer: string | null;
}

const Certificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching certificates:', error);
    } else {
      setCertificates(data || []);
    }
    setLoading(false);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  const openCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = 'hidden';
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'auto';
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award size={48} className="text-[#00F0FF]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Proof of Mastery
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Certifications and achievements that validate my expertise across
              various domains.
            </p>
            <div className="w-20 h-1 bg-[#00F0FF] mx-auto"></div>
          </div>

          {certificates.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                Certificates coming soon. Stay tuned!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((certificate) => (
                <div
                  key={certificate.id}
                  onClick={() => openCertificate(certificate)}
                  className="group bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-[#00F0FF] transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-[#00F0FF]/20 cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
                    <img
                      src={certificate.image_url}
                      alt={certificate.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                      {certificate.title}
                    </h3>

                    {certificate.issuer && (
                      <p className="text-sm text-white">
                        Issued by: <span className="text-white font-medium">{certificate.issuer}</span>
                      </p>
                    )}

                    {certificate.issued_date && (
                      <p className="text-sm text-white">
                        {formatDate(certificate.issued_date)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeCertificate}
        >
          <button
            onClick={closeCertificate}
            className="absolute top-4 right-4 text-white hover:text-[#00F0FF] transition-colors z-10"
            aria-label="Close certificate view"
          >
            <X size={32} />
          </button>

          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCertificate.image_url}
              alt={selectedCertificate.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">
                {selectedCertificate.title}
              </h3>
              {selectedCertificate.issuer && (
                <p className="text-white">
                  Issued by: <span className="text-[#00F0FF]">{selectedCertificate.issuer}</span>
                </p>
              )}
              {selectedCertificate.issued_date && (
                <p className="text-white">
                  {formatDate(selectedCertificate.issued_date)}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
