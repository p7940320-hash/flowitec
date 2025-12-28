'use client';

import { Award, Download, CheckCircle, FileText } from 'lucide-react';

const QualityPage = () => {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management Systems',
      details: 'Certified for design, supply, installation, and maintenance of industrial equipment',
      issueDate: 'January 2023',
      validUntil: 'January 2026'
    },
    {
      name: 'ISO 14001:2015',
      description: 'Environmental Management Systems',
      details: 'Commitment to environmental responsibility in all operations',
      issueDate: 'March 2023',
      validUntil: 'March 2026'
    },
    {
      name: 'ISO 45001:2018',
      description: 'Occupational Health & Safety',
      details: 'Ensuring workplace safety for employees and contractors',
      issueDate: 'June 2023',
      validUntil: 'June 2026'
    },
    {
      name: 'API Certified',
      description: 'American Petroleum Institute',
      details: 'Certified for petroleum and petrochemical industry equipment',
      issueDate: 'September 2022',
      validUntil: 'September 2025'
    }
  ];

  // Partner Certificates with downloadable PDFs
  const partnerCertificates = [
    {
      name: 'Meson',
      description: 'Official Quality Certificate',
      pdfUrl: '/datasheets/meson.pdf',
      logo: '/meson.png'
    },
    {
      name: 'Pioneer',
      description: 'Official Quality Certificate',
      pdfUrl: '/datasheets/pioneer.pdf',
      logo: '/pioneer.jpg'
    },
    {
      name: 'Bellin',
      description: 'Official Quality Certificate',
      pdfUrl: '/datasheets/bellin.pdf',
      logo: '/bellin.jpg'
    },
    {
      name: 'Fluimac',
      description: 'Official Quality Certificate',
      pdfUrl: '/datasheets/fluimac.pdf',
      logo: '/fluimac.jpg'
    },
    {
      name: 'Lutz',
      description: 'Official Quality Certificate',
      pdfUrl: '/datasheets/lutz.pdf',
      logo: null
    }
  ];

  const qualityPrinciples = [
    {
      title: 'Customer Focus',
      description: 'Understanding and exceeding customer requirements'
    },
    {
      title: 'Leadership',
      description: 'Establishing unity of purpose and direction'
    },
    {
      title: 'Engagement',
      description: 'Empowering competent and dedicated people'
    },
    {
      title: 'Process Approach',
      description: 'Understanding and managing interrelated processes'
    },
    {
      title: 'Improvement',
      description: 'Continual improvement as a permanent objective'
    },
    {
      title: 'Evidence-Based Decision Making',
      description: 'Decisions based on analysis of data and information'
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container-custom">
          <nav className="text-sm mb-4 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>Quality & Certifications</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Quality & Certifications</h1>
          <p className="text-xl max-w-2xl">Commitment to excellence in everything we do</p>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Quality Commitment</h2>
            <div className="text-lg text-muted-foreground space-y-4 mb-12">
              <p>
                At Flowitec, quality is not just a goal – it's the foundation of everything we do. Our commitment to quality management ensures that every product we supply, every service we provide, and every interaction with our clients meets the highest standards of excellence.
              </p>
              <p>
                We maintain rigorous quality control processes throughout our operations, from supplier selection to final delivery and after-sales support. Our team is trained to industry-leading standards, and we continuously invest in the latest tools and technologies to ensure optimal performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Genuine Products</div>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">7+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{cert.name}</h3>
                    <div className="text-primary font-semibold mb-3">{cert.description}</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{cert.details}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div>
                    <span className="font-medium">Issued:</span> {cert.issueDate}
                  </div>
                  <div>
                    <span className="font-medium">Valid Until:</span> {cert.validUntil}
                  </div>
                </div>
                <button className="mt-4 text-primary font-medium hover:underline inline-flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download Certificate
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Principles */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Quality Management Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {qualityPrinciples.map((principle, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold">{principle.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Certificates Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Certifications of Quality</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Official certificates from our trusted manufacturing partners
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerCertificates.map((cert, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    {cert.logo ? (
                      <img 
                        src={cert.logo} 
                        alt={cert.name} 
                        className="w-16 h-16 object-contain bg-white rounded-lg p-2"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-8 h-8 text-primary" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                  <a 
                    href={cert.pdfUrl} 
                    download
                    className="btn primary w-full inline-flex items-center justify-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Documents */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Quality Documentation</h2>
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg shadow-md flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Quality Policy</h3>
                  <p className="text-sm text-muted-foreground">Our commitment to quality management</p>
                </div>
                <button className="btn primary inline-flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">HSE Policy</h3>
                  <p className="text-sm text-muted-foreground">Health, Safety, and Environment guidelines</p>
                </div>
                <button className="btn primary inline-flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Environmental Policy</h3>
                  <p className="text-sm text-muted-foreground">Our commitment to environmental responsibility</p>
                </div>
                <button className="btn primary inline-flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Quality Standards?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact our quality team for more information about our certifications and processes
          </p>
          <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default QualityPage;