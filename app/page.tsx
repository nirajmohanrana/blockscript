import Link from "next/link";
import Balance from "react-wrap-balancer";
import { Component1Icon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Separator } from "@ui/separator";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { RxStar } from "react-icons/rx";
import PageExample from "@/components/page-example";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-4 md:py-6 lg:py-12">
        <Link
          href="/docs/changelog"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium group mb-5"
        >
          <Component1Icon className="h-4 w-4 group-hover:rotate-45 delay-100 duration-300 ease-in-out" />
          <Separator className="mx-1 h-4" orientation="vertical" />
          <span>Introducing Blocks</span>
          <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-2 delay-75 duration-150 ease-in-out" />
        </Link>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] mb-2">
          Build Scripts with Blocks
        </h1>
        <Balance className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl mb-5">
          Simple to use, Draggable logic Blocks ,{" "}
          <Link href="#example" className="underline">
            Prebuilt examples
          </Link>
        </Balance>

        <p>Accessible • Customizable • Open Source</p>

        <div className="flex w-full items-center justify-center space-x-4 py-8 md:pb-20">
          <Link href="/docs" className={cn(buttonVariants({ size: "sm" }))}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <RxStar className="mr-2 h-4 w-4" />
            Star us on
          </Link>
        </div>

        <PageExample />
      </section>
      <SiteFooter />
    </>
  );
}
