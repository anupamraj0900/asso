import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#F8F6F0]">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#1B4332]">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8">
          <span className="text-eyebrow text-[#B8975A] block mb-6">Contact</span>
          <div className="w-12 h-px bg-[#B8975A] mb-10" />
          <h1 className="font-display font-light text-[#F8F6F0] text-section-xl max-w-3xl">
            Get in Touch with<br />
            <span className="italic text-[#B8975A]">Assotech Windsor.</span>
          </h1>
          <p className="text-[#F8F6F0]/50 mt-8 max-w-xl leading-relaxed">
            Whether you are interested in our developments, exploring a partnership, or discussing a technology project — we would like to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-5">
              <div className="mb-12">
                <div className="text-eyebrow text-[#B8975A] mb-4">Registered Office</div>
                <div className="w-8 h-px bg-[#B8975A] mb-6" />
                <p className="text-[#6B6558] leading-relaxed">
                  Assotech Windsor LLP<br />
                  Delhi, India
                </p>
              </div>

              <div className="mb-12">
                <div className="text-eyebrow text-[#B8975A] mb-4">Corporate Office</div>
                <div className="w-8 h-px bg-[#B8975A] mb-6" />
                <p className="text-[#6B6558] leading-relaxed">
                  Assotech Windsor LLP<br />
                  Noida, Uttar Pradesh<br />
                  India
                </p>
              </div>

              <div className="mb-12">
                <div className="text-eyebrow text-[#B8975A] mb-4">Phone</div>
                <div className="w-8 h-px bg-[#B8975A] mb-6" />
                <a
                  href="tel:+919311967199"
                  className="inline-flex items-center gap-2 text-[#1B4332] hover:text-[#B8975A] transition-colors text-sm font-medium"
                >
                  +91 9311967199
                </a>
              </div>

              <div className="mb-12">
                <div className="text-eyebrow text-[#B8975A] mb-4">Connect</div>
                <div className="w-8 h-px bg-[#B8975A] mb-6" />
                <a
                  href="https://www.linkedin.com/in/anupamrajsrivastav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1B4332] hover:text-[#B8975A] transition-colors text-sm font-medium"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://www.instagram.com/assotechwindsorgroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1B4332] hover:text-[#B8975A] transition-colors text-sm font-medium ml-6"
                >
                  Instagram →
                </a>
              </div>

              <div>
                <div className="text-eyebrow text-[#B8975A] mb-4">Windsor Heights</div>
                <div className="w-8 h-px bg-[#B8975A] mb-6" />
                <a
                  href="https://windsorheights.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1B4332] hover:text-[#B8975A] transition-colors text-sm font-medium"
                >
                  Visit Windsor Heights Website →
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <div className="text-eyebrow text-[#B8975A] mb-4">Send a Message</div>
              <div className="w-8 h-px bg-[#B8975A] mb-10" />
              <form
                action="https://formsubmit.co/windsorassotech@gmail.com"
                method="POST"
                className="flex flex-col gap-8"
              >
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New Contact Form Submission – Assotech Windsor" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://assotechwi3885.builtwithrocket.new/contact?submitted=true" />

                <div>
                  <label className="text-[11px] tracking-[0.12em] uppercase text-[#6B6558] block mb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="text-[11px] tracking-[0.12em] uppercase text-[#6B6558] block mb-3">Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Your phone number"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="text-[11px] tracking-[0.12em] uppercase text-[#6B6558] block mb-3">Message</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Your message"
                    rows={5}
                    className="input-field resize-none"
                  />
                </div>

                <div>
                  <button type="submit" className="btn-primary">
                    Send Message
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}