import type { Metadata } from "next";
import { Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Zedu Barbet Contributors",
  description: "Meet the contributors building Zedu Barbet.",
  alternates: {
    canonical: "/contributors/zedu-barbet",
  },
};

const contributors = [
  { name: "Emmanuel Aklah", github: "Aklah4" },
  { name: "Modupe Adenuga", github: "msnuga" },
  { name: "Godstime Okoene", github: "GGStyles" },
  { name: "Kenechukwu Modebelu", github: "KennyMod" },
  { name: "Eyitene Ejiro", github: "ejiro-eyitene" },
  { name: "Ubeh-sylvanus Izuchukwu", github: "anonymous-cybe" },
  { name: "Janet Okedoyin", github: "bimbzzyjane" },
  { name: "Mgboawaji Williamson", github: "codeWithGodstime" },
  { name: "Uduma Ifechukwu", github: "UI-Light" },
  { name: "Abdulsalam Abdulmuiz Olalekan", github: "Iampeace001" },
  { name: "Jinadu-Paul Oluwatamilore", github: "TammyCodes29" },
  { name: "Chimdike John", github: "cdJohnEl" },
  { name: "Adebukola, Jonah", github: "b26-netizen" },
  { name: "Rabiah Usman", github: "rabiah4u" },
  { name: "Adisa Abubakr", github: "adisa-ade", role: "Team Lead" },
  { name: "Adedoyin Ogunsola", github: "adegram" },
  { name: "Okafor Uriel", github: "blackoin-studio" },
  { name: "Adole Peter", github: "padole" },
  { name: "Jeffers Doherty", github: "thetundedoherty" },
  { name: "Ebenezer Amakato", github: "Ebenezer96" },
];

const getInitials = (name: string) =>
  name
    .split(/[ ,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

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
            <li
              key={contributor.github}
              className="flex min-h-36 flex-col justify-between gap-5 rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-primary-300"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-semibold text-primary-500"
                >
                  {getInitials(contributor.name)}
                </span>
                <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
                  <h2 className="text-base font-semibold leading-snug text-neutral-900">
                    {contributor.name}
                  </h2>
                  {contributor.role && (
                    <span className="rounded-sm bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900">
                      {contributor.role}
                    </span>
                  )}
                </div>
              </div>
              <a
                href={`https://github.com/${contributor.github}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500"
                aria-label={`${contributor.name} on GitHub, opens in a new tab`}
              >
                <Github aria-hidden="true" className="size-4" />
                {contributor.github}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
