// src/content/siteContent.ts
export const siteContent = {
  business: {
    name: "West London Auto Locksmith",
    tagline: "Vehicle Lockouts Only",
    phone: "020 3488 0390",
    phoneDisplay: "020 3488 0390",
    email: "info@westlondonautolocksmith.co.uk",
    whatsappEnabled: true,
    whatsappNumber: "447723191544",
    baseArea: "Uxbridge",
    coverageRadius: "12 miles",
    coverageAreas: [
      "Uxbridge", "Hayes", "Southall", "Hillingdon", "Ruislip",
      "Northolt", "Greenford", "Ealing", "Slough", "West Drayton",
      "Yiewsley", "Harlington"
    ],
  },
  pricing: {
    showFromPrice: false,          // set to true to show "from £100"
    fromPrice: "from £100",
    defaultWording: "Call for a clear price and estimated arrival time before we travel.",
    approvedWording: "Vehicle entry from £100 — final price and estimated arrival time confirmed before we travel.",
    priceConfirmBeforeTravel: true,
    paymentMethods: [] as string[],   // populate when known
  },
  reviews: {
    googleReviewsUrl: "https://www.google.com/maps/place/West+London+Auto+Locksmith/@51.5392625,-0.4712062,17.64z/data=!4m6!3m5!1s0x2341289f576a5e79:0x78ccd061f5531765!8m2!3d51.5391116!4d-0.4703696!16s%2Fg%2F11njc3_w5j?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D",
    items: [
      {
        name: "Jamie Allan",
        rating: 5,
        text: "Great service this morning, arrived in 20 minutes to assist the keys being locked inside a 2025 BMW X3. Within 10 minutes we had access back in to the car with no damage.\n\nProfessional and highly recommend.",
        source: "Google",
        date: "2 weeks ago",
      },
      {
        name: "Louis Debouze",
        rating: 5,
        text: "Locked my keys in my Lexus and he got it open quickly and without damage.",
        source: "Google",
        date: "1 week ago",
      },
    ],
  },
  recentJobs: {
    photos: [] as Array<{
      src: string;
      caption: string;
      area?: string;
      jobDescription?: string;
      alt: string;
    }>,
  },
  trust: {
    invoiceAvailable: false,
    companyRegistration: "",
    vatNumber: "",
    legalName: "",
    legalAddress: "",
    yearEstablished: "",
  },
  analytics: {
    gaId: "",        // Google Analytics 4 measurement ID (G-...) — none yet
    gadsId: "AW-18144470949",  // Google Ads tag ID (loaded in index.html)
    gadsCallConversionLabel: "AW-18144470949/OL0FCOf5wbgcEKXP-stD", // click-to-call conversion
    enabled: true,   // master switch — on now that the Google Ads tag is live
  },
  seo: {
    siteUrl: "https://westlondonautolocksmith.co.uk",   // placeholder until domain confirmed
  },
  legal: {
    privacyLastUpdated: "June 2025",
    cookiesLastUpdated: "June 2025",
  },
};
