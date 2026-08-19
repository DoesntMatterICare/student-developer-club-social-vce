type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>;
}
export function LinkedInIcon({ className }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor"><path d="M5.3 8.3H2.1V21h3.2V8.3ZM3.7 3A1.9 1.9 0 1 0 3.7 6.8 1.9 1.9 0 0 0 3.7 3ZM21.9 13.7c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2v-1.8h-3.2V21h3.2v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21h3.2l.7-7.3Z"/></svg>;
}
export function DiscordIcon({ className }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor"><path d="M19.5 5.2A16 16 0 0 0 15.6 4l-.5 1.1a14.6 14.6 0 0 0-6.2 0L8.4 4a16 16 0 0 0-3.9 1.2C2.1 8.8 1.5 12.3 1.8 15.7a15.7 15.7 0 0 0 4.8 2.4l1.2-1.6-1.7-.8.4-.3c3.3 1.5 7.7 1.5 11 0l.4.3-1.7.8 1.2 1.6a15.5 15.5 0 0 0 4.8-2.4c.4-4-.7-7.4-2.7-10.5ZM8.6 13.7c-1 0-1.8-.9-1.8-2s.8-2 1.8-2c1 0 1.8.9 1.8 2s-.8 2-1.8 2Zm6.8 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2c1 0 1.8.9 1.8 2s-.8 2-1.8 2Z"/></svg>;
}
export function MailIcon({ className }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
}
