// src/content/siteContent.ts
export const siteContent = {
  business: {
    name: "West London Auto Locksmith",
    tagline: "Vehicle Lockouts Only",
    phone: "020 3488 0390",
    phoneDisplay: "020 3488 0390",
    whatsappEnabled: false,
    whatsappNumber: "",
    baseArea: "Uxbridge",
    coverageRadius: "approximately 12 miles",
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
    googleReviewsUrl: "",   // add Google Maps reviews URL when available
    items: [] as Array<{
      name: string;
      rating: number;
      text: string;
      source: string;
      date?: string;
    }>,
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
    gaId: "",        // Google Analytics measurement ID - DO NOT enable until set
    gadsId: "",      // Google Ads conversion ID
    enabled: false,  // master switch - stays false until owner provides IDs
  },
  seo: {
    siteUrl: "https://westlondonautolocksmith.co.uk",   // placeholder until domain confirmed
  },
  legal: {
    privacyLastUpdated: "June 2025",
    cookiesLastUpdated: "June 2025",
  },
};
