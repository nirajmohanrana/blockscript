import { siteConfig } from "@/config/site";
import { CalendarIcon } from "@radix-ui/react-icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui//hover-card";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="font-medium underline underline-offset-4 cursor-pointer">
                Niraj Rana
              </span>
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Niraj Rana</h4>
                <span className="text-xs text-muted-foreground">
                  Software Engineer{" "}
                  <Link
                    href=""
                    referrerPolicy="no-referrer"
                    rel="noreferrer"
                    target="_blank"
                  >
                    @<span className="underline">A1Fence</span>
                  </Link>
                </span>
              </div>
            </HoverCardContent>
          </HoverCard>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
