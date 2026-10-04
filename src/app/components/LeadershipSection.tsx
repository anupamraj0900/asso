'use client';

import React, { useEffect, useRef, useState } from 'react';

const leaders = [
  {
    name: 'Alpana Srivastava',
    title: 'Designated Partner · Advisory & Governance',
    bio: 'Alpana provides senior guidance to Assotech Windsor Group, supporting the leadership team on key business, governance and long-term strategic matters. Drawing on her experience and perspective, she serves in an advisory capacity as the Group continues to strengthen and expand its real-estate operations.',
    initials: 'AS',
  },
  {
    name: 'Anupam Raj',
    title: 'Designated Partner · Strategy, Operations & Growth',
    bio: 'Anupam leads the Group\'s business operations, strategy and growth, with responsibility spanning real-estate development, sales, marketing, technology, customer experience and new initiatives. He works across teams and functions to drive execution, strengthen operations and lead the Group\'s next phase of growth.',
    initials: 'AR',
  },
];

const staffMembers = [
  {
    name: 'Santosh Dengre',
    title: 'Project Manager · Civil Engineering',
    department: 'PROJECTS',
    initials: 'SD',
  },
  {
    name: 'Deepak Vishwakarma',
    title: 'CRM & Marketing Manager',
    department: 'CRM & MARKETING',
    initials: 'DV',
  },
  {
    name: 'Ramesh Gupta',
    title: 'Senior Marketing Manager',
    department: 'MARKETING',
    initials: 'RG',
  },
  {
    name: 'Amar Gupta',
    title: 'Liaisoning & Approvals',
    department: 'LIAISONING',
    initials: 'AG',
  },
  {
    name: 'Ashish Sahu',
    title: 'Civil Engineer',
    department: 'PROJECTS',
    initials: 'AS',
  },
];

export default function LeadershipSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-32 bg-[#EDE8DC]">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div
              className="opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards' : 'none' }}
            >
              <span className="text-eyebrow text-[#B8975A] block mb-4">Leadership</span>
              <div className="w-12 h-px bg-[#B8975A] mb-8" />
            </div>
            <h2
              className="font-display font-light text-[#1C1C1A] text-section-xl opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' : 'none' }}
            >
              Experience.<br />
              Execution.<br />
              <span className="italic text-[#1B4332]">Perspective.</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="text-[#6B6558] leading-relaxed opacity-0"
              style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards' : 'none' }}
            >
              Assotech Windsor Group is led by a management team combining decades of real-estate experience with next-generation thinking across development, operations, technology and strategic growth.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D8D2C4]/40">
          {leaders?.map((leader, i) => (
            <div
              key={leader?.name}
              className="group bg-[#EDE8DC] p-10 hover:bg-[#F8F6F0] transition-colors duration-500 opacity-0"
              style={{ animation: visible ? `slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.15}s forwards` : 'none' }}
            >
              {/* Portrait placeholder */}
              <div className="w-20 h-20 bg-[#1B4332] flex items-center justify-center mb-8">
                <span className="font-display text-2xl font-light text-[#F8F6F0]">{leader?.initials}</span>
              </div>

              <h3 className="font-display text-2xl font-light text-[#1C1C1A] mb-2 group-hover:text-[#1B4332] transition-colors duration-300">
                {leader?.name}
              </h3>
              <div className="text-eyebrow text-[#B8975A] mb-6">{leader?.title}</div>
              <div className="w-8 h-px bg-[#B8975A] mb-6 group-hover:w-16 transition-all duration-500" />
              <p className="text-[#6B6558] text-sm leading-relaxed">
                {leader?.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Staff Members Section */}
        <div className="mt-24">
          <div
            className="mb-12 opacity-0"
            style={{ animation: visible ? 'slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s forwards' : 'none' }}
          >
            <span className="text-eyebrow text-[#B8975A] block mb-4">Our Team</span>
            <div className="w-12 h-px bg-[#B8975A] mb-8" />
            <h3 className="font-display font-light text-[#1C1C1A] text-3xl">
              The People Behind <span className="italic text-[#1B4332]">Our Work</span>
            </h3>
          </div>

          {/* First row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D8D2C4]/40 mb-px">
            {staffMembers?.slice(0, 3)?.map((member, i) => (
              <div
                key={member?.name}
                className="group bg-[#EDE8DC] p-8 hover:bg-[#F8F6F0] transition-colors duration-500 opacity-0"
                style={{ animation: visible ? `slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) ${0.6 + i * 0.1}s forwards` : 'none' }}
              >
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-14 h-14 bg-[#B8975A]/20 border border-[#B8975A]/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-lg font-light text-[#B8975A]">{member?.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-light text-[#1C1C1A] group-hover:text-[#1B4332] transition-colors duration-300">
                      {member?.name}
                    </h4>
                    <span className="text-xs text-[#B8975A] uppercase tracking-widest">{member?.department}</span>
                  </div>
                </div>
                <div className="w-6 h-px bg-[#B8975A] mb-4 group-hover:w-12 transition-all duration-500" />
                <p className="text-[#6B6558] text-sm font-medium leading-relaxed">{member?.title}</p>
              </div>
            ))}
          </div>

          {/* Second row: 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D8D2C4]/40 md:w-2/3 md:mx-auto">
            {staffMembers?.slice(3)?.map((member, i) => (
              <div
                key={member?.name}
                className="group bg-[#EDE8DC] p-8 hover:bg-[#F8F6F0] transition-colors duration-500 opacity-0"
                style={{ animation: visible ? `slideInBlur 0.8s cubic-bezier(0.16,1,0.3,1) ${0.9 + i * 0.1}s forwards` : 'none' }}
              >
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-14 h-14 bg-[#B8975A]/20 border border-[#B8975A]/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-lg font-light text-[#B8975A]">{member?.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-light text-[#1C1C1A] group-hover:text-[#1B4332] transition-colors duration-300">
                      {member?.name}
                    </h4>
                    <span className="text-xs text-[#B8975A] uppercase tracking-widest">{member?.department}</span>
                  </div>
                </div>
                <div className="w-6 h-px bg-[#B8975A] mb-4 group-hover:w-12 transition-all duration-500" />
                <p className="text-[#6B6558] text-sm font-medium leading-relaxed">{member?.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
