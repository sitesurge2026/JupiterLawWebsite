import React from 'react';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center justify-start px-8 md:px-margin-edge overflow-hidden border-b border-outline-variant/20 pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover grayscale opacity-40"
            alt="Manchester skyline featuring Beetham Tower"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_Wx6awHut1nDqb28xep-jsIMNtmZsyZmnpke-CuGJVFPm1Ebo2rG66KlBNftBuYQ2soLtnQUBiEdy2a47bVafu6lMdhmQlrh9GJC2RTfVJIL_idwo6ITLDCaGGYBC7pQTA1WHYpqeKMuy4UQb9RhIX4jCNFZCsNGr_GkzyXZmJPhZaS3X31ErxeEcebpf50_pGZfT-nNmhwz2u8kiX0VCTwIC2IicYu0FhY35uYgwa8-tO77iSck02wNsIk3IyGKq_ZwT1bQqvHfh"
          />
        </div>
        <div className="relative z-20 max-w-4xl">
          <p className="font-label-caps text-label-caps text-secondary mb-4">ESTABLISHING AUTHORITY</p>
          <h1 className="font-display-hero text-display-hero text-on-background mb-6">Contact the Firm</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Providing sophisticated legal representation for high-stakes litigation and complex corporate advisory from our Manchester headquarters.
          </p>
        </div>
      </section>

      {/* Main Content (Bento Layout) */}
      <section className="px-8 md:px-margin-edge py-section-gap max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Enquiry Form Card */}
          <div className="md:col-span-7 bg-surface-container-low border border-outline-variant/20 rounded-lg p-10">
            <h2 className="font-headline-md text-headline-md text-on-background mb-8">Professional Enquiry</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">FULL NAME</label>
                  <input
                    className="bg-background border border-outline-variant/30 rounded-lg p-4 text-on-background focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline-variant"
                    placeholder="Johnathan Archer"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">EMAIL ADDRESS</label>
                  <input
                    className="bg-background border border-outline-variant/30 rounded-lg p-4 text-on-background focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline-variant"
                    placeholder="j.archer@corporate.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant">NATURE OF ENQUIRY</label>
                <select className="bg-background border border-outline-variant/30 rounded-lg p-4 text-on-background focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all">
                  <option>Commercial Litigation</option>
                  <option>Corporate Restructuring</option>
                  <option>Personal Injury</option>
                  <option>Immigration</option>
                  <option>Other Legal Matters</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant">MESSAGE</label>
                <textarea
                  className="bg-background border border-outline-variant/30 rounded-lg p-4 text-on-background focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline-variant"
                  placeholder="Please provide a brief overview of your legal requirements..."
                  rows="5"
                ></textarea>
              </div>
              <button
                className="w-full md:w-auto bg-secondary text-on-secondary px-12 py-4 rounded-lg font-button text-button uppercase hover:bg-secondary-fixed transition-all"
                type="submit"
              >
                Submit Case Enquiry
              </button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="md:col-span-5 space-y-8">
            {/* Office Card */}
            <div className="bg-surface-container border border-outline-variant/20 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">account_balance</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-background mb-1">Manchester Office</h3>
                  <p className="text-on-surface-variant">Headquarters &amp; Lead Litigation Hub</p>
                </div>
              </div>
              <div className="space-y-6 pt-6 border-t border-outline-variant/20">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-outline">location_on</span>
                  <div className="text-on-background">
                    <p className="font-semibold">Bartle House</p>
                    <p>Oxford Court</p>
                    <p>Manchester, M2 3WQ</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-outline">call</span>
                  <p className="text-on-background font-semibold">07711 287 111</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-outline">mail</span>
                  <p className="text-on-background">enquiries@jupiterlaw.co.uk</p>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-surface-container-highest border border-outline-variant/20 rounded-lg overflow-hidden h-80 relative group">
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Aerial view of Manchester legal district"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEUePMMIn0qlQXShmpAmq58lhJLU5yPbaele-bXh5Li_IlTdkf6SiSh-Qgogm_bLcGzq0HVcrppJ0lb93N5mhOJo8lfLhvPQ4moZ_OQlQBszfKeQlj0MFO8TFOBwrKBqh1W0kQz1W0zFnUjU1qJonqgf3mnpLej58wBNYo7keBEP4h2fk0R080Nfpvw5kwvmHQX_Xdc4XOEw2qgwJbrdBzYWtEYpv9-EWpn8R2wbc6GnK2txXceI7VWGFSYjm5sdhWY9fgv4CNOUZ1"
              />
              <div className="absolute bottom-4 left-4 z-20 glass-panel border border-outline-variant/20 px-4 py-2 rounded-lg">
                <p className="font-label-caps text-label-caps text-on-background">VIEW ON GOOGLE MAPS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-outline-variant/20 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale">
          <p className="font-label-caps text-label-caps text-outline w-full md:w-auto text-center md:text-left mb-4 md:mb-0">ACCREDITED BY</p>
          <div className="flex items-center gap-12 flex-wrap justify-center md:justify-end flex-1">
            <span className="text-xl font-bold tracking-widest text-on-surface">SOLICITORS REGULATION</span>
            <span className="text-xl font-bold tracking-widest text-on-surface">LEGAL 500</span>
            <span className="text-xl font-bold tracking-widest text-on-surface">CHAMBERS UK</span>
            <span className="text-xl font-bold tracking-widest text-on-surface">LAW SOCIETY</span>
          </div>
        </div>
      </section>
    </>
  );
}
