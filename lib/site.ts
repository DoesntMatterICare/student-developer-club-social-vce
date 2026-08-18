export const siteConfig = {
  name: "SDC",
  fullName: "Student Developers Club",
  college: "Vardhaman College of Engineering",
  location: "Hyderabad",
  /** Set NEXT_PUBLIC_SDC_QR_CODE to the final hosted or public QR image path. */
  qrCodeSrc: process.env.NEXT_PUBLIC_SDC_QR_CODE || "/qr-placeholder.svg",
  social: {
    instagram: "https://www.instagram.com/studentdevelopersclub.vce?igsh=MWRmZ3J5Y3N4NnRscw%3D%3D",
    linkedin: "https://www.linkedin.com/company/student-developer-club-vce",
    discord: "#",
    email: "#",
    whatsapp: "https://chat.whatsapp.com/JC7wDp8Dbu4CX8Pf8nHxgd?s=sw&p=a&ilr=0",
  },
} as const;

