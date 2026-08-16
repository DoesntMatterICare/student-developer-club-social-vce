import type { Metadata } from "next";
import "./globals.css";
import "./sdc-redesign.css";

export const metadata: Metadata = {
  title: { default: "SDC | Student Developers Club", template: "%s | SDC" },
  description: "Student Developers Club at Vardhaman College of Engineering, Hyderabad.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><div className="page-bg" aria-hidden="true" /><main>{children}</main></body></html>;
}
