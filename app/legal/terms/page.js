'use client';

const TermsPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">2. Use of Website</h2>
            <p className="text-muted-foreground mb-4">
              You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">3. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              All content on this website, including text, graphics, logos, images, and software, is the property of Flowitec or its content suppliers and is protected by international copyright laws.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">4. Product Information</h2>
            <p className="text-muted-foreground mb-6">
              We strive to provide accurate product information and specifications. However, we do not warrant that product descriptions, specifications, or other content on this website is accurate, complete, reliable, current, or error-free.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">5. Service Quotations</h2>
            <p className="text-muted-foreground mb-6">
              Quotations provided through our website are estimates only and subject to confirmation. Final pricing may vary based on specific requirements, availability, and other factors.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">6. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              Flowitec shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or services.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">7. Links to Third-Party Sites</h2>
            <p className="text-muted-foreground mb-6">
              Our website may contain links to third-party websites. These links are provided for your convenience only, and we do not endorse or take responsibility for the content of linked sites.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">8. Warranty Disclaimer</h2>
            <p className="text-muted-foreground mb-6">
              Equipment and services are provided with manufacturer warranties where applicable. Specific warranty terms are provided at the time of sale.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">9. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">10. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These terms shall be governed by and construed in accordance with the laws of South Africa.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms of Service, please contact:
            </p>
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="mb-2"><strong>Email:</strong> legal@flowitec.com</p>
              <p className="mb-2"><strong>Phone:</strong> +27 11 123 4567</p>
              <p><strong>Address:</strong> 123 Industrial Road, Johannesburg, South Africa</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;