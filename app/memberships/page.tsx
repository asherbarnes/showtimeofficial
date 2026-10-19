import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Notice } from "@/components/ui/Notice";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faqsById } from "@/lib/faqs";
import { flags } from "@/lib/flags";
import { acceptanceRule, dropIns, individualTraining, tiers } from "@/lib/memberships";
import { academyPlacementLine, freeSessionLine, startLead } from "@/lib/enrollment";
import { links, primaryCta } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Memberships",
  description:
    "Showtime Basketball Academy membership plans for Academy and Fundamentalists. Memberships are available after acceptance into the program.",
  path: "/memberships",
});

const plans = [
  { name: "Academy", key: "academy" },
  { name: "Fundamentalists", key: "fundamentalists" },
] as const;

// Same official text as /faqs (single source in lib/faqs.tsx).
const policyFaqs = faqsById(["cancellation-policy", "cancel-membership", "refunds"]);

export default function MembershipsPage() {
  return (
    <>
      <PageHero title="Memberships" eyebrow="Plans" lead="Acceptance into a program comes first. Then choose how often your athlete trains." />

      <Section labelledBy="plans-heading">
        <div className="mb-10 max-w-(--container-prose)">
          <Notice label="Acceptance required">{acceptanceRule}</Notice>
        </div>
        <SectionHeading
          id="plans-heading"
          eyebrow="Monthly plans"
          title="Compare plans"
          lead="Each plan is a monthly membership. Choose how many sessions per week your athlete attends."
        />
        <table className="w-full max-w-4xl border-collapse text-left">
          <caption className="sr-only">Monthly membership price by plan for Academy and Fundamentalists</caption>
          <thead>
            <tr className="border-b-2 border-black">
              <th scope="col" className="type-label pr-3 pb-3 align-bottom">
                Plan
              </th>
              {plans.map((plan) => (
                <th key={plan.key} scope="col" className="pb-3 pl-2 align-bottom text-small font-bold sm:pl-3 sm:text-h4">
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier) => (
              <tr key={tier.name} className="border-b border-neutral-300">
                <th scope="row" className="py-5 pr-2 align-top sm:pr-3">
                  <span className="block type-h4">{tier.name}</span>
                  <span className="mt-1 block text-small font-normal text-neutral-600">
                    {tier.perWeek} {tier.perWeek === 1 ? "session" : "sessions"} per week
                    <span className="block sm:inline">
                      <span className="hidden sm:inline"> · </span>
                      {tier.perMonth} per month
                    </span>
                  </span>
                </th>
                {plans.map((plan) => (
                  <td key={plan.key} className="py-5 pl-2 align-top sm:pl-3">
                    {flags.showPricing ? (
                      <>
                        <span className="block font-display text-[2rem] leading-none sm:inline sm:type-stat">${tier[plan.key]}</span>
                        <span className="text-small text-neutral-600 sm:ml-1">per month</span>
                      </>
                    ) : (
                      <span className="text-neutral-600">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {flags.showPricing && (
          <div className="mt-12 grid max-w-4xl gap-10 md:grid-cols-2">
            <div id="drop-ins" className="scroll-mt-4">
              <h3 className="type-h3">Drop-in sessions</h3>
              <p className="mt-1 text-small text-neutral-600">Members only</p>
              <ul className="mt-4 border-t-2 border-black">
                {dropIns.map((dropIn) => (
                  <li key={dropIn.program} className="flex items-baseline justify-between gap-4 border-b border-neutral-300 py-3">
                    <span className="font-semibold">{dropIn.program}</span>
                    {dropIn.price !== null ? (
                      <span>
                        <span className="type-h4">${dropIn.price}</span>{" "}
                        <span className="text-small text-neutral-600">per session</span>
                      </span>
                    ) : (
                      <span className="text-small text-neutral-600">Ask us for the current price</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="type-h3">Individual Training</h3>
              <p className="mt-1 text-small text-neutral-600">1-on-1, 60 minutes, booked per session</p>
              <ul className="mt-4 border-t-2 border-black">
                {individualTraining.map((option) => (
                  <li key={option.level} className="flex items-baseline justify-between gap-4 border-b border-neutral-300 py-3">
                    <span className="font-semibold">With {option.withLevel}</span>
                    <span>
                      <span className="type-h4">${option.price}</span>{" "}
                      <span className="text-small text-neutral-600">per session</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-3">
                <Button href="/programs/individual-training#book" variant="text">
                  Book Individual Training
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Purchase links are for accepted families only (CONTENT_NEEDED B2). */}
        <div className="mt-14 max-w-4xl border-t-2 border-black pt-8">
          <h3 className="type-h3">Already accepted into a program?</h3>
          <p className="mt-2 max-w-(--container-lead) text-neutral-600">
            Purchase your membership on our booking site. New families start with an inquiry.
          </p>
          <div className="mt-5">
            <Button href={links.memberships} variant="secondary" fullWidthMobile>
              Purchase a membership
            </Button>
          </div>
        </div>
      </Section>

      <Section surface="neutral" id="how-to-become-a-member" labelledBy="become-heading">
        <SectionHeading
          id="become-heading"
          eyebrow="New families"
          title="How to become a member"
          lead={`${startLead} ${academyPlacementLine}`}
        />
        <Button href="/get-started" variant="text">
          See every step to get started
        </Button>
      </Section>

      <Section id="policies" labelledBy="policies-heading">
        <SectionHeading id="policies-heading" eyebrow="Policies" title="Cancellations, makeups and refunds" />
        <div className="max-w-4xl">
          <FaqAccordion faqs={policyFaqs} />
          <div className="mt-6">
            <Button href="/faqs" variant="text">
              All FAQs
            </Button>
          </div>
        </div>
      </Section>

      <CtaBand
        title="New to Showtime?"
        text={freeSessionLine}
        actions={
          <>
            <Button href={primaryCta.href} surface="dark" size="lg" fullWidthMobile arrow>
              {primaryCta.label}
            </Button>
            <Button href={links.sessions} variant="secondary" surface="dark" size="lg" fullWidthMobile>
              Member Login & Booking
            </Button>
          </>
        }
      />
    </>
  );
}
