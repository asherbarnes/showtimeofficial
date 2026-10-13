# Showtime Basketball Academy — Product Foundation

> Primary reference for Showtime's business information, content and conversion journeys for the Next.js rebuild.
> **Researched:** 2026-10-10. **Pricing re-verified:** 2026-10-10 against Wix, Minos and Mindbody (section 6). **FAQs re-read in full:** 2026-10-10 (section 6.5). **Status:** draft; nothing here has been confirmed by the client yet.

**Labels used throughout**

| Label | Meaning |
|---|---|
| **VERIFIED** | Supported by a current official source: the official Wix site or Showtime's live Minos Rec booking account. |
| **CONFLICTING** | Official or project sources disagree. Both claims are recorded. |
| **UNVERIFIED** | Appears only in the repo or a third-party source, or can't be checked. |
| **CLIENT INPUT** | Needs confirmation or a business decision. |

**Source hierarchy** (from the agency `CLAUDE.md`): client confirmation, then verified project docs, then current official sources, then historical or third-party sources. The source codes used below (S1, M3, R1 and so on) are defined in section 13.

Related documents:
- [`CONTENT_NEEDED.md`](CONTENT_NEEDED.md): client questions
- [`research/site-audit.md`](research/site-audit.md): Phase 1 audit
- [`research/migration-requirements.md`](research/migration-requirements.md): Next.js migration

---

## 1. Business Overview

| Fact | Status | Source |
|---|---|---|
| Legal/trading name: **Showtime Basketball LLC**, trading as Showtime Basketball / Showtime Basketball Academy | VERIFIED | S1 footer ("© SHOWTIME BASKETBALL LLC \| EST. 2017") |
| Established **2017** | VERIFIED | S1 footer, all pages |
| Youth basketball player-development academy in San Jose, CA, training year-round | VERIFIED | S1 home; S2 ("year-round development system"); G1 ("our year-round basketball school") |
| Trains at **The Grove**, 2099 S 10th St, **Unit 90**, San Jose, CA 95112 | VERIFIED | S10/S11 event pages give the full address with Unit 90. M1 gives it without the unit. |
| Offers group programs (Academy, Fundamentalists), 1:1 Individual Training, and a planned Athletic Development program | VERIFIED | S1, M2, M3 |
| Sells monthly memberships and per-session bookings through **Minos Rec** | VERIFIED | M2, M3 (live, with October 2026 dates) |
| Possible competitive or "Select" team program | UNVERIFIED | See section 5.5 |

## 2. Target Audiences

| Audience | What they need answered before acting |
|---|---|
| **A. Parents researching programs** (primary decision-maker and payer) | What is Showtime and is it credible? Which program fits my child's age and experience? Cost? Where and when? Is it safe and well-run? What's the first step, and is it free? |
| **B. Athletes seeking structured development** | Will I get better? What do sessions involve? Who coaches? How do I qualify for Academy? |
| **C. Families comparing memberships** | Tier differences (1×, 2× or 3× a week), price, cancellation, makeups and refunds; whether acceptance is needed before buying |
| **D. Individual-training prospects** | 1:1 vs small group, coach level, price ($80/$100), duration, how to book, whether an evaluation is needed |
| **E. Existing members** | Where to log in, book, cancel or make up a session; drop-ins; policies; the waiver |
| **F. Event visitors** | What's coming up, eligibility (grade or club), cost, how to RSVP |

Parents (A) and families comparing memberships (C) drive conversion. Existing members (E) need a fast utility path that doesn't pass through marketing pages.

## 3. Positioning and Value Proposition

### 3.1 Existing official positioning (VERIFIED, S1 home)

- Headline: **"South Bay's Premier Training Program"**. This is an unsubstantiated superlative; see section 14.
- **"Developing complete basketball players through intentional coaching, small-group training, and a foundation-first approach."**
- "A development-first basketball academy built around long-term athlete growth. We are not an AAU-first program, and we're more than just a training gym."
- Focus areas: skill development, basketball IQ, foundational habits and character.
- "Athletes train in small groups of up to six players". Note that Minos lists a session size of up to 25 (section 14, C7).
- **"Foundation before exposure."** Prioritizes "fundamentals, basketball literacy, and sustainable development".
- Pillars (icon labels): Progressive Skill Development · Experienced Coaches · Building Life Skills.
- Offer: **"Your first session is free! Get a feel of our program before committing. Try one of our small group sessions."**
- Brand line: **"It's Showtime"** (hero wordmark); og:description ends "it's SHOWTIME!".

### 3.2 Repo-only language (UNVERIFIED, CLIENT INPUT)

- The repo's "**Our Mission**" paragraph ("Showtime Basketball builds athletes through a culture of hard work, discipline, and leadership, using basketball as a platform for intentional coaching and mentorship…") appears **on no official page**. Its source is unknown.
- **Do not present it as the official mission** until the client confirms it.
- "Development Before Exposure" (repo) is a variant of the official "Foundation before exposure".

### 3.3 Observations

- The strongest differentiators are a clear stance against AAU-first, exposure-first programs; small-group teaching; selective Academy admission based on coachability and culture fit; and a dedicated high-end facility.
- Two credibility signals are under-used: coach credentials (ACSM and NASM certifications, Pure Sweat licence, SJCC role) and player pathways (Hall of Fame, once verified).

### 3.4 Proposed improvements (recommendations, not policy)

- Lead with the parent outcome and the first step: a free first session, with the Academy placed by evaluation. Keep "It's Showtime" as the brand voice, not the explanation.
- Replace "Premier" with provable specifics: Est. 2017, a 10,000 sq ft facility, certified coaches, small-group format.
- Use one canonical philosophy statement instead of repeating a mission paragraph about 10 times.

## 4. Training Philosophy

| Element | Status | Source |
|---|---|---|
| Foundation before exposure; development-first; not AAU-first | VERIFIED | S1 |
| Small groups (up to six); individual attention; learning to communicate and compete in any team setting | VERIFIED (size CONFLICTING) | S1 vs M4 |
| **L.E.A.D. Standards**: Leadership, Effort, Attitude, Discipline. Families are encouraged to embrace them. | VERIFIED as current: on 3 standing pages | S2, S3, S4 |
| **H.E.L.D. Standards**: Hard Work, Energy, Leadership, Discipline | CONFLICTING: appears once, in a March 2025 event recap | S9 |
| Academy evaluation criteria: **Coachability, Response to Adversity + Feedback, Cultural Fit (Effort, Attitude, Team Mindset)** | VERIFIED | S6 (step-image on `/how-to`) |
| Academy prepares players for "Junior Varsity-level play and beyond" through scrimmages and competitive scenarios | VERIFIED | S3, M4 |

## 5. Program Inventory

Imagery references are files under `assets/img/` (see section 12.4).

### 5.1 Academy

| Field | Detail |
|---|---|
| Official name | "Academy". The Minos group class is titled "Academy" but listed as **"G - Silver 2"** (M4). |
| Description | Helps players transition to competitive basketball. Advanced techniques, rigorous drills, offensive and defensive skills, team dynamics, scrimmages. Prepares for JV-level play and beyond. (S3, M4) |
| Audience | Experienced young athletes ready for more challenging environments |
| Age | **Not stated anywhere.** CLIENT INPUT. |
| Experience | **CONFLICTING:** "2.5+ years" (S1 home card) vs **"3+ years"** (S3, M2, M4) |
| Team requirement | "On a club or school team" (S3); "currently competing on a club or school team" (M2, M4). The repo softened this to "often already participating". |
| Key performance indicators | Finishing at the rim from various angles; perimeter and mid-range shooting off the dribble; physicality on protection and drives; defensive fundamentals (closeouts, box outs, gap and rotation); leadership and concise communication (S3) |
| Format | 60-minute group sessions across Hoops 1–4. Minos session size "up to 25" (M4). Official site says small groups of up to six (S1). |
| Schedule (Minos, 2026-10-10) | Mon–Sat. Weekday starts from 3 PM to 7 PM (Fridays included); Saturdays 10–11 AM. Times change, so link to Minos rather than hard-coding them. |
| Pricing | Memberships: Basic $240/mo (1×/wk), Essential(s) $440/mo (2×/wk), Plus $600/mo (3×/wk). VERIFIED on both S5 and M2 (re-checked 2026-10-10). Drop-in **$65**: "members only" on S5; $65/player on M4 and M3. Not listed on S15. See section 6. |
| Enrollment | Selective. Must be accepted before buying a membership (S5). 5-step evaluation (S6, S7). See section 7. |
| Registration URL | Inquiry/evaluation: `https://minosrec.com/showtime-basketball-academy/general-inquiry` (linked from S1). Memberships: M2. Class: `https://minosrec.com/showtime-basketball-academy/group-lesson/lesson/100`. |
| Imagery | `photo-academy-session.png`, `photo-defensive-drill.png`, `photo-grove-session.png`, `photo-team-huddle.png` |
| Missing | Ages; coaches by level; what "Academy tiers" and "Silver 2" mean; the true group size |

### 5.2 Fundamentalists

| Field | Detail |
|---|---|
| Official name | "Fundamentalists". Also "Fundamentalist Class" and "Fundamentalist: Development" on S5. |
| Description | Cultivates young players through essential skills while "fostering a deep love for the game". Age-appropriate instruction, personalized feedback, teamwork, sportsmanship, positive mindset. (S4, M5) |
| Audience | Entry-level and developing players (S1: "For entry-level basketball athletes") |
| Age | **Not stated.** CLIENT INPUT. |
| Experience | **At least one year** of playing experience (S4, M2, M5). VERIFIED and consistent. |
| Skills | Two-handed ball handling and finishing; reliable stationary mid-range jump shot; on-ball and help defense; low/mid-post footwork; communication (S4) |
| Format | 60-minute group class, Main Court; coach **Lam Pham**; session size "up to 25" (M5) |
| Schedule (Minos, 2026-10-10) | Mon–Thu 5–6 PM; Sat 9–10 AM (M5) |
| Pricing | Basic $200/mo (1×/wk), Essential(s) $330/mo (2×), Plus $400/mo (3×). VERIFIED on S5 and M2 (re-checked 2026-10-10). S15 lists a different set (section 6.2). Drop-in **CONFLICTING**: $55 "members only" (S5, S15) vs $60 (M3, M5, MB1). |
| Enrollment | **Unclear** whether evaluation is required. S5 says acceptance is needed before any membership; the FAQ (S7) describes evaluation only for "our Academy". CLIENT INPUT. |
| Cancellation | Different from Academy: advance notice only, no rollover, makeups within the billing period (S7) |
| Imagery | `photo-ballhandling-drill.png`, `photo-youth-coaching.png`, `photo-shooting-form.png` |
| Missing | Ages or grades; whether evaluation is required; pathway criteria to Academy |

### 5.3 Individual Training

| Field | Detail |
|---|---|
| Official name | "Individual Training" |
| Description | Work on specific mechanics, habits or areas of refinement at the athlete's own pace: shooting mechanics, footwork, ball-handling details, finishing, movement patterns (S8) |
| Format | **1-on-1** and **small-group individual training** (S8). Minos lists 1-on-1 only, 60 minutes (M6, M7). |
| Levels and pricing (Minos) | **w/ Academy Coach $80/session** (instructors Lam Pham, Ronmar Taal); **w/ Master Coach $100/session** (Derrick Nguyen, Ant Gardner) (M6, M7) |
| Cancellation | "Cancel or reschedule up to 1 day before your session for a full refund" (M6, M7) |
| Enrollment | Two official paths: the Wix **Individual Training Inquiry** form (S12: athlete name, gender, age, years of experience; guardian name, phone, email; reason; referral source) **and** direct booking on Minos ("Continue to book"). Whether an evaluation or inquiry is required first: CLIENT INPUT. |
| Age/experience | Not stated |
| Imagery | `photo-individual-form.png`, `photo-shooting-form.png` |
| Missing | Small-group IT pricing; packages; replacement for the Wix inquiry form (it disappears when the site leaves Wix) |

### 5.4 Athletic Development

| Field | Detail |
|---|---|
| Status | **Not launched.** The home card links to an unedited Wix "We Are Coming Soon" template (S13). `/athleticdevelopment` exists in the sitemap but has no content. Not on Minos. |
| Description | "Developing strength, balance, stability, body control, coordination, injury prevention habits, and overall athletic foundation." (S1) |
| Likely lead | Coach Kimo, Athletic Director (NASM CPT, CES, CNC) (S2). The link to this program is an inference. |
| Imagery | `photo-agility-ladder.png`, `photo-ladder-coach.png`, `photo-coaching-strength.png` |
| Missing | Everything operational. CLIENT INPUT on whether to show it at launch. |

### 5.5 Possible Select / competitive team program (UNVERIFIED)

The evidence is suggestive but not proof:
- **Coach Jorge — "Head of Select Development"** (S2, official)
- An Instagram post embedded on the repo's Academy section shows a **"SELECT"** graphic (`instagram.com/p/DVhbzSeD7V_/`)
- The Mindbody class schedule for the week of 2026-10-05 (MB2) includes a 90-minute **"Select"** class, and age-group classes named 10U–17U BOYS/GIRLS. Those don't appear on Minos, which lists Academy groups as "G - Silver 2", "B - Silver 1", "B - Gold 1" and so on.
- A Bay Hoops directory lists **"Showtime - SBA"** as an AAU, competitive program, boys and girls, ages 10–18, "approx $400/mo", at 2099 S 10th St Unit 90. It was added 2025-03-05 and is third-party (X1).
- The `/how-to` page refers to placement into "**Academy tiers**" (S6), and the Minos Academy class is named "**G - Silver 2**" (M4). Levels exist, but nothing explains them.

There is tension with the official "not an AAU-first program" positioning. **Do not publish anything about Select until the client confirms it.**

### 5.6 Other offerings seen on Minos (not presented on the official site)

- **Court rentals** (Main Court, Half Courts 1–2, Hoops 1–4; "From $40") under the Showtime Basketball Minos account (M1). This is probably The Grove's facility business. CLIENT INPUT on whether it belongs on the Showtime site.

## 6. Memberships and Pricing

**Verified 2026-10-10** by reading each source directly: Wix `/memberships` (S5), Wix `/pricing-plans/list` (S15), Minos memberships and sessions (M2–M7), and the Mindbody store the Wix "PURCHASE" buttons link to (MB1). No purchase was attempted.

### 6.1 Prices shown on the new site (agree across current sources)

| Offering | Sessions | Academy | Fundamentalists | Sources | Status |
|---|---|---|---|---|---|
| **Basic** membership | 1 per week · 4 per month | $240/month | $200/month | S5, M2 | VERIFIED |
| **Essentials** membership | 2 per week · 8 per month (Minos: "up to 2 sessions per week") | $440/month | $330/month | S5, M2 | VERIFIED price; **name CONFLICTING** ("ESSENTIAL" on S5; "Essentials" on M2, S7), C9 |
| **Plus** membership | 3 per week · 12 per month (Minos: "up to 3 sessions per week") | $600/month | $400/month | S5, M2 | VERIFIED |
| Drop-in (members only) | 1 session | **$65** | **$55 or $60** | Academy: S5, M3, M4. Fundamentalists: see C8 | Academy VERIFIED; Fundamentalists **CONFLICTING** |
| Individual Training, 1-on-1, 60 min | per session | $80 with an Academy Coach · $100 with a Master Coach | | M3, M6, M7, MB1 | VERIFIED |

- Plans are monthly ("per month" on S5; "Monthly" on M2). No discounts, packages, sibling rates, contracts or sign-up fees appear on any source. Don't add any.
- Wix lists sessions per week and per month. Minos says "up to" N sessions per week for Essentials and Plus, and "1x/week" for Basic.
- The new site shows the VERIFIED prices above, behind `flags.showPricing` (turned on 2026-10-10 at the agency's direction). It does **not** show a Fundamentalists drop-in price until C8 is resolved.

### 6.2 The `/pricing-plans/list` catalogue (S15): conflicting, probably legacy

S15 is a live Wix Pricing Plans page. It isn't in the site navigation, and neither the homepage nor the FAQ page links to it. The Wix `pricing-plans-sitemap.xml` (S16) lists only `/pricing-plans/do-not-go-here` (lastmod 2026-05-28), while the main pages' lastmod is 2026-09-18. It shows:

| Plan on S15 | Price | Details on S15 | Matches S5/M2? |
|---|---|---|---|
| Fundamentalist: Drop-In | $55 | "Valid for 7 days", 1-day drop-in, 1-hour class | Matches S5 ($55); conflicts with M5/MB1 ($60) |
| Fundamentalist: Basic Membership | $200 every month | 1 class per week, 1-hour class | Yes |
| Fundamentalist: Plus Membership | $400 every month | "2 Classes A Week + A Saturday" | Same price; the frequency is worded differently from S5/M2's "3 per week" |
| Fundamentalist: Premium Plan | $600 every month | "Attendance: Up to 5x A Week" | **Not on S5 or M2** |
| Select & Elite: Drop-In | $77 | "Access to Our Select OR Elite Classes", 1.5-hour class, valid 7 days | **Not on S5 or M2** |
| Select & Elite: Basic Membership | $300 every month | 1 class per week, 1.5-hour class | **Not on S5 or M2** |
| Select & Elite: Plus Membership | $600 every month | 2 classes a week + a Saturday | **Not on S5 or M2** |
| Select & Elite: Premium Membership | $900 every month | Up to 5× a week | **Not on S5 or M2** |

- S15 has **no Academy plans** and **no Fundamentalists Essentials** plan.
- S15 also says: "Memberships can only be purchased by those who have been accepted into the program." It adds: "We only accept the payment through Debit/Credit Cards or Apple/Google Pay."
- **Don't publish anything from S15** that isn't also on S5 and M2, especially Select & Elite (section 5.5, C12). Recorded as C13.

### 6.3 Purchase destinations

| Destination | What it offers (2026-10-10) | Use on the new site |
|---|---|---|
| Minos memberships (M2) | All six Academy and Fundamentalists plans, with public "Purchase" buttons | **Accepted families only**, labelled as such on `/memberships` (B2) |
| Minos sessions (M3) | Academy class $65, Fundamentalists class $60, Individual Training $80/$100 | Member Login & Booking; Individual Training booking (M6, M7) |
| Mindbody (MB1), linked from the S5 "PURCHASE" buttons | A generic store. "FUNDAMENTALISTS" offers only "Fundamentalists: Drop-In $60.00"; "Personal Training" offers Individual Training $80 and $100. **No membership products.** | **Don't link.** The S5 purchase buttons don't lead to the memberships they sit under. |

### 6.4 Rules

**Source:** the policies below come from the official FAQ page (S7), which is authoritative for them (6.5).

- "You must be accepted into the program before purchasing a membership." (S5, VERIFIED official statement; re-checked 2026-10-10.) S15 says the same: "Memberships can only be purchased by those who have been accepted into the program." Minos nonetheless shows public **Purchase** buttons. Whether Minos enforces acceptance is unknown; testing it would need an account and a purchase, so it was not tested.
- Makeup credit caps: Basic 1, Essentials 2, Plus 3. These are Academy rules. (S7)
- Academy cancellation: more than 6 hours' notice converts the session to a makeup credit; within 6 hours it is lost unless there is a legitimate reason; no-call no-shows get no makeup; coach cancellation means a makeup the same week or a prorated refund; a medical pause is available after more than 2 weeks, with written notice. (S7)
- Fundamentalists: advance notice only; no rollover; makeups within the billing period. (S7)
- Refunds: membership cancellations only. Full refund within 7 days of payment, half within 14 days, none after "15+ days". (S7) Day 14–15 is undefined.
- Cancelling or suspending a membership "must be done through us… Please email us" (S7). **No email is published anywhere.**
- Minos per-session cancellation, "up to 1 day before… full refund" (M5–M7), **differs from the FAQ's 6-hour rule**. They may cover different products. CLIENT INPUT.

**Publishing:** prices are already public on S5 and M2. The new site shows the VERIFIED prices in 6.1 as of 2026-10-10 (agency decision). The client should still confirm them before launch (CONTENT_NEEDED B5).

### 6.5 Official FAQs (S7): authoritative source for FAQ content and policies

**The official FAQ page, https://www.showtimebasketballacademy.com/showtime-faqs (S7), is the authoritative source for FAQ content and for the cancellation, make-up, membership-cancellation, refund, drop-in and referral policies.** When another source disagrees with S7, record the conflict (section 14) rather than overriding S7. Read in full on 2026-10-10. It has exactly **8 questions**:

| # | Question (verbatim) | Substance | New site |
|---|---|---|---|
| 1 | How do I sign up? | Academy is selective; screening comes **before** purchase. 5 steps: apply for the Academy Evaluation, team member reaches out and sends an evaluation email, evaluation, results if coaches feel the child brings "the positive energy and impact we are looking for", then membership details are sent and the family can purchase. | Verbatim. The "here" link points to `/inquire`, which **returns 404**; the new site uses the Minos general inquiry (C15). |
| 2 | What is the cancellation and make-up policy? | Academy only: more than 6 hours' notice converts to a makeup credit; within 6 hours the session is lost unless there is a legitimate reason (injury, sickness); makeups don't expire while enrolled; caps are Basic 1, Essentials 2, Plus 3; no makeup for no-call no-shows; coach cancellations mean a same-week makeup, or a choice of prorated refund or same-week reschedule; medical pause after more than 2 consecutive weeks, with written notice. Fundamentalists: advance notice only, no rollover, makeups within the billing period. | Verbatim (also on `/memberships`) |
| 3 | How do I cancel a session? | 6 steps in the **Mindbody** Client Portal (My Info → My Schedule → cancel; rebook under "Classes") | **Not published.** Interim note pointing to Member Login & Booking and the inquiry form (C16) |
| 4 | How do I purchase a drop-in? | Wix Memberships page → scroll to the bottom → select the drop-in (logged into the child's account). Those buttons open **Mindbody**. | **Not published.** Same interim note (C16) |
| 5 | How do I cancel/suspend my membership? | Must be done "through us. Please email us". **No email address is published** (B8). | Verbatim, plus a note to send an inquiry until an email is published |
| 6 | How do refunds work? | Membership cancellations only: full refund within 7 days of payment, half within 14 days, none after "15+ days". "Please notify us if you decide to cancel your membership." | Verbatim. Day 14–15 is undefined (I12). |
| 7 | Do you accept drop ins? | "Yes, we accept drop-ins." Links to the Memberships page. | Verbatim; links to `/memberships#drop-ins` |
| 8 | How do I refer a friend that's interested? | Non-enrolled teammates, friends or peers may attend **one free trial session**, which also lets staff evaluate fit. | Verbatim |

The new site groups them as Getting started (1, 8), Cancellations and make-ups (2, 3), Drop-ins (7, 4), and Memberships and refunds (5, 6). Content lives in `lib/faqs.tsx`. **No other FAQs are published**; the repo-only FAQs (section 12.1, I16) remain excluded.

**Booking platform (checked 2026-10-10 for questions 3 and 4):** Mindbody's class schedule (MB2) has classes through the week of 5–10 October 2026 and **no classes from 12 October onward**, checked through 22 November 2026. Minos has Academy and Fundamentalists sessions from 12 October onward (M3–M5). **Minos is the current booking platform for upcoming sessions.** The cut-over date is inferred from the schedules and not confirmed by the client (C4). Mindbody's click-paths are therefore not published.

## 7. Enrollment and Conversion Journeys

### 7.1 Official process as documented (VERIFIED, Academy)

**`/how-to` step image (S6):**
1. Fill out the **Academy Evaluation Form**.
2. A team member reaches out to schedule an evaluation.
3. Attend the evaluation, which assesses coachability, response to adversity and feedback, and cultural fit (effort, attitude, team mindset).
4. A team member gives the results and the athlete's **placement into one of the Academy tiers**.
5. The family enrolls the athlete in the Academy.

**FAQ "How do I sign up?" (S7):** the same flow, with "If our coaches feel as though your child brings the positive energy and impact we are looking for…".

**Free session (S1):** "Your first session is free! … Try one of our small group sessions." This links to the Minos general inquiry. The referral FAQ (S7) adds that non-members may attend "one free trial session", which also lets staff "evaluate whether the athlete is a good fit".

**Gaps in the official process:**
- It is unclear whether the free session *is* the evaluation (CLIENT INPUT).
- The "Academy Evaluation Form" link on `/how-to` points to the homepage.
- Whether the Minos **general inquiry** form (3 steps: Parent → Family → Details; never mentions "free" or "evaluation") is that form is not confirmed.

### 7.2 Platforms

| Platform | Role | Status |
|---|---|---|
| **Minos Rec** (`minosrec.com/showtime-basketball-academy/…`) | Inquiry, memberships, sessions, 1:1 lessons, court rentals, member login and account | **Current**: live schedules with October 2026 dates. Linked from the official homepage. |
| **Mindbody** (studioid 5742717) | The Wix membership "PURCHASE" buttons and the FAQ session-cancel and drop-in instructions | **Winding down**: a class schedule through the week of 2026-10-05, nothing from 2026-10-12 (MB2). Store: one Fundamentalists drop-in ($60) and Individual Training ($80/$100); no memberships (6.3). Retirement: CLIENT INPUT. |
| **Wix forms** | Waiver (`/waiver`) and Individual Training Inquiry (`/individualtraininginquiries`) | Current on Wix. **Lost at migration** unless replaced. |
| Website waiver | Disabled locally in the P0 pass. The page directs families to the Minos inquiry form for instructions. | Interim |

### 7.3 Journeys

URLs shown were all checked on 2026-10-10. Lowercase journey letters match the audiences in section 2.

| Journey | Entry | Needs | Recommended CTA | Next step / verified destination | Uncertainties |
|---|---|---|---|---|---|
| **a. New family exploring** | Home, search, social | What Showtime is, who it's for, where, cost, first step | **"Get Started"** (generic; the free small-group offer is stated beside it, B1) | `/get-started` explainer, then `minosrec.com/showtime-basketball-academy/general-inquiry` | Free session vs evaluation; who receives the free session |
| **b. Prospective Academy athlete** | Home, Programs, Academy page | Requirements (experience, team), the evaluation, tiers, price | **"Apply for an Academy Evaluation"** | Same Minos inquiry, which the official FAQ links as the evaluation application | 2.5 vs 3+ years; whether a dedicated evaluation form exists |
| **c. Prospective Fundamentalists athlete** | Home, Programs, Fundamentalists page | Is my child ready (1+ year)? Price, schedule | **"Get Started"** | Minos general inquiry | Whether acceptance or evaluation applies; ages |
| **d. Individual training prospect** | Programs, Individual Training page | Coach levels, price, duration, booking | **"Book Individual Training"** (direct) plus a secondary "Ask a question" | `minosrec.com/showtime-basketball-academy/lesson/99` ($80) and `/lesson/101` ($100); inquiry as fallback | Is direct booking allowed for new families? Small-group IT? |
| **e. Existing member** | Header "Members" link, footer, FAQ | Log in, book, cancel, drop-in, policies, waiver | **"Member Login & Booking"** | `minosrec.com/showtime-basketball-academy/sessions` (Login is a button on Minos; there is no direct login URL) | Mindbody still in use? Correct cancel steps? |
| **f. Event visitor** | Events page, social | Upcoming events, eligibility, RSVP | Event-specific RSVP | None currently (no upcoming events). Past events used Wix Events. | Future RSVP tool once Wix is gone |

### 7.4 Recommended conversion structure (UX recommendation, not Showtime policy)

1. **One primary CTA site-wide: "Get Started"**, pointing to `/get-started`. (Changed from "Get Started" on 2026-10-10: the free offer is verified only for small-group sessions, and which programs qualify is unconfirmed, B1.) The header button may link straight to the Minos inquiry to save a click; test this in the build. Remove "Book Memberships", "Book Sessions" and "Book Online" from first-visit surfaces.
2. **The `/get-started` page explains the path in plain steps:** inquire → free session or evaluation → placement → membership. Use neutral wording until Q-B1 is answered, e.g. "Start with a free session. Academy placement is confirmed through an evaluation."
3. **Program pages carry a contextual CTA**:
   - Academy: "Apply for an Academy Evaluation"
   - Fundamentalists: "Get Started"
   - Individual Training: "Book Individual Training"
4. **Show pricing transparently** on `/memberships`, labelled "available after acceptance", if approved. Membership purchase links appear only in member-facing contexts.
5. **Separate the member utility path**: a "Members" link in the header and footer goes to Minos sessions and login, plus policies.
6. **The waiver step appears in the journey** after acceptance and before the first session, with the interim instructions until a solution is approved.

## 8. Verified Business Information (quick reference)

| Item | Value | Status |
|---|---|---|
| Name | Showtime Basketball Academy (Showtime Basketball LLC) | VERIFIED |
| Est. | 2017 | VERIFIED |
| Address | The Grove, 2099 S 10th St, Unit 90, San Jose, CA 95112 | VERIFIED (S10, S11) |
| Phone | (408) 888-6739 | **UNVERIFIED**: appears in the repo only; not on S1 or M1 |
| Email | None published (the FAQ says "email us") | Gap |
| Hours | Repo shows Mon–Thu 5–7:30 PM, Sat 9–11:30 AM, Fri closed | **CONFLICTING** with the Minos schedule (Fridays; 3–8 PM) |
| Leadership | Coach Derrick Nguyen (Founder & Director); Coach Anthony "Ant" Gardner (Co-Director; also "Co-Director & Head Trainer"); Coach Kimo (Athletic Director) | VERIFIED (S2) |
| Coaches | Jorge (Head of Select Development); Lam (Head of Fundamentalist Development); Ron (Fundamentalist Development Lead); Don, Dylan, Jaden, Kenneth, Aus (Academy Coaches) | VERIFIED titles (S2). Full names on Minos: **Lam Pham**, **Ronmar Taal** (that he is "Coach Ron" is an assumption; unconfirmed). |
| Coach credentials | Derrick: decade+ coaching (Caroline Davis Intermediate, Oak Grove HS), ACSM CPT, Pure Sweat Licensed Skills Coach. Ant: ~14 yrs competitive, ~decade coaching, Head of Player Development at San Jose City College. Kimo: since 2007, NASM CPT/CES/CNC. | Stated on S2; not independently verified |
| Derrick "trained alongside" Tatum, Embiid, LaVine, Haliburton, Maxey | On S2; left out of the repo | **UNVERIFIED**; do not publish without client substantiation |
| Social | Instagram `@showtimebasketball`; TikTok `@showtimeba`; YouTube `@Showtimebasketballacademy` (repo; returns 200). The Wix YouTube link points to `youtube.com/user/Wix`, a template error. | IG and TikTok VERIFIED; YouTube likely, needs confirming |

## 9. Contact and External Platforms

| Purpose | URL | Status |
|---|---|---|
| General inquiry / free session / evaluation | `https://minosrec.com/showtime-basketball-academy/general-inquiry` | 200; linked from the official homepage |
| Minos home (includes "Get in touch" form) | `https://minosrec.com/showtime-basketball-academy/home` | 200 |
| Memberships (6 plans) | `https://minosrec.com/showtime-basketball-academy/memberships` | 200 |
| Sessions (classes, 1:1) | `https://minosrec.com/showtime-basketball-academy/sessions` | 200 |
| Academy class | `https://minosrec.com/showtime-basketball-academy/group-lesson/lesson/100` | 200 |
| Fundamentalists class | `https://minosrec.com/showtime-basketball-academy/group-lesson/lesson/98` | 200 |
| 1:1 w/ Academy Coach | `https://minosrec.com/showtime-basketball-academy/lesson/99` | 200 |
| 1:1 w/ Master Coach | `https://minosrec.com/showtime-basketball-academy/lesson/101` | 200 |
| Court rentals | `https://minosrec.com/showtime-basketball-academy/spaces` | 200 |
| Mindbody (legacy?) | `https://clients.mindbodyonline.com/classic/ws?studioid=5742717…` | Loads (2026-10-10); no membership products. Don't link. |
| Wix IT inquiry form | `https://www.showtimebasketballacademy.com/individualtraininginquiries` | 200; lost at migration |
| Wix waiver form | `https://www.showtimebasketballacademy.com/waiver` | 200; lost at migration |
| The Grove | `https://www.thegrove.work/` | 200 |
| Maps | Use `https://maps.google.com/?q=2099%20S%2010th%20St%2C%20San%20Jose%2C%20CA%2095112` (the format Minos uses). Replace `share.google/iwF509Id1Iis388Qe`, which opens a Google Search page. | Recommendation |

## 10. Events

| Event | Date / time | Details | Source |
|---|---|---|---|
| **Playmakers Clinic — "Play the Right Way"** | Sat **Mar 1, 2025**, 1:00–3:00 PM, The Grove | **Free**; **5th–8th grade**; RSVP; bring proper basketball shoes, their own ball, water, towel. Page shows "+ 58 other guests". | S10 |
| **Showtime Basketball x CYS: Elevate Your Game** | Sun **Mar 16, 2025**, 4:00–5:30 PM, The Grove | **Free**; **current CYS members only**; first 40 RSVPs, then a waitlist. CYS is not explained. | S11 |

- No upcoming events (S9: "No events at the moment").
- The H.E.L.D. acronym appears only in the Playmakers recap.
- **Recommendation:** keep events in a typed data file in the repo (no CMS needed). Show an empty state that offers the free session. Decide on an RSVP tool per event, for example a Minos session or an external form.

## 11. Relationship with The Grove

- **The Grove Community Collective** says it **owns** "the South Bay's top basketball training facility" and that "The Grove is home to Showtime Basketball Academy, **our** year-round basketball school". Its booking listing is "Showtime Basketball at The Grove Community Collective". (G1)
- The waiver names **both** Showtime Basketball LLC and The Grove Community Collective as "Providers" (S14).
- Coach Kimo's bio lists The Grove Community Collective as an employer, "where he leads Showtime as Athletic Director" (S2).
- Facility claims are The Grove's and Showtime's, not independently verified:
  - 10,000 sq ft
  - "FIBA-certified hardwood flooring… same quality used in the Olympic basketball games"
  - "pro-basketball regulation floor"
  - fully equipped weight room
  - doubles as an event space
  (S1, G1)
- The Grove runs nonprofit efforts: the Eric Cordova Scholarship, shoe donations and outreach (G1). These could be a trust or community story **if the client approves**.
- **The exact legal and operational relationship is CLIENT INPUT.** It affects how the site describes ownership, which name leads ("Showtime at The Grove"), and whether court rentals belong on the site.

## 12. Website Content Requirements

### 12.1 Content quality: strengths, problems and changes

**Preserve**
- Official positioning lines (section 3.1)
- L.E.A.D. standards
- Program descriptions and KPIs from S3 and S4
- The 5-step evaluation process
- Coach roster and headshots
- FAQ policies (verbatim until the client changes them)
- The waiver text (unchanged legal language)
- Past event details

**Fix**
- Academy requirement and team wording (the repo softened it)
- Remove repo-only claims until confirmed: mission paragraph, hours, phone, testimonials, "Premier"
- Mindbody instructions; the drop-in instruction ("scroll to the bottom" of a Minos page that has no drop-ins)
- "Book Memberships" for prospects
- H.E.L.D. on Events
- Mojibake (5 places)

**Add**
- Ages or grades
- Pricing (if approved)
- Program comparison
- Individual Training coach levels and prices
- Get Started steps
- Member utility path
- Safety and trust info (if available)
- Published email
- Pathway outcomes (once verified)

**Remove or reduce**
- Repeated mission paragraph
- Duplicate booking banners
- Instagram embeds as lead visuals

**Repo FAQ additions with no official source** (UNVERIFIED; confirm or drop):
- "How many times a week is Academy?" says Mon–Thu & Sat, which conflicts with Minos Fridays
- "What's the difference between Academy and Fundamentalists?"
- "Where is Showtime located?"
- "Do you accept roll-over classes?" (a rollover line does exist in the official FAQ)

**Do the current pages answer the five key questions?** (Y = yes, ~ = partly, N = no)

| Page | What is it? | Who for? | Why Showtime? | What's involved? | How to start? |
|---|---|---|---|---|---|
| Home (repo) | Y | ~ (no ages) | Y | ~ | ~ (4 competing CTAs) |
| Programs (repo) | Y | ~ (2.5 vs 3+; no ages) | ~ | Y | ~ (CTAs below IG embeds) |
| Memberships (repo) | Y | Y | ~ | N (no tiers or prices) | N (contradictory CTAs) |
| FAQs (repo) | n/a | n/a | n/a | Y | ~ (outdated platform steps) |
| About (repo) | Y | n/a | Y | ~ | Y |
| Events (repo) | Y | ~ | ~ | Y | ~ (no upcoming events) |
| Contact (repo) | Y | n/a | n/a | n/a | ~ (unverified phone and hours) |

### 12.2 Proposed sitemap (Next.js)

**Navigation (desktop):**
- Programs ▾ (Overview, Academy, Fundamentalists, Individual Training)
- Memberships
- About
- Events
- FAQs
- Members (utility link)
- **[Get Started]** button

**Mobile:** the same items in the drawer, plus a persistent "Get Started" CTA.

| Page | URL | Purpose | Primary audience | Primary CTA | Essential content | Launch tier |
|---|---|---|---|---|---|---|
| Home | `/` | Position Showtime; route to the right program; push the free session | A, B | Get Started | Positioning, program chooser, how it works (steps), coaches teaser, facility, trust, location | **Core** |
| Programs | `/programs` | Compare programs and pick one | A, B, C | Get Started | Comparison (who for, experience, format, frequency, price), Athletic Development "coming soon" note | **Core** |
| Academy | `/programs/academy` | Explain and qualify Academy | B | Apply for an Academy Evaluation | Requirements, KPIs, evaluation criteria and steps, tiers and pricing, schedule link, coaches | **Core** |
| Fundamentalists | `/programs/fundamentalists` | Explain the entry program | A, C | Get Started | Requirements (1+ yr), skills, format, pricing, schedule link, pathway to Academy | **Core** |
| Individual Training | `/programs/individual-training` | Sell 1:1 | D | Book Individual Training | Focus areas, coach levels and prices, cancellation, booking links | **Core** |
| Get Started | `/get-started` | The enrollment explainer (replaces "How to Become a Member") | A, B, C | Send an Inquiry (Minos) | Steps, free session, evaluation, acceptance, membership, waiver; what to bring | **Core** |
| Memberships | `/memberships` | Plans, pricing (if approved) and policies | C | Get Started (prospects) / Member Login (members) | Tiers, drop-ins, acceptance rule, makeups, refunds | **Core** |
| About | `/about` | Trust: story, philosophy, L.E.A.D., coaches, facility | A | Get Started | Est. 2017, philosophy, values, leadership bios, staff roster, The Grove | **Core** |
| FAQs | `/faqs` | Policies and how-to | C, E | Contextual | Official FAQs corrected for the current platform | **Core** |
| Waiver | `/waiver` | Waiver text and interim instructions | E | Send an Inquiry | Unchanged legal text; interim instructions (P0) | **Core** (must survive) |
| Contact | `/contact` | Location, directions, contact routes | A, E | Send an Inquiry | Address, map, verified contact methods only | **Core** (lightweight) |
| Members | `/members` | Utility hub for existing families | E | Member Login & Booking | Minos links, cancel and makeup steps, drop-ins, waiver, policies | **Secondary** (can launch as a section of `/faqs`) |
| Events | `/events` | Upcoming and past events | F | Event RSVP / Get Started | Data-driven list, empty state | **Secondary** |
| Athletic Development | `/programs/athletic-development` | Program page | B | Notify / Inquire | Pending launch details | **Deferred** |
| Hall of Fame | `/hall-of-fame` | Player pathways | A | n/a | Client-confirmed entries (consent pending) | **Secondary** (in nav; noindex until publication approval) |
| Select / Teams | TBD | Possible team program | B | TBD | Pending client | **Deferred** |
| Privacy | `/privacy` | Required if analytics or forms are added | All | n/a | Client- or counsel-provided text | **Deferred** (client) |
| 404 | `not-found` | Recovery | All | Home / Programs | Branded, with links | **Core** |

**Why programs get their own pages:** distinct audiences and CTAs; the Wix site already has separate program URLs that carry search equity; long-tail local search ("youth basketball training San Jose", "1-on-1 basketball training San Jose"); and shorter mobile pages. A single `/programs` overview prevents duplicated comparison content.

### 12.3 Content rules for implementation

- Every business fact comes from this document. Anything UNVERIFIED or CONFLICTING uses neutral wording or `[PLACEHOLDER — CLIENT INPUT NEEDED]`, never a guess.
- Prices, schedules and plans can change on Minos. Store them in one typed data module so a change is one edit. Link to Minos for live schedules rather than hard-coding times.
- Don't present "Our Mission", testimonials, hours or the phone number until the client confirms them.

### 12.4 Asset inventory

All files are in `assets/img/`. Rights for all imagery are **unconfirmed**; minors appear in most photos, so release and consent are CLIENT INPUT.

| Asset | Depicts | Likely use | Quality notes |
|---|---|---|---|
| `logo-showtime.png` (278×290; duplicate at `images/showtime-logo.png`) | White circular "SHOWTIME · BASKETBALL" $-S badge on black (the same file as the Wix `sba-white.png`) | Header, footer, favicon source | Raster only. **A vector master is needed.** |
| `coach-*.png` ×11 (574–847 px wide) | Consistent studio headshots, black Nike polos, grey backdrop | About and coach cards | Good consistency; modest resolution. Kimo and Derrick are the largest. |
| `photo-academy-session.png` (1024×576) | Wide group session at The Grove (Grove and S logos on the wall) | Academy, About | OK |
| `photo-agility-ladder.png` (1024×485) | Close-up of feet on an agility ladder with cones (the Wix hero image) | Athletic Development, hero texture | Low resolution for a hero |
| `photo-ballhandling-drill.png` (1024×468) | Ball-handling drill, dark wall | Fundamentals | OK |
| `photo-coaching-strength.png` (1024×682) | Coach addressing seated athletes in the weight room | Athletic Development, About | OK |
| `photo-defensive-drill.png` (950×878) | Defensive stance drill, coach in the foreground | Academy | OK |
| `photo-group-circle.png` (1024×397) | Large group gathered on court | Events, About | Thin crop |
| `photo-grove-court.png` (762×708) | The Grove logo on the hardwood | Facility | **The Grove's branding**; confirm rights |
| `photo-grove-session.png` (950×983) | Session with Grove and Showtime wall graphics | Facility, Home | Confirm rights |
| `photo-hero-jump.png` (574×1020) | Vertical shot of athletes in a line on court (**not** a jump) | Mobile hero at most | 765 KB PNG at low resolution; repo alt text is wrong |
| `photo-individual-form.png` (574×1020) | Athlete shooting in front of The Grove logo (also used on Wix) | Individual Training | Low resolution |
| `photo-ladder-coach.png` (707×1024) | Athletes in a ladder lane, coach watching | Athletic Development, Fundamentals | OK |
| `photo-shooting-form.png` (680×1020) | Coach correcting a young athlete's shooting form | Individual Training, Fundamentals | Good subject |
| `photo-team-huddle.png` (1024×576) | Huddle in a gym with black walls and windows, **possibly another venue** | Events | Confirm venue and rights |
| `photo-youth-circle.png` (1024×388) | Young kids seated with balls, **likely an external clinic venue** | Events (CYS?) | Thin crop; confirm |
| `photo-youth-coaching.png` (1024×682) | Coach with young players at a hoop | Fundamentals | OK |
| `placeholder-*.svg` ×9 | Placeholders | **Do not migrate** | |
| Instagram embeds `p/DVhbzSeD7V_`, `p/DVe4-qSj-Sh` | Social videos (one shows "SELECT") | Link out only | Third-party embed |

**Missing assets:**
- Vector logo and wordmark (the script "It's Showtime" from the Wix hero)
- High-resolution originals of all photos
- Hero-grade landscape and portrait photography
- Fundamentals-age action shots
- Individual-training 1:1 shots
- Facility exterior and entrance (for parking and arrival)
- Event photos labelled by event
- Short video loops (optional)
- OG share image

**Do not reuse Wix or Instagram imagery without confirming rights.**

## 13. Source References

All accessed 2026-10-10. The Wix sitemap shows lastmod 2026-09-18 for all pages.

| ID | URL |
|---|---|
| S1 | https://www.showtimebasketballacademy.com/ |
| S2 | https://www.showtimebasketballacademy.com/aboutus |
| S3 | https://www.showtimebasketballacademy.com/academy |
| S4 | https://www.showtimebasketballacademy.com/fundamentalists |
| S5 | https://www.showtimebasketballacademy.com/memberships |
| S6 | https://www.showtimebasketballacademy.com/how-to (steps in the image `static.wixstatic.com/media/52022b_e7afdbfcd8e142708b760458fc712820~mv2.png`) |
| S7 | https://www.showtimebasketballacademy.com/showtime-faqs (**authoritative for FAQ content and policies**; 8 questions; read in full 2026-10-10) |
| S8 | https://www.showtimebasketballacademy.com/individualtraining |
| S9 | https://www.showtimebasketballacademy.com/event-list |
| S10 | https://www.showtimebasketballacademy.com/event-details/playmakers-clinic-2025-03-01-13-00 |
| S11 | https://www.showtimebasketballacademy.com/event-details/showtime-basketball-x-cys-elevate-your-game |
| S12 | https://www.showtimebasketballacademy.com/individualtraininginquiries |
| S13 | https://www.showtimebasketballacademy.com/coming-soon-01 (and the empty `/athleticdevelopment`) |
| S14 | https://www.showtimebasketballacademy.com/waiver |
| S15 | https://www.showtimebasketballacademy.com/pricing-plans/list (Wix Pricing Plans; unlinked; accessed 2026-10-10) |
| S16 | https://www.showtimebasketballacademy.com/pricing-plans-sitemap.xml (lists only `/pricing-plans/do-not-go-here`, lastmod 2026-05-28) |
| M1 | https://minosrec.com/showtime-basketball-academy/home |
| M2 | https://minosrec.com/showtime-basketball-academy/memberships |
| M3 | https://minosrec.com/showtime-basketball-academy/sessions |
| M4 | https://minosrec.com/showtime-basketball-academy/group-lesson/lesson/100 (Academy / "G - Silver 2") |
| M5 | https://minosrec.com/showtime-basketball-academy/group-lesson/lesson/98 (Fundamentalists) |
| M6 | https://minosrec.com/showtime-basketball-academy/lesson/99 (1:1 Academy Coach) |
| M7 | https://minosrec.com/showtime-basketball-academy/lesson/101 (1:1 Master Coach) |
| MB2 | https://clients.mindbodyonline.com/classic/ws?studioid=5742717&stype=-7 (class schedule; weeks of 2026-10-05 to 2026-11-16 checked on 2026-10-10) |
| MB1 | https://clients.mindbodyonline.com/classic/ws?studioid=5742717&stype=41&sTG=24&prodId=100028 and `…sTG=23&prodId=100027` (the S5 "PURCHASE" links; accessed 2026-10-10) |
| G1 | https://www.thegrove.work/ |
| X1 | https://bayhoops.com/listing/showtime-sba/ (third-party, added 2025-03-05) |
| R1 | Repo `research/site-audit.md` (Phase 1) |

Yelp (`yelp.com/biz/showtime-basketball-academy-san-jose`, "13 Reviews" per search result) and enrichment.kids returned 403 and could not be checked.

## 14. Conflicting or Unverified Information

| # | Topic | Claims and sources | Evidence of currency | Resolution |
|---|---|---|---|---|
| C1 | Academy experience | "2.5+ years" (S1 card) vs "3+ years" (S3, M2, M4) | 3+ appears in the live booking system and the dedicated program page; 2.5+ only on a summary card | **Unresolved.** 3+ is better supported; confirm. Interim copy: "experienced players (typically 3+ years)", or a neutral equivalent. |
| C2 | Team requirement | "on a club or school team" (S3); "currently competing on a club or school team" (M2, M4); repo says "often" | Consistent across official sources; the repo is the outlier | Treat as an official requirement; confirm whether it is strict |
| C3 | Values | L.E.A.D. (S2, S3, S4) vs H.E.L.D. (S9, March 2025 recap) | L.E.A.D. is on 3 standing pages, and the evaluation criteria (Effort, Attitude) align with it | Use **L.E.A.D. provisionally**; drop H.E.L.D. from new copy; confirm |
| C4 | Booking platform | Mindbody (S5 Purchase, S7 cancel and drop-in steps) vs Minos Rec (S1 inquiry; full live catalogue) | Mindbody has classes up to 2026-10-10 and none after; Minos has sessions from 2026-10-12 (6.5). The Mindbody store has no memberships (6.3). | **Minos is current for upcoming sessions** (inferred from schedules). Confirm the cut-over and that Mindbody is retired. |
| C5 | Free session vs evaluation | "First session is free… small group sessions" (S1); "one free trial session… evaluate fit" (S7); Academy needs an evaluation and acceptance (S5–S7) | All current | **Unresolved.** Neutral copy until confirmed. |
| C6 | Membership purchase | "must be accepted… before purchasing" (S5) vs public Purchase buttons (M2) | Both current | Policy is clear; enforcement is unknown. Don't show purchase links to prospects. |
| C7 | Group size | "small groups of up to six" (S1) vs "Session size: up to 25" (M4, M5) | Minos splits Academy across 4 hoops (≈6 per hoop is an inference) | Confirm the wording |
| C8 | Fundamentalists drop-in | **$55** (S5 "members only"; S15 "valid for 7 days") vs **$60** (M3, M5 "/ player"; MB1 "Fundamentalists: Drop-In $60.00") | All four are live on 2026-10-10. Both booking systems charge $60. | **Unresolved.** No price shown on the new site. Confirm. |
| C9 | Tier name | "ESSENTIAL" (S5) vs "Essentials" (M2, S7) | | Confirm; "Essentials" is the majority |
| C10 | Cancellation | Academy 6-hour rule plus makeup bank (S7) vs "Cancel or reschedule up to 1 day before the event for a full refund" (Minos Fundamentalists class M5; the Academy class page M4 was not re-checked for this text) and "…before your session…" (Individual Training M6, M7) | Both current. S7 governs memberships; the Minos text is shown on per-session bookings. | S7 is published verbatim on the new site; the Minos wording appears only on Individual Training. Confirm which applies to members booking on Minos. |
| C11 | Schedule and hours | Repo FAQ "Mon–Thu & Sat"; repo hours "Fri closed" vs Minos Academy sessions on Fridays | Minos is live | Don't publish hours; link to the Minos schedule |
| C13 | Pricing-plans catalogue | S15 lists Fundamentalist Premium $600 (up to 5×/week), Select & Elite plans ($300/$600/$900, drop-in $77), no Academy plans and no Fundamentalists Essentials; S5 and M2 list Academy and Fundamentalists Basic/Essentials/Plus | S15 is unlinked; its sitemap entry is from 2026-05-28. S5 and M2 agree with each other. | **Unresolved.** S15 is treated as probably legacy and not published. Confirm whether to retire it or whether any of its plans are active (6.2). |
| C14 | Fundamentalists Plus frequency | "3 Classes Per Week / 12 per month" (S5); "up to 3 sessions per week" (M2); "2 Classes A Week + A Saturday" (S15) | Same price ($400) on all three | The new site uses S5/M2 wording. Confirm. |
| C15 | FAQ sign-up link | S7 "Apply for the Academy Evaluation **here**" links to `/inquire`, which returns **404**. The homepage's inquiry link goes to the Minos general inquiry (S1). | Checked 2026-10-10 | The new site uses the Minos general inquiry. Confirm that's the Academy Evaluation application (ties to B1). |
| C16 | FAQ how-to steps | S7 "How do I cancel a session?" and "How do I purchase a drop-in?" give Mindbody steps; upcoming sessions are on Minos (C4) | Mindbody has no classes after 2026-10-10 | Not published. Interim note instead. Client to supply Minos steps (B3). |
| C17 | Drop-in eligibility wording | S7 "Yes, we accept drop-ins" (no restriction stated) vs S5 "DROP-IN (members only)" | Both current | Not contradictory, but S7 is less specific. The new site links the FAQ answer to the "Members only" drop-in section. Confirm drop-ins are members-only. |
| C12 | Select / AAU | "Head of Select Development" (S2); IG "SELECT"; Bay Hoops AAU listing (X1) vs "not an AAU-first program" (S1) | Third-party is weakest | Confirm before any mention |
| U1 | Mission paragraph | Repo only | | Confirm or replace |
| U2 | Phone (408) 888-6739 | Repo only | | Confirm |
| U3 | Testimonials (4) | Repo only; possibly Yelp | | Confirm source and permission |
| U4 | "Premier" superlatives; FIBA "Olympic" claims | S1 and G1 marketing | | Client approval to keep |
| U5 | Derrick NBA "trained alongside" claim | S2 | | Substantiate or omit |
| U6 | Hall of Fame entries (5) | Repo only; **accuracy confirmed by the client 2026-10-12** | | Consent still needed before indexing (see `CONTENT_NEEDED.md` I11) |

## 15. Client Decisions Needed

The full list, with priority, impact and interim approach, is in **[`CONTENT_NEEDED.md`](CONTENT_NEEDED.md)**. Top decisions:
1. The enrollment model: is the free session the evaluation? Does Fundamentalists need acceptance?
2. Academy requirements (C1, C2).
3. Booking platform and the correct member instructions (C4, C10).
4. Publishing pricing, and the conflicting drop-in price (C8).
5. Waiver: system of record, retention and legal review.
6. Hosting, domain and redirects.
7. Verified contact details (phone, email); whether to publish hours.
8. Values and mission language (C3, U1).
