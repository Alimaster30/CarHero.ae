import { work } from "@/lib/site";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Reveal, RevealText } from "@/components/ui/Reveal";

export function Work() {
  const large = work.filter((w) => w.large);
  const small = work.filter((w) => !w.large);

  return (
    <section id="work" className="bg-white pb-20 lg:pb-28">
      <div className="container-x">
        <h2 className="text-h2 font-medium leading-[1.1] tracking-[-0.02em] text-navy">
          <RevealText text="Our Work" />
        </h2>
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.75] text-body">
            Drag the handle to see the difference - real jobs from around Dubai.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-2">
          {large.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <BeforeAfter
                before={item.before}
                after={item.after}
                title={item.title}
                className="aspect-[16/10]"
              />
              <p className="mt-2.5 text-[13.5px] text-body">{item.title}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {small.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <BeforeAfter
                before={item.before}
                after={item.after}
                title={item.title}
                className="aspect-[16/10]"
                sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
              />
              <p className="mt-2.5 text-[13.5px] text-body">{item.title}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
