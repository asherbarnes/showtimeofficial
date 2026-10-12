import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section data-surface="light" className="py-20 md:py-28">
      <Container>
        <p className="type-label text-amber-700">404</p>
        <h1 className="mt-4 type-display-lg">Page not found</h1>
        <p className="mt-6 max-w-(--container-lead) text-lead text-neutral-600">
          This page may have moved when our website was rebuilt.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" fullWidthMobile>
            Go to the homepage
          </Button>
          <Button href="/programs" variant="secondary" fullWidthMobile>
            See our programs
          </Button>
        </div>
      </Container>
    </section>
  );
}
