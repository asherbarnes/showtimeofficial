import Image from "next/image";
import Link from "next/link";
import { athleticDevelopment, programs } from "@/lib/programs";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/Button";

/**
 * Numbered program rows separated by court-line rules (DESIGN 10.2).
 * The heading link and CTA link are separate; the row is not one big link.
 */
export function ProgramIndex({ showImages = true }: { showImages?: boolean }) {
  return (
    <ol className="border-t-2 border-black">
      {programs.map((program, index) => {
        const image = images[program.image];
        return (
          <li key={program.slug} className="grid gap-6 border-b-2 border-black py-8 md:grid-cols-12 md:gap-8 md:py-10">
            <div className={showImages ? "md:col-span-7 lg:col-span-8" : "md:col-span-12"}>
              <div className="flex items-baseline gap-4 md:gap-6">
                <span aria-hidden="true" className="type-stat text-charcoal">
                  {program.number}
                </span>
                <h3 className="type-h3">
                  <Link href={program.href} className="hover:underline hover:underline-offset-4">
                    {program.name}
                  </Link>
                </h3>
              </div>
              <p className="mt-4 max-w-(--container-prose)">{program.whoFor}</p>
              <p className="type-label mt-4 inline-block rounded-sm border border-neutral-500 px-2.5 py-1.5 text-charcoal">
                {program.requirement}
              </p>
              <div className="mt-4">
                <Button href={program.href} variant="text">
                  {`About ${program.name}`}
                </Button>
              </div>
            </div>
            {showImages && (
              <div className="hidden md:col-span-5 md:block lg:col-span-4">
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt=""
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 30vw, 40vw"
                  className="aspect-4/3 w-full object-cover"
                  style={{ objectPosition: image.focal }}
                />
              </div>
            )}
          </li>
        );
      })}
      {/* Not open for enrollment and has no page, so the row has no link. */}
      <li className="grid gap-6 border-b-2 border-black py-8 md:grid-cols-12 md:gap-8 md:py-10">
        <div className={showImages ? "md:col-span-7 lg:col-span-8" : "md:col-span-12"}>
          <div className="flex items-baseline gap-4 md:gap-6">
            <span aria-hidden="true" className="type-stat text-neutral-500">
              {athleticDevelopment.number}
            </span>
            <h3 className="type-h3 text-neutral-600">{athleticDevelopment.name}</h3>
          </div>
          <p className="mt-4 max-w-(--container-prose)">{athleticDevelopment.whoFor}</p>
          <p className="type-label mt-4 inline-block rounded-sm border border-neutral-500 px-2.5 py-1.5 text-charcoal">
            {athleticDevelopment.status}
          </p>
        </div>
        {showImages && (
          <div className="hidden md:col-span-5 md:block lg:col-span-4">
            <Image
              src={images[athleticDevelopment.image].src}
              width={images[athleticDevelopment.image].width}
              height={images[athleticDevelopment.image].height}
              alt=""
              loading="lazy"
              sizes="(min-width: 1024px) 30vw, 40vw"
              className="aspect-4/3 w-full object-cover"
              style={{ objectPosition: images[athleticDevelopment.image].focal }}
            />
          </div>
        )}
      </li>
    </ol>
  );
}
