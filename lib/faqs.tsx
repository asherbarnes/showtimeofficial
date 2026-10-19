import Link from "next/link";
import type { ReactNode } from "react";
import { business, fullAddress, links } from "./site";

/**
 * FAQs from the original repo's faqs.html (source of truth since 2026-10-19),
 * verbatim apart from formatting and link destinations. The cancel-a-session
 * steps are the repo's Mindbody steps; Minos is the current booking platform
 * (CONTENT_NEEDED B3).
 */

export type Faq = {
  id: string;
  question: string;
  answer: ReactNode;
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

const mindbodyPortal = "https://clients.mindbodyonline.com/classic/ws?studioid=5742717&stype=-98";

export const faqGroups: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    faqs: [
      {
        id: "sign-up",
        question: "How do I sign up?",
        answer: (
          <>
            <p>
              Our Academy is a selective program, meaning you must go through a screening process before you are allowed
              to purchase a membership. Here&rsquo;s how to proceed:
            </p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
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
        answer: (
          <>
            <p>
              If your athlete has teammates, friends, or peers who are not currently enrolled but may be interested in the
              program, they are welcome to attend one free trial session. This trial session gives them the opportunity to
              experience the training environment, meet our coaches, and see if the program is a good fit. It also allows
              our staff to evaluate whether the athlete is a good fit for the group and program structure.
            </p>
            <p>
              <External href={links.inquiry}>Get Your Free Session</External>
            </p>
          </>
        ),
      },
      {
        id: "academy-vs-fundamentalists",
        question: "What’s the difference between Academy and Fundamentalists?",
        answer: (
          <>
            <p>
              Our Fundamentalist Development program is geared toward newer athletes building foundational skills and
              confidence. Overall, it is a more beginner-friendly pathway.
            </p>
            <p>
              Academy is designed for more experienced athletes transitioning into higher competitive environments with
              advanced skill and game-situation work.
            </p>
            <p>
              See the{" "}
              <Link href="/programs" className={inlineLink}>
                Programs page
              </Link>{" "}
              for details.
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
        answer: (
          <>
            <p className="type-label text-charcoal">Academy</p>
            <p>
              <strong>Cancellations with more than six hours&rsquo; notice:</strong> If a player cancels a session with
              more than six hours&rsquo; notice, that session will be converted into a makeup session and placed into their
              makeup bank.
            </p>
            <p>
              <strong>Cancellations within six hours:</strong> If a player cancels within six hours of the session, that
              session will be lost unless there is a legitimate reason, such as injury or sickness.
            </p>
            <p>
              <strong>Makeup session limits:</strong> Makeup sessions do not expire while the athlete remains actively
              enrolled, but each account may only hold a limited number of makeup credits at one time.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Basic: 1 makeup credit</li>
              <li>Essentials: 2 makeup credits</li>
              <li>Plus: 3 makeup credits</li>
            </ul>
            <p>
              For example, an athlete on the Essentials Membership may not have more than two makeup sessions in their
              account at one time. Any missed sessions beyond that limit will not receive additional makeup credits.
            </p>
            <p>
              <strong>No-call, no-shows:</strong> There will be no makeup session for no-call, no-shows.
            </p>
            <p>
              <strong>Showtime coach cancellations:</strong> If a Showtime coach has to cancel a session, families will be
              provided with a makeup option within the same week whenever possible. If a makeup cannot be arranged within
              the same week, families can choose between a prorated session refund or to reschedule the session within the
              same week.
            </p>
            <p>
              <strong>Medical pause option:</strong> If an athlete is injured or medically unable to participate for more
              than two consecutive weeks, families may request a temporary membership pause with written notice.
            </p>
            <p className="border-l-2 border-black pl-4 font-semibold">
              These cancellations do not apply to Fundamentalist memberships. Fundamentalists must only provide advance
              notice if missing a session. There will be no rollover classes; however, makeup classes may be used within
              the billing period.
            </p>
          </>
        ),
      },
      {
        id: "cancel-a-session",
        question: "How do I cancel a session?",
        answer: (
          <>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Visit the <External href={mindbodyPortal}>Mindbody Client Portal</External>.
              </li>
              <li>Sign in.</li>
              <li>Make sure you&rsquo;re logged into your child&rsquo;s profile.</li>
              <li>Go to &ldquo;My Info&rdquo;.</li>
              <li>Go to &ldquo;My Schedule&rdquo;.</li>
              <li>Cancel the session you want.</li>
            </ol>
            <p>
              Now, you&rsquo;ve received that session back, which means you will be able to book another session on a
              different date under &ldquo;Classes&rdquo;.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "drop-ins",
    title: "Drop-ins",
    faqs: [
      {
        id: "accept-drop-ins",
        question: "Do you accept drop-ins?",
        answer: (
          <p>
            Yes, we accept drop-ins. Drop-ins can be viewed on the{" "}
            <External href={links.memberships}>Memberships</External> page.
          </p>
        ),
      },
      {
        id: "purchase-drop-in",
        question: "How do I purchase a drop-in?",
        answer: (
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              Visit our <External href={links.memberships}>Memberships</External> page.
            </li>
            <li>Scroll to the bottom.</li>
            <li>Select the drop-in you wish to purchase.</li>
            <li>Make sure you are logged into your child&rsquo;s account.</li>
          </ol>
        ),
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
        answer: (
          <p>
            Membership cancellations and suspensions must be done through us. Please{" "}
            <Link href="/contact" className={inlineLink}>
              contact Showtime
            </Link>{" "}
            or submit an <External href={links.inquiry}>inquiry</External> if you wish to cancel or suspend your
            membership.
          </p>
        ),
      },
      {
        id: "refunds",
        question: "How do refunds work?",
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
      {
        id: "roll-over",
        question: "Do you accept roll-over classes?",
        answer: <p>There will be no roll-over classes. You only get as many sessions as you pay for per month.</p>,
      },
      {
        id: "academy-frequency",
        question: "How many times a week is Academy?",
        answer: (
          <p>
            Showtime Basketball Academy runs year-round Mondays through Thursdays and Saturdays. The amount of classes you
            attend depends completely on the membership you purchase. View our{" "}
            <Link href="/memberships" className={inlineLink}>
              Memberships
            </Link>{" "}
            page for more information.
          </p>
        ),
      },
    ],
  },
  {
    id: "location",
    title: "Location",
    faqs: [
      {
        id: "where",
        question: "Where is Showtime located?",
        answer: (
          <>
            <p>
              Showtime trains at The Grove | San Jose:
              <br />
              {fullAddress}
            </p>
            <p>
              Phone:{" "}
              <a href={business.phone.href} className={inlineLink}>
                {business.phone.display}
              </a>
            </p>
            <p>
              <External href={links.maps}>Open in Google Maps</External> · <External href={links.grove}>thegrove.work</External>
            </p>
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
