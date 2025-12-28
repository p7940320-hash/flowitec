'use client';

const PrivacyPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-6">
              Flowitec ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Name, email address, phone number, and company information</li>
              <li>Information submitted through contact forms, service requests, or job applications</li>
              <li>CV/resume files uploaded for career opportunities</li>
              <li>Communication preferences and feedback</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process service requests and quotations</li>
              <li>Review job applications and contact candidates</li>
              <li>Send updates about our products and services (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">Information Sharing</h2>
            <p className="text-muted-foreground mb-6">
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors and legal authorities when required</li>
              <li>Business partners with your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="mb-2"><strong>Email:</strong> privacy@flowitec.com</p>
              <p className="mb-2"><strong>Phone:</strong> +27 11 123 4567</p>
              <p><strong>Address:</strong> 123 Industrial Road, Johannesburg, South Africa</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;