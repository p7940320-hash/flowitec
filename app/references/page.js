'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Download, Filter } from 'lucide-react';
const Gallery =[
'/Gallery/gallery2.jpg',
'/Gallery/gallery3.jpg',
'/Gallery/gallery4.jpg',
'/Gallery/gallery5.jpg',
'/Gallery/gallery6.jpg',
'/Gallery/gallery7.jpg',
'/Gallery/gallery8.jpg',
'/Gallery/gallery9.jpg',
'/Gallery/gallery10.jpg',
'/Gallery/gallery11.jpg',
'/Gallery/gallery12.jpg',
'/Gallery/gallery13.jpg',

];

const ReferencesPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterIndustry, setFilterIndustry] = useState('all');
  const [filterYear, setFilterYear] = useState('all');

  useEffect(() => {
    // Fetch projects from API
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data.projects || []));
  }, []);

  const filteredProjects = projects.filter(project => {
    if (filterIndustry !== 'all' && !project.industries?.includes(filterIndustry)) {
      return false;
    }
    if (filterYear !== 'all' && project.year !== parseInt(filterYear)) {
      return false;
    }
    return true;
  });

  const industries = ['all', 'mining', 'municipal', 'water-treatment'];
  const years = ['all', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017'];

  return (
    <div>
      {/* Hero - References Image */}
      <section className="relative h-[450px] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/references-hero.jpg"
            alt="Flowitec Project References"
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
            <span>References</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Project References</h1>
          <p className="text-xl max-w-2xl">500+ successful projects delivered across Ghana, Nigeria, and Kenya since 2017</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Filter Projects:</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Industry</label>
                <select
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {industries.map(ind => (
                    <option key={ind} value={ind}>
                      {ind === 'all' ? 'All Industries' : ind.replace('-', ' ')}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <select
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="mb-6 text-muted-foreground">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={true}
                      loading="eager"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags?.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-sm text-muted-foreground mb-2">
                      {project.client} • {project.year}
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">
                      {project.location}
                    </div>
                    <div className="text-primary font-semibold">
                      {project.kpi}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">No projects match your filters</p>
              <button
                onClick={() => {
                  setFilterIndustry('all');
                  setFilterYear('all');
                }}
                className="btn primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      {/* Project Gallery */}
<section className="py-20 bg-background">
  <div className="container-custom">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      Project Gallery
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Gallery.map((src, index) => (
        <div
          key={index}
          className="relative h-56 overflow-hidden rounded-lg group"
        >
          <Image
            src={src}
            alt="Project reference"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={true}
            loading="eager"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Client</div>
                    <div className="text-lg">{selectedProject.client}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Location</div>
                    <div className="text-lg">{selectedProject.location}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Year</div>
                    <div className="text-lg">{selectedProject.year}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Key Performance</div>
                    <div className="text-lg font-semibold text-primary">{selectedProject.kpi}</div>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Project Description</h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
                <button className="btn primary w-full inline-flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Case Study (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferencesPage;