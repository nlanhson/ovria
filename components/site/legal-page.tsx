import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";

/** A paragraph, a bulleted list, a sub-heading inside a section, or a block of
 *  address-style lines kept on separate rows. */
export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "h3"; text: string }
  | { kind: "lines"; lines: string[] };

export type LegalSection = {
  /** Anchor slug — also used as the table-of-contents link target. */
  id: string;
  heading: string;
  blocks: LegalBlock[];
};

/** Shared shell for the legal pages (mentions légales, CGU, CGV, politique de
 *  confidentialité). Renders the title block, an anchor table of contents and
 *  the numbered sections, so each page file only carries its own text. */
export function LegalPage({
  title,
  intro,
  lastUpdated,
  sections,
}: {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <Reveal className="measure">
              <Eyebrow>Légal</Eyebrow>
              <h1 className="t-display-l mt-4 text-ink">{title}</h1>
              <p className="t-lead mt-6 text-ink-2">{intro}</p>
              <p className="t-caption mt-4 text-off">
                Version applicable à compter du {lastUpdated}
              </p>
            </Reveal>

            {/* Table of contents */}
            <Reveal delay={60} className="measure mt-12">
              <nav aria-label="Sommaire">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="t-body-sm text-ink-2 underline-offset-4 duration-250 hover:text-ink hover:underline"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>

            <Reveal delay={100} className="measure mt-12 space-y-10">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <h2 className="t-display-m text-ink">{section.heading}</h2>
                  {section.blocks.map((block, i) => {
                    switch (block.kind) {
                      case "p":
                        return (
                          <p key={i} className="t-body mt-4 text-ink-2">
                            {block.text}
                          </p>
                        );
                      case "h3":
                        return (
                          <h3 key={i} className="t-body mt-8 font-medium text-ink">
                            {block.text}
                          </h3>
                        );
                      case "lines":
                        return (
                          <p key={i} className="t-body mt-4 text-ink-2">
                            {block.lines.map((line, j) => (
                              <span key={j} className="block">
                                {line}
                              </span>
                            ))}
                          </p>
                        );
                      case "ul":
                        return (
                          <ul
                            key={i}
                            className="mt-4 space-y-2 ps-5 t-body text-ink-2 [&>li]:list-disc [&>li]:marker:text-off"
                          >
                            {block.items.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        );
                    }
                  })}
                </section>
              ))}
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
