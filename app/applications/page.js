'use client';

import { APPLICATIONS, IMAGES } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const ApplicationsPage = () => {
  return (
    <div>
      {/* Hero - Applications Image */}
      <section className="relative h-[450px] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/applications-hero.jpg"
            alt="Flowitec Applications"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center">
          <nav className="text-sm mb-4 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>Applications</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Applications</h1>
          <p className="text-xl max-w-2xl">Specialized equipment for every application</p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Expert Solutions by Application</h2>
            <p className="text-lg text-muted-foreground">
              Each application requires specific equipment characteristics. Our experts help you select the right pumps, valves, and controls for your exact requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {APPLICATIONS.map((app, index) => (
              <Link key={app.id} href={`/applications/${app.slug}`}>
                <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all group cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={app.coverImage}
                      alt={app.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-semibold">{app.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {app.overview}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:underline">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-lg shadow-md text-center">
              <h2 className="text-3xl font-bold mb-4">Need Application Engineering Support?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our application engineers are available to help you select the right equipment for your specific requirements. We provide technical calculations, system design, and performance guarantees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact#contact-form" className="btn primary">
                  Talk to an Applications Engineer
                </a>
                <a href="/products" className="btn ghost">
                  Browse Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationsPage;