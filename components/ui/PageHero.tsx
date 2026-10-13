import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ImageEntry } from "@/lib/images";
import { Container } from "./Container";

type Fact = { label: string; value: string };

type BaseProps = {
  title: string;
  eyebrow?: string;
  lead?: ReactNode;
  actions?: ReactNode;
};

type SimpleHeroProps = BaseProps & {
  variant?: "simple";
  surface?: "white" | "neutral";
};

type ProgramHeroProps = BaseProps & {
  variant: "program";
  breadcrumb: { label: string; href: string };
  facts: Fact[];
  image: ImageEntry;
};

type SplitHeroProps = BaseProps & {
  variant: "split";
  image: ImageEntry;
  note?: ReactNode;
};

export type PageHeroProps = SimpleHeroProps | ProgramHeroProps | SplitHeroProps;

/**
 * Hero variants from DESIGN.md 10.1:
 * - simple:  light inner-page hero (C)
 * - program: black band with breadcrumb and fact row (B)
 * - split:   homepage black panel + photo (A)
 * Text never sits on top of a photo.
 */
export function PageHero(props: PageHeroProps) {
  if (props.variant === "program") return <ProgramHero {...props} />;
  if (props.variant === "split") return <SplitHero {...props} />;
  return <SimpleHero {...props} />;
}

function SimpleHero({ title, eyebrow, lead, actions, surface = "white" }: SimpleHeroProps) {
  return (
    <section
      data-surface="light"
      className={`${surface === "neutral" ? "bg-neutral-100" : "bg-white"} border-b border-neutral-300 py-16 md:py-20`}
    >
      <Container>
        {eyebrow && <p className="type-label mb-4 text-amber-700">{eyebrow}</p>}
        <h1 className="type-display-lg max-w-[18ch]">{title}</h1>
        {lead && <div className="mt-6 max-w-(--container-lead) text-lead text-neutral-600">{lead}</div>}
        {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>}
      </Container>
    </section>
  );
}

function ProgramHero({ title, eyebrow, lead, actions, breadcrumb, facts, image }: ProgramHeroProps) {
  return (
    <section data-surface="dark" className="bg-black text-white">
      <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-7">
          <nav aria-label="Breadcrumb" className="text-small text-muted-dark">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={breadcrumb.href} className="prose-link">
                  {breadcrumb.label}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                {title}
              </li>
            </ol>
          </nav>
          {eyebrow && <p className="type-label mt-8 text-amber-500">{eyebrow}</p>}
          <h1 className={`type-display-lg ${eyebrow ? "mt-3" : "mt-8"}`}>{title}</h1>
          {lead && <div className="mt-6 max-w-(--container-lead) text-lead text-muted-dark">{lead}</div>}

          <dl className="mt-10 grid grid-cols-2 border-t border-line-dark sm:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-line-dark py-4 pr-4 sm:border-r sm:pl-4 sm:first:pl-0 sm:last:border-r-0">
                <dt className="type-label text-amber-500">{fact.label}</dt>
                <dd className="mt-2 font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>

          {actions && <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>}
        </div>
        <div className="lg:col-span-5">
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-video w-full object-cover lg:aspect-4/5"
            style={{ objectPosition: image.focal }}
            loading="eager"
          />
        </div>
      </Container>
    </section>
  );
}

function SplitHero({ title, eyebrow, lead, actions, image, note }: SplitHeroProps) {
  return (
    <section data-surface="dark" className="bg-black text-white">
      <div className="mx-auto grid max-w-[1920px] lg:grid-cols-12">
        <div className="flex flex-col justify-center px-[clamp(1.25rem,4vw,3rem)] py-14 md:py-20 lg:col-span-7 lg:py-24 xl:pl-[max(3rem,calc((100vw-80rem)/2+3rem))]">
          {eyebrow && <p className="type-label mb-5 text-amber-500">{eyebrow}</p>}
          <h1 className="type-display-xl max-w-[14ch]">{title}</h1>
          {lead && <div className="mt-6 max-w-(--container-lead) text-lead text-muted-dark">{lead}</div>}
          {actions && (
            <div data-sticky-cta-hide className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {actions}
            </div>
          )}
          {note && <p className="mt-5 font-semibold text-white">{note}</p>}
        </div>
        <div className="relative aspect-4/3 sm:aspect-video lg:col-span-5 lg:aspect-auto lg:min-h-[36rem]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
            style={{ objectPosition: image.focal }}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
