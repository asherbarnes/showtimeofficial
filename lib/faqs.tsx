import Link from "next/link";
import type { ReactNode } from "react";
import { links } from "./site";

/**
 * Official FAQs (S7: https://www.showtimebasketballacademy.com/showtime-faqs),
 * read in full on 2026-10-10. Answers marked "official" are the source text
 * verbatim (only formatting and link destinations changed). Answers marked
 * "interim" replace outdated Mindbody click-paths (PRODUCT 6.5, CONTENT_NEEDED B3)
 * and must be replaced with client-confirmed steps. Don't add questions that
 * aren't on S7.
 */

export type Faq = {
  id: string;
  question: string;
  answer: ReactNode;
  status: "official" | "interim";
};

export type FaqGroup = {
  id: string;
  title: string;
  faqs: Faq[];
};

const inlineLink = "font-semibold underline underline-offset-4 hover:text-amber-700";

function External({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={inlineLink}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/** Interim note shown where the official steps refer to a platform that is no longer current. */
function InterimSteps({ task }: { task: string }) {
  return (
    <>
      <p>
        We&rsquo;re confirming the current steps to {task} on our booking site. In the meantime, sign in through{" "}
        <External href={links.sessions}>Member Login &amp; Booking</External> or{" "}
        <External href={links.inquiry}>send us an inquiry</External>.
      </p>
    </>
  );
}

export const faqGroups: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    faqs: [
      {
        id: "sign-up",
        question: "How do I sign up?",
        status: "official",
        answer: (
          <>
            <p>
              Our Academy is a selective program, meaning you must go through a screening process <strong>before</strong>{" "}
              you are allowed to purchase a membership.
            </p>
            <p>Here&rsquo;s how to proceed:</p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                {/* S7 links "here" to /inquire, which returns 404; the homepage's inquiry destination is used instead. */}
                Apply for the Academy Evaluation <External href={links.inquiry}>here</External>.
              </li>
              <li>
                Our team member will reach out to you shortly. If everything checks out, you will be sent an evaluation
                email.
              </li>
              <li>Your child will come in for their evaluation.</li>
              <li>
                If our coaches feel as though your child brings the positive energy and impact we are looking for, our
                team member will then reach out with the results of the evaluations.
              </li>
              <li>
                Once everything is completed, we will send you all the details regarding the membership page. You will be
                able to purchase a membership then!
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "refer-a-friend",
        question: "How do I refer a friend that’s interested?",
        status: "official",
        answer: (
          <>
            <p>
              If your athlete has teammates, friends, or peers who are not currently enrolled but may be interested in the
              program, they are welcome to attend one free trial session.
            </p>
            <p>
              This trial session gives them the opportunity to experience the training environment, meet our coaches, and
              see if the program is a good fit. It also allows our staff to evaluate whether the athlete is a good fit for
              the group and program structure.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "sessions",
    title: "Cancellations and make-ups",
    faqs: [
      {
        id: "cancellation-policy",
        question: "What is the cancellation and make-up policy?",
        status: "official",
        answer: (
          <>
            <p className="type-label text-charcoal">Academy*</p>
            <p className="font-bold">Cancellations With More Than Six Hour&rsquo;s Notice</p>
            <p>
              If a player cancels a session with more than six hours&rsquo; notice, that session will be converted into a
              makeup session and placed into their makeup bank.
            </p>
            <p className="font-bold">Cancellations Within Six Hours</p>
            <p>
              If a player cancels within six hours of the session, that session will be lost unless there is a legitimate
              reason, such as injury or sickness.
            </p>
            <p className="font-bold">Makeup Session Limits</p>
            <p>
              Makeup sessions do not expire while the athlete remains actively enrolled, but each account may only hold a
              limited number of makeup credits at one time.
            </p>
            <table className="w-full max-w-md border-collapse text-left">
              <caption className="sr-only">Maximum makeup credits by membership</caption>
              <thead>
                <tr className="border-b-2 border-black">
                  <th scope="col" className="py-2 pr-4">
                    Membership
                  </th>
                  <th scope="col" className="py-2">
                    Max Makeup Credits Allowed
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Basic", "1 makeup credit"],
                  ["Essentials", "2 makeup credits"],
                  ["Plus", "3 makeup credits"],
                ].map(([plan, credits]) => (
                  <tr key={plan} className="border-b border-neutral-300">
                    <th scope="row" className="py-2 pr-4 font-normal">
                      {plan}
                    </th>
                    <td className="py-2">{credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              For example, an athlete on the Essentials Membership may not have more than two makeup sessions in their
              account at one time. Any missed sessions beyond that limit will not receive additional makeup credits.
            </p>
            <p className="font-bold">No-Call, No-Shows</p>
            <p>There will be no makeup session for no-call, no-shows.</p>
            <p className="font-bold">Showtime Coach Cancellations</p>
            <p>
              If a Showtime coach has to cancel a session, families will be provided with a makeup option within the same
              week whenever possible.
            </p>
            <p>
              If a makeup cannot be arranged within the same week, families can choose between a prorated session refund or
              to reschedule the session within the same week.
            </p>
            <p className="font-bold">Medical Pause Option</p>
            <p>
              If an athlete is injured or medically unable to participate for more than two consecutive weeks, families may
              request a temporary membership pause with written notice.
            </p>
            <p className="border-l-2 border-black pl-4 font-semibold">
              * These cancellations do not apply to Fundamentalist memberships. Fundamentalists must only provide advance
              notice if missing a session. There will be no rollover classes, however, makeup classes may be used within
              the billing period.
            </p>
          </>
        ),
      },
      {
        id: "cancel-a-session",
        question: "How do I cancel a session?",
        // S7 gives Mindbody Client Portal steps; Mindbody has no classes scheduled after 2026-10-10.
        status: "interim",
        answer: <InterimSteps task="cancel a session" />,
      },
    ],
  },
  {
    id: "drop-ins",
    title: "Drop-ins",
    faqs: [
      {
        id: "accept-drop-ins",
        question: "Do you accept drop ins?",
        status: "official",
        answer: (
          <p>
            {/* S7 links "this tab" to the Wix Memberships page; this site's equivalent section is used. */}
            Yes, we accept drop-ins. Drop-ins can be viewed on{" "}
            <Link href="/memberships#drop-ins" className={inlineLink}>
              this tab
            </Link>
            .
          </p>
        ),
      },
      {
        id: "purchase-drop-in",
        question: "How do I purchase a drop-in?",
        // S7's steps send families to the Wix Memberships page, whose buttons open a Mindbody store.
        status: "interim",
        answer: <InterimSteps task="purchase a drop-in" />,
      },
    ],
  },
  {
    id: "memberships",
    title: "Memberships and refunds",
    faqs: [
      {
        id: "cancel-membership",
        question: "How do I cancel/suspend my membership?",
        status: "official",
        answer: (
          <>
            <p>
              Membership cancellations and suspensions must be done through us. Please email us if you wish to cancel or
              suspend your membership.
            </p>
            {/* No email address is published anywhere (CONTENT_NEEDED B8). */}
            <p className="text-small text-neutral-600">
              Our email address will be listed here once it&rsquo;s confirmed. Until then,{" "}
              <External href={links.inquiry}>send us an inquiry</External>.
            </p>
          </>
        ),
      },
      {
        id: "refunds",
        question: "How do refunds work?",
        status: "official",
        answer: (
          <>
            <p>
              Refunds are only available for membership cancellations. Full refunds are given for cancellations within 7
              days of the payment. Half refunds are given within 14 days of the payment. No refunds after 15+ days of
              payment.
            </p>
            <p className="font-semibold">Please notify us if you decide to cancel your membership.</p>
          </>
        ),
      },
    ],
  },
];

export function faqsById(ids: string[]): Faq[] {
  const all = faqGroups.flatMap((group) => group.faqs);
  return ids.map((id) => {
    const faq = all.find((f) => f.id === id);
    if (!faq) throw new Error(`Unknown FAQ: ${id}`);
    return faq;
  });
}
