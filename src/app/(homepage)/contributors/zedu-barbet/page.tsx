import type { Metadata } from "next";
import { ContributorCard } from "./_components/ContributorCard";
import { contributors } from "./_lib/contributors";

export const metadata: Metadata = {
  title: "Zedu Barbet Contributors",
  description: "Meet the contributors building Zedu Barbet.",
  alternates: {
    canonical: "/contributors/zedu-barbet",
  },
};

export default function ZeduBarbetContributorsPage() {
  return (
    <main className="min-h-[70vh] px-4 pb-20 pt-10 sm:px-8 sm:pt-16 lg:px-12">
      <section className="mx-auto w-full max-w-7xl">
        <header className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-500">
            Zedu Barbet
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Meet our contributors
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Get to know the people behind Zedu Barbet and explore their GitHub
            profiles.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {contributors.map((contributor) => (
            <ContributorCard
              key={contributor.github}
              contributor={contributor}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
