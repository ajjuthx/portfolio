import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { experience, personal, projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6">
      {/* HERO — rendered as an editor window */}
      <section className="pt-10 md:pt-16 pb-20">
        <div className="rounded-lg border border-border bg-surface overflow-hidden shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-surface-hi">
            <span className="font-mono-display text-xs text-muted">
              Arjun.java
            </span>
            <span className="font-mono-display text-xs text-muted">UTF-8</span>
          </div>

          <div className="flex text-sm md:text-base leading-7 md:leading-8 font-mono-display">
            <div className="gutter-lines select-none text-right pr-3 pl-4 py-6 text-muted/50 hidden sm:block">
              {Array.from({ length: 11 }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <pre className="whitespace-pre-wrap px-4 sm:px-2 py-6 overflow-x-auto">
<span className="text-java">public class</span> <span className="text-spring">Arjun</span> {"{"}
{"\n"}  <span className="text-muted">{"// Pune, Maharashtra"}</span>
{"\n"}  <span className="text-java">String</span> name = <span className="text-spring">&quot;Arjun Dhande&quot;</span>;
{"\n"}  <span className="text-java">String</span> role = <span className="text-spring">&quot;Java Full Stack Developer&quot;</span>;
{"\n"}  <span className="text-java">String</span> stack = <span className="text-spring">&quot;Java · Spring Boot · React · SQL&quot;</span>;
{"\n"}  <span className="text-java">boolean</span> openToWork = <span className="text-spring">true</span>;
{"\n\n"}  <span className="text-java">public void</span> <span className="text-ink">build</span>() {"{"}
{"\n"}    <span className="text-muted">{"// ships end-to-end features, backend to browser"}</span>
{"\n"}  {"}"}
{"\n"}{"}"}
            </pre>
          </div>

          <div className="border-t border-border bg-[#0b0d0b] px-4 py-3 font-mono-display text-xs md:text-sm text-muted">
            <span className="text-spring">arjun@portfolio</span>
            <span className="text-muted">:~$ </span>
            mvn spring-boot:run
            <span className="caret text-ink">▍</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="max-w-2xl text-muted text-sm md:text-base">
            {personal.summary}
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href={personal.links.github}
              target="_blank"
              className="text-muted hover:text-spring transition-colors text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </Link>
            <Link
              href={personal.links.linkedin}
              target="_blank"
              className="text-muted hover:text-spring transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={personal.links.leetcode}
              target="_blank"
              className="text-muted hover:text-spring transition-colors text-xl"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE — rendered as a build log */}
      <section id="experience" className="pb-20">
        <SectionHeading title="experience.log" subtitle="// work history, most recent first" />

        <div className="space-y-6">
          {experience.map((job) => (
            <div
              key={job.company}
              className="rounded-lg border border-border bg-surface p-5 md:p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-mono-display text-spring text-base md:text-lg">
                  {job.role}{" "}
                  <span className="text-ink">
                    @ {job.company}
                  </span>
                </h3>
                <span className="font-mono-display text-xs text-java">
                  {job.duration}
                </span>
              </div>
              <p className="text-muted text-xs md:text-sm mt-1 font-mono-display">
                {job.location} · {job.type}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-ink/90">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-spring shrink-0">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {job.clientProjects && (
                <div className="mt-4 pt-4 border-t border-border/70">
                  <p className="font-mono-display text-xs text-muted mb-2">
                    client projects
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.clientProjects.map((cp) => (
                      <span
                        key={cp}
                        className="text-xs font-mono-display px-2 py-1 rounded border border-border text-ink/80"
                      >
                        {cp}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section id="projects" className="pb-20">
        <SectionHeading title="projects.tsx" subtitle="// a couple of things I've shipped" />
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.slice(0, 2).map((p) => (
            <div
              key={p.name}
              className="rounded-lg border border-border bg-surface p-5 hover:border-spring/60 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-mono-display text-ink text-base">{p.name}</h3>
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
        <div className="mt-6">
          <Link
            href="/projects"
            className="font-mono-display text-sm text-spring hover:underline"
          >
            View all projects →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="font-mono-display text-xl md:text-2xl text-ink">
        {title}
      </h2>
      <p className="font-mono-display text-xs md:text-sm text-muted mt-1">
        {subtitle}
      </p>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center">
      <p className="font-mono-display text-xs text-muted">
        {"// built by Arjun Dhande — "}
        <span className="text-spring">BUILD SUCCESS</span>
      </p>
    </footer>
  );
}
