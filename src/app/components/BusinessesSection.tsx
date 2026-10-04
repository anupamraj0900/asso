'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const realEstateCapabilities = ['Residential', 'Mixed Use', 'Hospitality', 'PPP Development', 'Strategic Development'];
const techCapabilities = ['AI & Automation', 'Product Engineering', 'Web Applications', 'Mobile Applications', 'Data Platforms', 'Custom Software'];

export default function BusinessesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [hoveredPanel, setHoveredPanel] = useState<'re' | 'tech' | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setVisible(true);observer.disconnect();}},
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-[#F8F6F0]">
      <div className="max-w-[1400px] mx-auto px-8 mb-16">
        <div
          className="opacity-0"
          style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards' : 'none' }}>
          
          <span className="text-eyebrow text-[#B8975A] block mb-4">Our Businesses</span>
          <div className="w-12 h-px bg-[#B8975A] mb-8" />
        </div>
        <h2
          className="font-display font-light text-[#1C1C1A] text-section-xl opacity-0"
          style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' : 'none' }}>
          
          Two Businesses.<br />
          <span className="italic text-[#1B4332]">One Group.</span>
        </h2>
      </div>

      {/* Panels */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[680px] gap-3 lg:gap-4 px-8">
        {/* Real Estate Panel */}
        <div
          className="relative overflow-hidden cursor-pointer group"
          style={{
            flex: hoveredPanel === 're' ? '0 0 62%' : hoveredPanel === 'tech' ? '0 0 38%' : '0 0 50%',
            transition: 'flex 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            minHeight: '400px'
          }}
          onMouseEnter={() => setHoveredPanel('re')}
          onMouseLeave={() => setHoveredPanel(null)}>
          
          <img
            src="https://img.rocket.new/generatedImages/rocket_gen_img_4f3a588c4-1789151620040.png"
            alt="Premium residential real estate development — Assotech Windsor Group"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: hoveredPanel === 're' ? 'scale(1.04)' : 'scale(1.0)',
              transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
            }} />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F15]/90 via-[#0F1F15]/40 to-[#0F1F15]/10" />

          <div
            className="absolute inset-0 p-10 lg:p-14 flex flex-col justify-end"
            style={{
              transform: hoveredPanel === 're' ? 'translateY(-8px)' : 'translateY(0)',
              transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {realEstateCapabilities?.map((cap) =>
              <span key={cap} className="text-[10px] tracking-[0.12em] uppercase text-[#F8F6F0]/70 border border-[#F8F6F0]/30 px-3 py-1">
                  {cap}
                </span>
              )}
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 border border-white/20 overflow-hidden min-w-0">
            <div className="text-eyebrow text-[#B8975A] mb-4">Real Estate</div>
            <h3 className="font-display font-light text-[#F8F6F0] text-section-lg mb-5">
              Places Built for<br />Generations.
            </h3>
            <p className="text-[#F8F6F0]/90 text-sm leading-relaxed mb-6 max-w-md">
              Built on decades of development experience, Assotech Windsor's real-estate business combines local market understanding, disciplined execution and long-term thinking.
            </p>
            <Link
              href="/real-estate"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#B8975A] hover:text-[#F8F6F0] transition-colors"
              style={{
                opacity: hoveredPanel === 're' ? 1 : 0.7,
                transition: 'opacity 0.4s ease'
              }}>
              
              Explore Real Estate →
            </Link>
            </div>
          </div>
        </div>

        {/* Technology Panel */}
        <div
          className="relative overflow-hidden cursor-pointer group"
          style={{
            flex: hoveredPanel === 'tech' ? '0 0 62%' : hoveredPanel === 're' ? '0 0 38%' : '0 0 50%',
            transition: 'flex 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            minHeight: '400px'
          }}
          onMouseEnter={() => setHoveredPanel('tech')}
          onMouseLeave={() => setHoveredPanel(null)}>
          
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80')" }}
          />
          <div className="absolute inset-0 bg-green-800/80" />

          <div
            className="absolute inset-0 p-10 lg:p-14 flex flex-col justify-end"
            style={{
              transform: hoveredPanel === 'tech' ? 'translateY(-8px)' : 'translateY(0)',
              transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {techCapabilities?.map((cap) =>
              <span key={cap} className="text-[10px] tracking-[0.12em] uppercase text-[#F8F6F0]/70 border border-[#F8F6F0]/30 px-3 py-1">
                  {cap}
                </span>
              )}
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 border border-white/20 overflow-hidden min-w-0">
            <div className="text-eyebrow text-[#B8975A] mb-4">Technology</div>
            <h3 className="font-display font-light text-[#F8F6F0] text-section-lg mb-5">
              Engineering Without<br />Borders.
            </h3>
            <p className="text-[#F8F6F0]/90 text-sm leading-relaxed mb-4 max-w-md">
              Assotech Windsor's technology business is a digital engineering and product-development platform connecting Indian technical talent with businesses across international markets.
            </p>
            <div className="text-[12px] text-[#F8F6F0]/70 mb-6 space-y-1">
              <div>Delivery capability in India.</div>
              <div>Commercial focus across international markets.</div>
              <div>Connected to global technology ecosystems.</div>
            </div>
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#B8975A] hover:text-[#F8F6F0] transition-colors"
              style={{
                opacity: hoveredPanel === 'tech' ? 1 : 0.7,
                transition: 'opacity 0.4s ease'
              }}>
              
              Explore Technology →
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}