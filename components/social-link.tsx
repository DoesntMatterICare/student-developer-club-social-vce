"use client";

import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";
import { useState } from "react";
import { DiscordIcon, InstagramIcon, LinkedInIcon, MailIcon } from "@/components/icons";

type IconName = "discord" | "email" | "instagram" | "linkedin";

type SocialLinkProps = {
  handle: string;
  href: string;
  icon: IconName;
  name: string;
};

type Ripple = { id: number; x: number; y: number };

const icons = {
  discord: DiscordIcon,
  email: MailIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

export function SocialLink({ handle, href, icon, name }: SocialLinkProps) {
  const [ripple, setRipple] = useState<Ripple | null>(null);
  const Icon = icons[icon];
  const isExternal = href.startsWith("http");

  const createRipple = (x: number, y: number) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setRipple({ id: Date.now(), x, y });
  };

  const onPointerDown = (event: PointerEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    createRipple(event.clientX - bounds.left, event.clientY - bounds.top);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    createRipple(bounds.width / 2, bounds.height / 2);
  };

  const rippleStyle = ripple
    ? ({ "--ripple-x": `${ripple.x}px`, "--ripple-y": `${ripple.y}px` } as CSSProperties & Record<"--ripple-x" | "--ripple-y", string>)
    : undefined;

  return (
    <a className="social-redirect" href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} onPointerDown={onPointerDown} onKeyDown={onKeyDown}>
      <span className="social-redirect__icon"><Icon className="h-5 w-5" /></span>
      <span><strong>{name}</strong><small>{handle}</small></span>
      <span aria-hidden="true" className="social-redirect__arrow">↗</span>
      {ripple && <span key={ripple.id} className="binary-ripple" aria-hidden="true" style={rippleStyle} />}
    </a>
  );
}
