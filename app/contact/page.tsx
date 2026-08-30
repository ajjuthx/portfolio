import { SectionHeading, Footer } from "../page";
import { personal } from "@/lib/data";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";

const rows = [
  { icon: FaEnvelope, label: "email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: FaPhone, label: "phone", value: personal.phone, href: `tel:+91${personal.phone}` },
  { icon: FaMapMarkerAlt, label: "location", value: personal.location, href: undefined },
  { icon: FaGithub, label: "github", value: "github.com", href: personal.links.github },
  { icon: FaLinkedin, label: "linkedin", value: "linkedin.com", href: personal.links.linkedin },
  { icon: SiLeetcode, label: "leetcode", value: "leetcode.com", href: personal.links.leetcode },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 pt-10 md:pt-16">
      <SectionHeading title="contact.tsx" subtitle="// let's build something" />

      <div className="rounded-lg border border-border bg-surface overflow-hidden mb-20">
        <div className="flex items-center px-4 py-2 border-b border-border bg-surface-hi">
          <span className="font-mono-display text-xs text-muted">
            contact.sh
          </span>
        </div>
        <div className="p-5 md:p-6 font-mono-display text-sm space-y-3">
          {rows.map((row) => {
            const Icon = row.icon;
            const content = (
              <span className="flex items-center gap-3">
                <Icon className="text-spring shrink-0" />
                <span className="text-muted w-20 shrink-0">{row.label}</span>
                <span className="text-ink">{row.value}</span>
              </span>
            );
            return row.href ? (
              <Link
                key={row.label}
                href={row.href}
                target={row.href.startsWith("http") ? "_blank" : undefined}
                className="hover:text-spring transition-colors block"
              >
                {content}
              </Link>
            ) : (
              <div key={row.label}>{content}</div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
