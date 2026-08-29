import { certificates } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { BlindsImage } from "@/components/ui/BlindsImage";
import { Reveal, RevealText } from "@/components/ui/Reveal";

export function Certificates() {
  return (
    <section id="licensed" className="bg-surface-muted py-20 lg:py-28">
      <div className="container-x">
        <div className="text-center">
          <h2 className="text-h2 font-medium leading-[1.1] tracking-[-0.02em] text-navy">
            <RevealText text={certificates.heading} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-[1.75] text-body">
              {certificates.body}
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex h-11 items-center bg-brand px-8 text-[12px] font-semibold uppercase tracking-[0.09em] text-white transition-all duration-300 hover:bg-brand-600 hover:-translate-y-0.5"
            >
              View All
            </a>
          </Reveal>
        </div>

        <div className="relative mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          {/* Geometric accents anchored to the section's bottom-right, as in the reference */}
          <div
            aria-hidden="true"
            className="absolute -bottom-8 right-16 hidden size-[92px] bg-brand lg:block"
          />
          <div
            aria-hidden="true"
            className="dot-grid absolute -bottom-14 right-0 hidden h-[110px] w-[110px] lg:block"
          />

          <BlindsImage
            src={certificates.image}
            alt="A licensed CarHero technician completing a pre-RTA inspection"
            sizes="(min-width: 1024px) 480px, 100vw"
            className="aspect-[4/5] w-full"
          />

          {/* Credential list */}
          <ul className="divide-y divide-hairline border-t border-hairline">
            {certificates.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.09} direction="left">
                <div className="grid grid-cols-[auto_1fr] gap-4 py-6">
                  <span className="grid size-9 shrink-0 place-items-center bg-brand text-white">
                    <Icon name={item.icon} className="size-[18px]" />
                  </span>
                  <div>
                    <p className="text-[12px] font-medium text-brand">{item.eyebrow}</p>
                    <h3 className="mt-1.5 text-[15px] font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[46ch] text-[14px] leading-[1.7] text-body">
                      {item.body}
                    </p>
                    <a
                      href="#faq"
                      className="group mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.09em] text-navy transition-colors hover:text-brand"
                    >
                      Learn More
                      <Icon
                        name="arrow-up-right"
                        className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
