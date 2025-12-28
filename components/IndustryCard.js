'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const IndustryCard = ({ industry }) => {
  return (
    <Link href={`/industries/${industry.slug}`}>
      <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={industry.image}
            alt={`Flowitec - ${industry.title} Industry`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority={true}
            loading="eager"
            quality={40}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-4xl mb-2">{industry.icon}</div>
            <h3 className="text-xl font-semibold">{industry.title}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {industry.overview}
          </p>
          <div className="flex items-center text-primary font-medium group-hover:underline">
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default IndustryCard;