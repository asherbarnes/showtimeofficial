import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProgramOverview } from "./ProgramOverview";
import type { Program } from "@/lib/programs";

/**
 * Program body from programs.html: the description after the hero's opening
 * paragraph, the four-part overview, and the program's Instagram post.
 */
export function ProgramAbout({ program }: { program: Program }) {
  const [, ...rest] = program.description;
  return (
    <Section labelledBy="overview-heading">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading id="overview-heading" eyebrow={program.requirement} title="Program overview" />
          <div className="max-w-(--container-prose) space-y-4">
            {rest.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {program.instagramPost && (
            <div className="mt-6">
              <Button href={program.instagramPost} variant="text">
                View on Instagram
              </Button>
            </div>
          )}
        </div>
        <div className="lg:col-span-7">
          <ProgramOverview items={program.overview} />
        </div>
      </div>
    </Section>
  );
}
