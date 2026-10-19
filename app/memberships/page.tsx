import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Notice } from "@/components/ui/Notice";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { StepRail } from "@/components/sections/StepRail";
import { faqsById } from "@/lib/faqs";
import { flags } from "@/lib/flags";
import { acceptanceRule, dropIns, individualTraining, tiers } from "@/lib/memberships";
import { freeSessionLine } from "@/lib/enrollment";
import { links, primaryCta } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Memberships",
    description:
      "Memberships support weekly development inside Academy and Fundamentalist pathways. Acceptance into the program is required before purchase.",
    path: "/memberships",
  }),
  title: { absolute: "Memberships & Pricing | Showtime Basketball Academy" },
};

const plans = [
  { name: "Academy", key: "academy" },
  { name: "Fundamentalists", key: "fundamentalists" },
] as const;

// Membership content from the original repo's memberships.html (source of truth since 2026-10-19).
const value = [
  { title: "Structured Development", text: "Consistent weekly training inside a clear curriculum and coaching standard." },
  { title: "Small-Group Attention", text: "Groups sized for teaching (up to six athletes) so coaches can correct and challenge." },
];

const memberSteps = [
  { title: "Inquire", text: "Submit a free-session / general inquiry so the team can follow up." },
  { title: "Screening", text: "If everything checks out, you'll receive next steps for evaluation." },
  { title: "Evaluation", text: "Your athlete comes in so coaches can assess fit, energy, and readiness." },
  { title: "Membership", text: "If accepted, enroll through the memberships portal." },
];

// Same text as /faqs (single source in lib/faqs.tsx).
const policyFaqs = faqsById(["cancellation-policy", "cancel-membership", "refunds"]);

export default function MembershipsPage() {
  return (
    <>
      <PageHero
        title="Train Consistently"
        eyebrow="Memberships"
        lead="Memberships support weekly development inside Academy and Fundamentalist pathways, built around hard work, discipline, leadership, and growth beyond the court. Acceptance into the program is required before purchase."
      />

      <Section surface="neutral" labelledBy="overview-heading" compact>
        <SectionHeading
          id="overview-heading"
          eyebrow="Overview"
          title="How Membership Works"
          lead="Showtime is a selective development program. Families complete an inquiry/evaluation process before membership options are unlocked. Current plans and checkout live in the Showtime booking portal."
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={links.memberships} fullWidthMobile arrow>
            Browse &amp; Book Memberships
          </Button>
          <Button href={primaryCta.href} variant="secondary" fullWidthMobile arrow>
            {primaryCta.label}
          </Button>
        </div>
      </Section>

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
          <h3 className="type-h3">Ready to enroll?</h3>
          <p className="mt-2 max-w-(--container-lead) text-neutral-600">
            View live membership tiers, pricing, and availability in the Showtime booking portal. Plans update there first.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={links.memberships} fullWidthMobile arrow>
              Book Memberships
            </Button>
            <Button href={links.sessions} variant="secondary" fullWidthMobile arrow>
              Book Sessions
            </Button>
          </div>
        </div>
      </Section>

      <Section surface="neutral" labelledBy="value-heading">
        <SectionHeading
          id="value-heading"
          eyebrow="What's included"
          title="Membership Value"
          lead="Memberships support consistent weekly development inside Academy and Fundamentalist pathways: small-group coaching, structured progressions, and standards that carry beyond the court."
        />
        <ul className="grid gap-8 md:grid-cols-3">
          {value.map((item) => (
            <li key={item.title} className="border-t-2 border-black pt-5">
              <h3 className="type-h3">{item.title}</h3>
              <p className="mt-2 text-neutral-600">{item.text}</p>
            </li>
          ))}
          <li className="border-t-2 border-black pt-5">
            <h3 className="type-h3">Train at The Grove</h3>
            <p className="mt-2 text-neutral-600">
              Sessions run at The Grove in San Jose. Facility details are on{" "}
              <a href={links.grove} target="_blank" rel="noopener noreferrer" className="prose-link">
                thegrove.work
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </li>
        </ul>
      </Section>

      <Section id="how-to-become-a-member" labelledBy="become-heading">
        <SectionHeading
          id="become-heading"
          eyebrow="Get started"
          title="How to Become a Member"
          lead="Based on Showtime's current evaluation process. Exact steps may be confirmed during your inquiry."
        />
        <StepRail steps={memberSteps} />
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={links.memberships} fullWidthMobile>
            Book Memberships
          </Button>
          <Button href={primaryCta.href} variant="secondary" fullWidthMobile>
            {primaryCta.label}
          </Button>
          <Button href="/faqs" variant="text">
            Read FAQs
          </Button>
        </div>
      </Section>

      <Section surface="amber" id="waiver" labelledBy="waiver-heading" compact>
        <p className="type-label mb-3">Required</p>
        <h2 id="waiver-heading" className="type-h2">
          Waiver
        </h2>
        <p className="mt-4 max-w-(--container-lead)">
          Families must complete the Showtime Basketball Academy &amp; The Grove Waiver &amp; Release of Liability before
          participating in training.
        </p>
        <div className="mt-6">
          <Button href="/waiver#complete-waiver" surface="amber" fullWidthMobile>
            Read &amp; Sign Waiver
          </Button>
        </div>
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
