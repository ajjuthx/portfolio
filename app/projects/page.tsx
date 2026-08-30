import { SectionHeading, Footer } from "../page";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 pt-10 md:pt-16">
      <SectionHeading
        title="projects.tsx"
        subtitle="// personal builds and client work"
      />

      <div className="grid sm:grid-cols-2 gap-5 pb-20">
        {projects.map((p) => (
          <div
            key={p.name}
            className="rounded-lg border border-border bg-surface p-5 hover:border-spring/60 transition-colors"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-mono-display text-ink text-base">
                {p.name}
              </h3>
              <span className="text-xs font-mono-display text-spring">
                {p.status}
              </span>
            </div>
            <p className="text-muted text-sm mt-2">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono-display px-2 py-0.5 rounded border border-border text-java"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
