import Image from "next/image";
import Link from "next/link";
import { featuredVideo } from "@/lib/site";
import { CountUp } from "@/components/ui/CountUp";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealText } from "@/components/ui/Reveal";

export function Videos() {
  return (
    <section id="videos" className="bg-surface-muted py-20 lg:py-28">
      <div className="container-x">
        <div className="text-center">
          <h2 className="text-h2 font-medium leading-[1.1] tracking-[-0.02em] text-navy">
            <RevealText text="Featured Video" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-[50ch] text-[15px] leading-[1.75] text-body">
              An inside look at how our mechanics work, and the maintenance tips
              that keep you off the hard shoulder.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-12">
            <div className="relative z-10 grid gap-0 sm:grid-cols-[minmax(0,333px)_minmax(0,1fr)]">
              {/* Meta card */}
              <div className="flex flex-col justify-between border border-hairline bg-white p-6">
                <p className="eyebrow text-navy">{featuredVideo.title}</p>
                <div className="mt-10 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[30px] font-medium leading-none text-navy">
                      <CountUp to={featuredVideo.views} />
                    </p>
                    <p className="mt-1 text-[13.5px] text-body">Views</p>
                  </div>
                  <Link
                    href={featuredVideo.href}
                    aria-label={`Watch: ${featuredVideo.title}`}
                    className="text-navy/60 transition-colors hover:text-brand"
                  >
                    <Icon name="arrow-up-right" className="size-4" />
                  </Link>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="relative aspect-[16/9] sm:aspect-auto sm:min-h-[447px]">
                <Image
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  fill
                  sizes="(min-width: 640px) 620px, 100vw"
                  className="object-cover"
                />
                <Link
                  href={featuredVideo.href}
                  aria-label={`Play: ${featuredVideo.title}`}
                  className="group absolute inset-0 grid place-items-center"
                >
                  <span className="grid size-14 place-items-center rounded-full bg-white/90 text-navy transition-transform duration-300 group-hover:scale-110">
                    <Icon name="play" className="ml-0.5 size-5" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Offset blue block and dotted grid, as in the reference */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 left-1/2 top-12 z-0 hidden bg-brand lg:block"
            />
            <div
              aria-hidden="true"
              className="dot-grid absolute -bottom-7 left-1/3 z-20 hidden h-[46px] w-[210px] lg:block"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
