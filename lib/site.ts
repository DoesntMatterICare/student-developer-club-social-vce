export const siteConfig = {
  name: "SDC",
  fullName: "Student Developers Club",
  college: "Vardhaman College of Engineering",
  location: "Hyderabad",
  /** Set NEXT_PUBLIC_SDC_QR_CODE to the final hosted or public QR image path. */
  qrCodeSrc: process.env.NEXT_PUBLIC_SDC_QR_CODE || "/qr-placeholder.svg",
  social: {
    instagram: "#",
    linkedin: "https://www.linkedin.com/company/student-developer-club-vce",
    discord: "#",
    email: "mailto:studentdevelopersclub@vardhaman.org",
  },
} as const;
