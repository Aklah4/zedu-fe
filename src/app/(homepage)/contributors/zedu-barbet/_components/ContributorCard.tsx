import { Github } from "lucide-react";
import { githubUrl } from "~/lib/env-urls";
import type { Contributor } from "../_lib/contributors";

function getInitials(name: string): string {
  return name
    .split(/[ ,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function ContributorCard({ contributor }: { contributor: Contributor }) {
  return (
    <li className="flex min-h-36 flex-col justify-between gap-5 rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-primary-300">
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
        href={`${githubUrl()}/${contributor.github}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500"
        aria-label={`${contributor.name} on GitHub, opens in a new tab`}
      >
        <Github aria-hidden="true" className="size-4" />
        {contributor.github}
      </a>
    </li>
  );
}
