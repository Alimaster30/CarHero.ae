import { whyUs } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { BlindsImage } from "@/components/ui/BlindsImage";
import { Reveal, RevealText } from "@/components/ui/Reveal";

export function WhyUs() {
  return (
    <section id="why-us" className="bg-surface-muted py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
        {/* Copy card */}
        <Reveal direction="right">
          <div className="border border-hairline bg-white p-7 sm:p-9">
            <h2 className="text-h2 font-medium leading-[1.1] tracking-[-0.02em] text-navy">
              <RevealText text={whyUs.heading} />
            </h2>
            <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.75] text-body">
              {whyUs.body}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2">
              {whyUs.features.map((feature, i) => (
                <Reveal
                  key={feature.title}
                  delay={0.15 + i * 0.1}
                  className={`py-5 sm:px-5 ${
                    i % 2 === 0 ? "sm:pl-0 sm:border-r sm:border-hairline" : "sm:pr-0"
                  } ${i < 2 ? "border-b border-hairline" : ""}`}
                >
                  <Icon name={feature.icon} className="size-[18px] text-brand" />
                  <h3 className="mt-3 text-[14px] font-semibold text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 max-w-[34ch] text-[13.5px] leading-[1.65] text-body">
                    {feature.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Image collage, wiped in behind brand-blue blinds */}
        <div className="relative">
          <BlindsImage
            src={whyUs.image}
            alt="A CarHero recovery van attending a breakdown at the roadside"
            sizes="(min-width: 1024px) 420px, 78vw"
            className="aspect-[4/3] w-[78%]"
          />
          <div
            aria-hidden="true"
            className="dot-grid absolute right-0 top-6 hidden h-[140px] w-[92px] lg:block"
          />
          <BlindsImage
            src={whyUs.inset}
            alt="A mobile car service being carried out in a customer's parking bay"
            sizes="(min-width: 1024px) 380px, 72vw"
            bars={5}
            className="relative -mt-16 ml-auto aspect-[16/10] w-[72%] border-4 border-surface-muted sm:-mt-20"
          />
        </div>
      </div>
    </section>
  );
}
