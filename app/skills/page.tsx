import { SectionHeading, Footer } from "../page";
import { skills, education } from "@/lib/data";

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 pt-10 md:pt-16">
      <SectionHeading
        title="skills.tsx"
        subtitle="// tools and technologies, grouped by domain"
      />

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h3 className="font-mono-display text-sm text-spring mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono-display px-2.5 py-1 rounded border border-border text-ink/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-border bg-surface p-5 mb-20">
        <h3 className="font-mono-display text-sm text-java mb-2">
          education
        </h3>
        <p className="text-ink text-sm">{education.degree}</p>
        <p className="text-muted text-xs font-mono-display mt-1">
          {education.duration}
        </p>
      </div>

      <Footer />
    </div>
  );
}
