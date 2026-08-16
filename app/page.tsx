import { DiscordIcon, InstagramIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { SdcMark } from "@/components/sdc-mark";
import { siteConfig } from "@/lib/site";

const links = [
  { name: "Instagram", handle: "@sdc.vce", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { name: "LinkedIn", handle: "Student Developers Club", href: siteConfig.social.linkedin, Icon: LinkedInIcon },
  { name: "Discord", handle: "Join the community", href: siteConfig.social.discord, Icon: DiscordIcon },
  { name: "Email", handle: "Write to the club", href: siteConfig.social.email, Icon: MailIcon },
] as const;

export default function HomePage() {
  return <section className="link-hub"><div className="link-hub__inner">
    <header><SdcMark className="justify-center" /><p>Student Developers Club</p><span>Vardhaman College of Engineering, Hyderabad</span></header>
    <div className="link-hub__intro"><h1>Find SDC online.</h1><p>Follow the club, join the conversation, or send us a note.</p></div>
    <nav aria-label="Student Developers Club links" className="social-list">{links.map(({ name, handle, href, Icon }) => <a key={name} className="social-redirect" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><span className="social-redirect__icon"><Icon className="h-5 w-5" /></span><span><strong>{name}</strong><small>{handle}</small></span><span aria-hidden="true" className="social-redirect__arrow">↗</span></a>)}</nav>
    <footer><span className="status-light" aria-hidden="true" />Built by students, for students.</footer>
  </div></section>;
}
