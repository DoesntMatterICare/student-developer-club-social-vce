"use client";
import type { CSSProperties, KeyboardEvent, PointerEvent, MouseEvent } from "react";
import { useState } from "react";
import { DiscordIcon, InstagramIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "@/components/icons";

type IconName = "discord" | "email" | "instagram" | "linkedin" | "whatsapp";

type SocialLinkProps = {
  handle: string;
  href: string;
  icon: IconName;
  name: string;
  status?: "live" | "coming-soon";
};

type Ripple = { id: number; x: number; y: number };

const icons = {
  discord: DiscordIcon,
  email: MailIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
};

export function SocialLink({ handle, href, icon, name, status = "live" }: SocialLinkProps) {
  const [ripple, setRipple] = useState<Ripple | null>(null);
  const [showError, setShowError] = useState(false);
  const Icon = icons[icon];
  const isExternal = href.startsWith("http");
  const isDisabled = status === "coming-soon";

  const createRipple = (x: number, y: number) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setRipple({ id: Date.now(), x, y });
  };

  const triggerError = () => {
    setShowError(true);
    window.setTimeout(() => setShowError(false), 2500);
  };

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled) {
      event.preventDefault();
      triggerError();
    }
  };

  const onPointerDown = (event: PointerEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    createRipple(event.clientX - bounds.left, event.clientY - bounds.top);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    // Prevent native Space-scroll / double-activation, then handle ourselves
    event.preventDefault();

    const bounds = event.currentTarget.getBoundingClientRect();
    createRipple(bounds.width / 2, bounds.height / 2);

    if (isDisabled) {
      triggerError();
    } else {
      event.currentTarget.click();
    }
  };

  const rippleStyle = ripple
    ? ({ "--ripple-x": `${ripple.x}px`, "--ripple-y": `${ripple.y}px` } as CSSProperties &
        Record<"--ripple-x" | "--ripple-y", string>)
    : undefined;

  return (
    <div className="social-redirect-wrap">
      <a
        className="social-redirect"
        href={isDisabled ? "#" : href}
        target={!isDisabled && isExternal ? "_blank" : undefined}
        rel={!isDisabled && isExternal ? "noreferrer" : undefined}
        aria-disabled={isDisabled}
        onClick={onClick}
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
      >
        <span className="social-redirect__icon">
          <Icon className="h-5 w-5" />
        </span>
        <span>
          <strong>{name}</strong>
          <small>{handle}</small>
        </span>
        <span aria-hidden="true" className="social-redirect__arrow">
          &#8599;
        </span>
        {ripple && (
          <span
            key={ripple.id}
            className="binary-ripple"
            aria-hidden="true"
            style={rippleStyle}
          />
        )}
      </a>
      {showError && (
        <p className="social-redirect__error" role="alert">
          {name} isn't set up yet - check back soon.
        </p>
      )}
    </div>
  );
}
