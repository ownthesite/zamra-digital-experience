import React from "react";

// ============================================================================
// CONFIGURATION & PLACEHOLDERS
// Update these values with the exact location and contact details.
// ============================================================================
export const LOCATION_CONFIG = {
  venueName: "Zamra International Convention & Exhibition Centre",

  addressLine1: "HMT Colony",
  addressLine2: "Near Government Medical College",
  locality: "Kalamassery",

  city: "Kochi",
  state: "Kerala",
  postalCode: "683503",

  // Replace these with the official details if different
  phone: "+91 98471 44445",
  alternatePhone: "+91 98471 33335",
  email: "info@zamrainternational.com",

  workingHours: "Monday – Sunday • 8:00 AM – 8:00 PM",

  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.4913652777464!2d76.3568512750319!3d10.058764390049696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d4fad4708f9%3A0x9852d623b23fd18d!2sZamra%20International%20Convention%20%26%20Exhibition%20Centre!5e0!3m2!1sen!2sin!4v1784639690537!5m2!1sen!2sin",

  googleMapsDirectionsUrl:
    "https://maps.app.goo.gl/HKdwEAUqQ6ZaRGuc7",

  coordinates: {
    lat: 10.0587644,
    lng: 76.3568513,
  },
};
const LOCATION_HIGHLIGHTS = [
  {
    icon: (
      <svg
        className="w-5 h-5 text-accent-hover"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Convenient Location",
    description:
      "Strategically located in Kalamassery, Kochi with excellent connectivity to major roads, business districts, and public transport.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-accent-hover"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    title: "Ample Parking",
    description:
      "Spacious on-site parking allows guests to arrive comfortably, making large weddings, exhibitions, and corporate events hassle-free.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-accent-hover"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Event-Ready Facilities",
    description:
      "Fully air-conditioned spaces, reliable power backup, and professional event infrastructure ensure a seamless experience from setup to celebration.",
  },
];
const VENUE_AMENITIES = [
  "Excellent Road Connectivity",
  "Ample Guest Parking",
  "Fully Air-Conditioned Facilities",
  "Professional Event Infrastructure",
];

export function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="container-zamra max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
       <div className="max-w-3xl">
  <p className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-hover mb-3">
    Visit Zamra
  </p>

  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-primary leading-tight">
    Easy to Reach.
    <br className="hidden sm:block" />
    <span className="font-heading font-medium">
      Impossible to Forget.
    </span>
  </h2>

  <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
    Conveniently located in Kochi, Zamra International Convention & Exhibition Centre
    offers excellent accessibility, ample parking, and modern facilities for events
    of every scale.
  </p>
</div>

        {/* Two-Column Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[520px] rounded-2xl overflow-hidden border border-border/60 shadow-sm transition-all duration-300 hover:shadow-md group">
              <iframe
                title="Zamra Convention Centre Location Map"
                src={LOCATION_CONFIG.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[0.25] contrast-[1.05] group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Subtle Map Badge */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-border/80 text-xs font-medium text-primary shadow-sm pointer-events-none">
                Kochi, Kerala
              </div>
            </div>
          </div>

          {/* Right Column: Location & Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-background p-6 sm:p-8 rounded-2xl border border-border/60 shadow-sm">
            <div>
              {/* Venue Title & Address */}
              <div className="border-b border-border/60 pb-6">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-accent-hover">
                  Official Venue
                </span>
                <h3 className="mt-1 font-heading text-2xl font-medium text-primary leading-snug">
                  {LOCATION_CONFIG.venueName}
                </h3>
                <address className="mt-3 not-italic text-sm text-muted-foreground leading-relaxed">
                  {LOCATION_CONFIG.addressLine1}
                  <br />
                  {LOCATION_CONFIG.city}, {LOCATION_CONFIG.state} – {LOCATION_CONFIG.postalCode}
                </address>
              </div>

              {/* Quick Venue Features / Amenities */}
              <div className="py-6 border-b border-border/60">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  Key Venue Accessibility
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {VENUE_AMENITIES.map((item) => (
                    <li key={item} className="flex items-center text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-hover mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="pt-6 space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface shrink-0 text-accent-hover">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Telephone</p>
                    <a href={`tel:${LOCATION_CONFIG.phone}`} className="font-medium text-primary hover:text-accent-hover transition-colors">
                      {LOCATION_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface shrink-0 text-accent-hover">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">General Enquiries</p>
                    <a href={`mailto:${LOCATION_CONFIG.email}`} className="font-medium text-primary hover:text-accent-hover transition-colors">
                      {LOCATION_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface shrink-0 text-accent-hover">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Hours</p>
                    <p className="font-medium text-primary">{LOCATION_CONFIG.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-3">
              <a
                href={LOCATION_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center h-11 px-5 rounded-full bg-primary text-primary-foreground text-xs font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-sm"
              >
                Get Directions
                <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href="#enquire"
                className="flex-1 inline-flex items-center justify-center h-11 px-5 rounded-full border border-primary/30 text-primary text-xs font-medium uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>

        {/* Location Highlight Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {LOCATION_HIGHLIGHTS.map((card) => (
            <div
              key={card.title}
              className="bg-background p-6 rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-4 group-hover:bg-accent-hover/10 transition-colors">
                  {card.icon}
                </div>
                <h4 className="font-heading text-lg font-medium text-primary">
                  {card.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
