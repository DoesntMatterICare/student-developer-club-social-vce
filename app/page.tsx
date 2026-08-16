import { SdcMark } from "@/components/sdc-mark";
import { SocialLink } from "@/components/social-link";
import { siteConfig } from "@/lib/site";

const links = [
  { name: "Instagram", handle: "@sdc.vce", href: siteConfig.social.instagram, icon: "instagram" },
  { name: "LinkedIn", handle: "Student Developers Club", href: siteConfig.social.linkedin, icon: "linkedin" },
  { name: "Discord", handle: "Join the community", href: siteConfig.social.discord, icon: "discord" },
  { name: "Email", handle: "Write to the club", href: siteConfig.social.email, icon: "email" },
] as const;

export default function HomePage() {
  return <section className="link-hub"><div className="link-hub__inner">
    <header><SdcMark className="justify-center" /><p>Student Developers Club</p><span>Vardhaman College of Engineering, Hyderabad</span></header>
    <div className="link-hub__intro"><h1>Find SDC online.</h1><p>Follow the club, join the conversation, or send us a note.</p></div>
    <nav aria-label="Student Developers Club links" className="social-list">{links.map((link) => <SocialLink key={link.name} {...link} />)}</nav>
    <footer><span className="status-light" aria-hidden="true" />Built by students, for students.</footer>
  </div></section>;
}
