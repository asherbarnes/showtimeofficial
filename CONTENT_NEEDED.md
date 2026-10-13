# Content & Decisions Needed — Showtime Basketball Academy

These are client questions for the Next.js rebuild, consolidated from the Phase 1 audit, the P0 remediation pass and Phase 2 research.

- **Facts and sources:** [`PRODUCT.md`](PRODUCT.md). Conflict IDs (C1–C12, U1–U6) refer to PRODUCT.md section 14.
- **Migration:** [`research/migration-requirements.md`](research/migration-requirements.md)

_Last updated: 2026-10-10 (pricing re-verified: B5 rewritten; official FAQs read in full: B3 rewritten, I16 updated)._

**Priority**

| Level | Meaning |
|---|---|
| **BLOCKING** | Needed for legal compliance, reliable functionality, an accurate critical claim, or an essential conversion journey. Blocks **launch**, not necessarily development. |
| **IMPORTANT** | Materially improves clarity, trust or conversion. |
| **OPTIONAL** | Can wait. |

"Dev?" says whether development can continue without the answer.

---

## BLOCKING

### B1. Free session vs evaluation (enrollment model)
**Questions**
- Is the "free first session" the same as the Academy evaluation?
- Does it apply to Fundamentalists and Individual Training too?
- Is the Minos **General Inquiry** form the "Academy Evaluation Form" referenced on `/how-to`, or is there a separate form?

**Details**
- **Why:** this defines the primary CTA and the `/get-started` steps on every page (C5).
- **Affects:** Home, Get Started, all program pages, header CTA.
- **Dev?** Yes.
- **Interim:** route every new-family CTA to `minosrec.com/showtime-basketball-academy/general-inquiry` (the official homepage does this). Use neutral copy: "Start with a free session. Academy placement is confirmed through an evaluation."
- **Implemented 2026-10-10:** the generic CTA is labelled "Get Started" (→ `/get-started`), not "Book a Free Session". The offer appears as text only, "Your first small-group session is free.", on Home and Get Started (plus closing bands). The Fundamentalists page uses "Get Started" until its eligibility is confirmed. **Once B1 is answered**, the label and offer wording can name the qualifying programs.

### B2. Membership eligibility and purchase
**Questions**
- Does the official rule "You must be accepted into the program before purchasing a membership" apply to **both** Academy and Fundamentalists?
- Does Minos enforce it?
- Should the website ever link prospects directly to the Minos memberships page?

**Details**
- **Why:** the current repo pushes "Book Memberships" to first-time visitors, which contradicts the policy (C6).
- **Affects:** Memberships, Home, program pages.
- **Dev?** Yes.
- **Interim:** show plans as information; link purchasing only from member-facing contexts.

### B3. Booking platform, member instructions and FAQ discrepancies
_Updated 2026-10-10 after reading the official FAQ page in full (PRODUCT.md 6.5)._

**What the schedules show:** Mindbody has classes up to 10 October 2026 and none from 12 October onward. Minos has sessions from 12 October onward. Minos appears to be the current booking platform, but that is inferred from the schedules, not confirmed by the client (C4).

**Questions**
1. **Confirm the switch:** has Showtime moved to Minos Rec as of 12 October 2026, and is Mindbody (studio 5742717) being retired? Should the Wix "PURCHASE" buttons and the FAQ's Mindbody links be removed?
2. **Minos steps to replace two official FAQ answers.** Both currently give Mindbody steps, so the new site shows an interim note instead (C16):
   - "How do I cancel a session?"
   - "How do I purchase a drop-in?" Its steps go to the Wix Memberships page, then to a Mindbody store.
3. **Make-up steps:** how do Academy members use a make-up credit on Minos?
4. **Cancellation rule:** the FAQ's Academy 6-hour make-up rule vs the Minos booking text "Cancel or reschedule up to 1 day before … for a full refund". Which applies to members booking on Minos (C10)?
5. **Sign-up link:** the FAQ's "Apply for the Academy Evaluation here" goes to `/inquire`, which returns **404**. Is the Minos general inquiry the right Academy Evaluation application (C15, B1)?
6. **Drop-in eligibility:** the FAQ says "Yes, we accept drop-ins", while Memberships says "members only". Confirm drop-ins are members-only (C17).
7. **Membership cancellation:** the FAQ says "Please email us", but no email is published (B8). What address should appear?

**Details**
- **Why:** members rely on these instructions, and the published ones point to a platform with no upcoming classes.
- **Affects:** FAQs, Members, Memberships.
- **Dev?** Yes.
- **Interim (implemented):**
  - The 6 FAQ answers that don't depend on the platform are published verbatim on `/faqs`. The policy answers also appear on `/memberships`.
  - The 2 Mindbody how-to answers show: "We're confirming the current steps … sign in through Member Login & Booking or send us an inquiry."
  - Members are linked to `minosrec.com/showtime-basketball-academy/sessions`.

### B4. Academy requirements
**Questions**
- Is the Academy requirement **3+ years** (program page and Minos) or **2.5+ years** (homepage card)?
- Must athletes be **currently** on a club or school team?
- What ages or grades does each program serve?

**Details**
- **Why:** this is eligibility, a critical claim (C1, C2).
- **Affects:** Programs, Academy, Home, FAQs.
- **Dev?** Yes.
- **Interim:** "Designed for experienced players currently on a school or club team. Experience requirements are confirmed at evaluation." Show no ages until confirmed.

### B5. Pricing: confirmation and discrepancies
_Updated 2026-10-10 after re-checking every pricing source (PRODUCT.md section 6)._

**Now shown on the new site** (agree across Wix `/memberships` and Minos):
- Academy: Basic $240 · Essentials $440 · Plus $600 per month
- Fundamentalists: Basic $200 · Essentials $330 · Plus $400 per month
- Academy drop-in $65 (members only)
- Individual Training $80 (Academy Coach) / $100 (Master Coach)

**Questions**
1. **Confirm the prices above** are current and approved for the new site. They were turned on at the agency's direction; the client hasn't signed off.
2. **Fundamentalists drop-in: $55 or $60?** $55 appears on Wix `/memberships` and `/pricing-plans/list`; $60 is what Minos and Mindbody charge (C8). The new site shows no price ("Ask us for the current price").
3. **Is `/pricing-plans/list` still in use?** It's live but unlinked, and lists plans found nowhere else (C13):
   - Fundamentalist Premium $600 (up to 5×/week)
   - Select & Elite: Basic $300, Plus $600, Premium $900 per month (1.5-hour classes), and a $77 drop-in

   It has no Academy plans and no Fundamentalists Essentials. Should it be retired? Are Select & Elite or Premium active offerings (ties to I3)?
4. **Fundamentalists Plus frequency:** "3 per week" (Wix `/memberships`, Minos) or "2 a week + a Saturday" (pricing-plans)? (C14)
5. **Tier name:** "Essential" (Wix `/memberships`) or "Essentials" (Minos, FAQ)? The new site uses "Essentials" (C9).
6. **Wix "PURCHASE" buttons** on `/memberships` go to a Mindbody store with no membership products, only a Fundamentalists drop-in ($60) and Individual Training. Is Mindbody retired (B3)?
7. Any sign-up fees, sibling or multi-program rates, contracts or minimum terms? None appear on any source, and the site states none.

**Details**
- **Why:** prices are a business claim, and the two current Wix pages disagree.
- **Affects:** Memberships, Academy, Fundamentalists, Individual Training.
- **Dev?** Yes.
- **Interim:** show only the prices listed above, which agree across sources. Withhold the Fundamentalists drop-in and everything that appears only on `/pricing-plans/list`. Membership purchase links go to Minos and are labelled for accepted families only (B2).

### B6. Waiver collection, retention and legal review
_Carried over from the P0 pass._

**Current state**
- `waiver.html` keeps the waiver text and the "required" statement.
- It does not collect any data.
- It points families to the Minos inquiry form for instructions.
- The signature_pad and EmailJS scripts are no longer loaded. `scripts/waiver-form.js` is still in the repo, unreferenced. Do not migrate it.

**Questions**
1. Where are waivers signed and stored today: the Wix form at `/waiver`, Minos Rec, or something else? Can Minos collect waivers at registration or checkout?
2. What is the approved collection and retention solution? It needs reliable delivery, secure storage, a retention period, access control, and a timestamped record of signer, date and waiver version.
3. Who receives signed waivers, and do families get a confirmation copy?
4. Has counsel reviewed the waiver text? It names The Grove Community Collective as co-provider and cites CA Family Code §6910 and Civil Code §1542. **The agency won't change legal text without approval.**
5. Fields: multiple children; participant date of birth; emergency contact; an explicit "I agree" checkbox; adult participant vs guardian signer.
6. Is a privacy notice or policy needed for the data collected?
7. Interim: should families be pointed to a specific existing waiver link instead of the inquiry form? (The Wix waiver form stops existing when the domain moves.)

**Details**
- **Why:** this is legal and safety for minors. A static site cannot store submissions, so a solution must be an external service.
- **Affects:** Waiver, Get Started, Members.
- **Dev?** Yes. Keep the interim page.
- **Done when:** an approved solution is tested end to end with a non-production submission and documented.

### B7. Hosting, domain and redirects
**Questions**
- Will the Next.js site stay on **GitHub Pages** (static export only)?
- Who controls the DNS for `showtimebasketballacademy.com`?
- When is the Wix site retired?
- Is the Wix plan still needed for anything else, such as the waiver or IT inquiry forms?

**Details**
- **Why:** GitHub Pages cannot issue server 301 redirects, which affects how old Wix URLs are preserved. It also determines whether any server feature is possible.
- **Affects:** all routes, SEO, forms.
- **Dev?** Yes. Build as a static export, which works anywhere.
- **Interim:** plan redirect stubs (see the migration doc).

### B8. Verified contact details
**Questions**
- Is **(408) 888-6739** Showtime's public phone (it appears in no official source)?
- What is the public **email**? The official FAQ says "email us" to cancel, but no address is published.
- Should hours be published? The repo's hours conflict with the Minos schedule (C11).

**Details**
- **Why:** NAP accuracy for families and local SEO. Structured data must not include unverified data.
- **Affects:** footer, Contact, FAQs, JSON-LD.
- **Dev?** Yes.
- **Interim:** use the address (verified) and the Minos inquiry form. Omit phone, email and hours until confirmed.

---

## IMPORTANT

| ID | Question | Why it matters | Affects | Dev? | Interim |
|---|---|---|---|---|---|
| I1 | Are the values **L.E.A.D.** (Leadership, Effort, Attitude, Discipline) or **H.E.L.D.** (Hard Work, Energy, Leadership, Discipline)? | Brand consistency (C3) | About, programs, Events | Yes | Use L.E.A.D. (3 standing official pages); drop H.E.L.D. |
| I2 | Is the repo's "**Our Mission**" paragraph approved official language? If not, what is the mission? | It appears about 10 times in the repo with no official source (U1) | Home, About, footer | Yes | Use the official homepage positioning lines |
| I3 | Is there a **Select** or competitive team program? Is the "Showtime - SBA" AAU listing on Bay Hoops current? What are the "**Academy tiers**" placement levels, and what does "**G - Silver 2**" mean? | Possible missing offering; potential tension with "not AAU-first" (C12) | Programs, nav, Academy | Yes | Don't mention Select or tiers |
| I4 | Group size: "up to six" (website) vs "up to 25" (Minos)? | Core differentiator claim (C7) | Home, programs | Yes | "Small-group training" without a number |
| I5 | Individual Training: is direct Minos booking OK for new families? Is small-group IT offered, and at what price? What do "Academy Coach" and "Master Coach" mean? | Defines the IT journey; the Wix IT inquiry form is lost at migration | Individual Training | Yes | Direct-book links plus a general inquiry fallback |
| I6 | Coaches: confirm names, titles, bios and credentials. Full names (Lam Pham; is "Coach Ron" Ronmar Taal?). Keep "Head of Player Development at San Jose City College"? Substantiate or drop the "trained alongside" NBA claim (U5). | Trust; accuracy | About, program pages | Yes | Use the official roster and titles; omit the NBA claim |
| I7 | Testimonials: what is the source of the 4 homepage quotes (Yelp?), are they approved, what is the full truncated quote, and what is the correct name for "JustAmes V."? | Unverified social proof (U3) | Home | Yes | Omit testimonials |
| I8 | Photography: are there high-resolution originals, including the larger photos shown on the Wix site (e.g. `/academy`), which are better than the repo copies? Is there consent or release for minors pictured? Rights to the Grove-branded photos and the possible other-venue photos (`photo-team-huddle`, `photo-youth-circle`)? Is a photo or video shoot possible? Shot list: `DESIGN.md` 11.5. | Licensing and minors' privacy | All pages | Yes | Use existing repo photos as placeholders only; flag them |
| I9 | Relationship with **The Grove Community Collective**: owner, operator or partner? Preferred naming ("Showtime at The Grove")? Approval of facility claims (10,000 sq ft, "FIBA-certified… Olympic")? Mention the Eric Cordova Scholarship or community work? | Accuracy of ownership and partnership claims | About, Home, footer | Yes | "Showtime trains at The Grove in San Jose"; no ownership language |
| I10 | Schedule: show weekly times on the site, or always link to Minos? | Times change; the repo hours conflict | Programs, Contact | Yes | Link to the Minos session pages |
| I11 | **Hall of Fame:** see the subsection below | Minors' data and consent | Hall of Fame | Yes | **Records confirmed 2026-10-12; in the nav.** Still noindex and out of the sitemap until publication approval (consent) |
| I12 | Policy text: refund wording for days 14–15; how "no roll-over" relates to the makeup bank; confirm the medical-pause and coach-cancellation rules | Ambiguous policies cause disputes | FAQs, Memberships | Yes | Publish verbatim, with no reinterpretation |
| I13 | Brand (see `DESIGN.md` section 18): (a) Confirm amber **#FFAC00** as the official colour and retire the repo's burnt orange #E85D04 and cream. (b) Vector masters of the badge and any program lockups (e.g. "SHOWTIME *Academy*"). (c) The script "It's Showtime" wordmark uses the font **Escape the Ordinary**, which is licensed for personal use only: is there a commercial licence or licensed artwork? (d) The Wix site also uses **Netflix Sans** (proprietary to Netflix) and SF Pro (Apple-only), which can't move to the new site. Approve Figtree as the replacement body/UI face, or confirm an owned Avenir web licence. | Brand consistency; font licensing | All | Yes | Build with amber, Anton + Figtree; omit the script wordmark until (c) is resolved |
| I14 | Keep "South Bay's Premier Training Program"? | Unsubstantiated superlative (U4) | Home, metadata | Yes | Use specific, provable claims |
| I15 | Safety and trust: coach background checks, SafeSport or other training, code of conduct, a privacy policy, parent communication norms? | Parents of minors expect this | About, FAQs, footer | Yes | Omit until provided |
| I16 | Repo-only FAQs (Academy days, program difference, location, roll-over): approve or remove? | Unverified, and "Mon–Thu & Sat" conflicts with Minos Fridays. None appear on the official FAQ page (8 questions). | FAQs | Yes | **Implemented:** only the 8 official FAQs are on `/faqs`; the repo-only FAQs are excluded |

### I11 detail: Hall of Fame

_Carried over from the P0 pass._

**Current state** (updated 2026-10-12)
- **Player records confirmed accurate by the client (2026-10-12).** All 5 entries are `verificationStatus: "verified"`; each `consent` is still `"pending"`. Order and values are unchanged from the original repo page: Jaden Sweeney, Brandon Boyd, Dylan Galvan, Shaade Williams, Emilie Ngo.
- **In the main navigation** (desktop and mobile, after About), via `primaryNav` in `lib/site.ts`. Not in the footer.
- **Still `noindex` and out of the sitemap**, behind one switch: `flags.hallOfFameIndexable` in `lib/flags.ts` (currently `false`). Setting it to `true` removes the page's `robots` override and adds `/hall-of-fame` to `app/sitemap.ts` together. Site-wide indexing still also needs `SITE_URL` and `ALLOW_INDEXING=true`.
- **noindex does not make a page private.** Now that it's linked from the nav, every visitor can reach it once deployed. Publication approval (below) should be in hand before deploying.
- Fields the original left as "—" (Brandon Boyd's high school; everyone else's pro team) are **omitted**, not shown as "none".
- No photos, years, statistics, awards or bios. Layout: `components/sections/PlayerRoster.tsx` (DESIGN 10.13).

**Needed for publication approval** (blocks `hallOfFameIndexable` and deployment)
- [x] Verify each entry's name, high school, college and pro team. **Client confirmed the existing information is accurate (2026-10-12).** This covers the earlier checks on Mets de Guaynabo, Oak Grove, Pacific University and college play as shown.
- [ ] Consent from each athlete, or a parent or guardian if they are still a minor. Publication in the old public repo is **not** permission to keep publishing.
- [ ] Confirm the page title ("Hall of Fame" / "Player Pathways") and the inclusion criteria (e.g. trained at Showtime for how long; reached which level).
- [ ] Is the wording "Recognizing the players featured in Showtime's Hall of Fame and their basketball paths beyond the academy" approved? It deliberately doesn't claim Showtime produced the outcomes.
- [ ] A way for players or families to request a correction or removal (needs a verified contact route; see B8).

**Optional follow-ups** (not blocking)
- [ ] Brandon Boyd's high school (blank in the original; omitted on the page).
- [ ] Should "UMary" be shown in full (e.g. University of Mary)? Display only; the client confirmed the entry as accurate.
- [ ] Any later level missing for players without a pro entry.
- [ ] Any additional **verified** inductees. Never add names, statistics or awards without confirmation.
- [ ] Optional photos or links, with rights and consent.

**Done**
- [x] Rebuild in the main site template (2026-10-11).
- [x] Add to the main navigation (2026-10-12).
- [ ] On publication approval: set each `consent` to `"confirmed"` and `flags.hallOfFameIndexable` to `true`, then rebuild.

---

## OPTIONAL

| ID | Question | Why | Affects | Dev? | Interim |
|---|---|---|---|---|---|
| O1 | Athletic Development: launch timeline, format, lead coach (Coach Kimo?), price? | Show only when real | Programs | Yes | A "Coming soon" mention on `/programs` only; no page |
| O2 | Events: upcoming events, how RSVPs will work after Wix Events, what CYS is, event photos | Events page content | Events | Yes | Empty state plus past events |
| O3 | Confirm the official YouTube channel (`@Showtimebasketballacademy`); any other socials | Footer accuracy (the Wix link points to Wix's channel) | Footer | Yes | Instagram and TikTok only, plus YouTube if confirmed |
| O4 | Analytics or conversion tracking wanted (e.g. outbound clicks to Minos)? | Measure the funnel; may need a privacy notice | All | Yes | None |
| O5 | Should court rentals (on Showtime's Minos account) appear on the Showtime site? | Possibly The Grove's business | Footer, Contact | Yes | Omit |
| O6 | Access to the Google Business Profile, to align the name, address, phone and website | Local SEO | n/a | Yes | n/a |
| O7 | Player pathway or outcome stories (college or pro), beyond the Hall of Fame | Trust | About, Home | Yes | Omit |
