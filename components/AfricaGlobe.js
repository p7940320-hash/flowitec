'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import react-globe.gl to avoid SSR issues
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const AfricaGlobe = ({ offices, onSelectOffice }) => {
  const globeRef = useRef();
  const [globeReady, setGlobeReady] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 600, height: 500 });

  // Office locations with coordinates
  const markers = offices.map(office => ({
    ...office,
    lat: office.lat,
    lng: office.lng,
    size: 40,
    color: '#0D47A1'
  }));

  useEffect(() => {
    // Handle responsive sizing
    const updateDimensions = () => {
      const container = document.getElementById('globe-container');
      if (container) {
        setDimensions({
          width: Math.min(container.offsetWidth, 800),
          height: Math.min(500, window.innerHeight * 0.5)
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    // Auto-rotate and focus on Africa when globe is ready
    if (globeRef.current && globeReady) {
      // Focus on Africa (center coordinates)
      globeRef.current.pointOfView({ lat: 5, lng: 20, altitude: 2.2 }, 1000);
      
      // Enable auto-rotation
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      globeRef.current.controls().enableZoom = true;
      globeRef.current.controls().minDistance = 150;
      globeRef.current.controls().maxDistance = 400;
    }
  }, [globeReady]);

  // Custom HTML marker with logo
  const markerHtml = (d) => `
    <div style="
      width: 50px;
      height: 50px;
      background: white;
      border-radius: 50%;
      border: 3px solid #0D47A1;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      cursor: pointer;
      transition: transform 0.2s ease;
    " onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
      <img src="/flowitec-logo.png" alt="${d.title}" style="width: 35px; height: 35px; object-fit: contain;" />
    </div>
  `;

  // Label for each marker
  const labelText = (d) => `
    <div style="
      background: rgba(13, 71, 161, 0.95);
      color: white;
      padding: 8px 16px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14px;
      white-space: nowrap;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      margin-top: -60px;
    ">
      ${d.title}
    </div>
  `;

  return (
    <div id="globe-container" className="relative w-full flex items-center justify-center">
      <div className="relative" style={{ width: dimensions.width, height: dimensions.height }}>
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          
          // HTML Markers (Logo pins)
          htmlElementsData={markers}
          htmlElement={(d) => {
            const el = document.createElement('div');
            el.innerHTML = markerHtml(d);
            el.style.cursor = 'pointer';
            el.onclick = () => onSelectOffice && onSelectOffice(d);
            return el;
          }}
          htmlAltitude={0.05}
          
          // Labels
          labelsData={markers}
          labelLat={d => d.lat}
          labelLng={d => d.lng}
          labelText={d => d.title}
          labelSize={1.5}
          labelDotRadius={0}
          labelColor={() => '#0D47A1'}
          labelResolution={2}
          labelAltitude={0.02}
          
          // Atmosphere
          atmosphereColor="#0D47A1"
          atmosphereAltitude={0.15}
          
          // Events
          onGlobeReady={() => setGlobeReady(true)}
        />
        
        {/* Loading overlay */}
        {!globeReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 rounded-lg">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white font-medium">Loading 3D Globe...</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md text-sm">
        <p className="font-medium text-gray-800">🌍 Interactive 3D Map</p>
        <p className="text-gray-600 text-xs mt-1">Drag to rotate • Scroll to zoom • Click pins for details</p>
      </div>
    </div>
  );
};

export default AfricaGlobe;
