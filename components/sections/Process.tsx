import { process } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealText } from "@/components/ui/Reveal";

/** Dashed hand-drawn connector between two steps, mirroring the reference. */
function Connector({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 48"
      className={`h-12 w-full text-navy/35 ${flip ? "-scale-y-100" : ""}`}
      fill="none"
    >
      <path
        d="M4 34C24 6 92 6 112 30"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="4 5"
        strokeLinecap="round"
      />
      <path
        d="M104 30.5 112 30l-2.5-7.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <h2 className="text-h2 font-medium leading-[1.1] tracking-[-0.02em] text-navy">
          <RevealText text="Our Process" />
        </h2>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.75] text-body">
            One phone call, a clear price and a licensed mechanic at your car.
            No apps, no accounts, no surprises.
          </p>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 0.1}
              className="relative text-center"
            >
              {/* Connector spans the gutter between this icon and the next */}
              {i < process.length - 1 && (
                <div className="pointer-events-none absolute -top-1 left-[calc(50%+2rem)] hidden w-[calc(100%-2.5rem)] lg:block">
                  <Connector flip={i % 2 === 1} />
                </div>
              )}

              {/* Blue tile on a larger pale-blue backdrop square, with the
                  numbered chip overlapping both - as in the reference. */}
              <div className="relative inline-block">
                <span
                  aria-hidden="true"
                  className="absolute -inset-[11px] bg-brand-50"
                />
                <span className="relative grid size-[72px] place-items-center bg-brand text-white">
                  <Icon name={step.icon} className="size-7" />
                </span>
                <span className="absolute -left-4 -top-4 z-10 grid h-[30px] min-w-[34px] place-items-center bg-navy px-2 text-[12px] font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-[17px] font-medium leading-snug text-navy">
                {step.title}
              </h3>
              <p className="mx-auto mt-2.5 max-w-[32ch] text-[14px] leading-[1.7] text-body">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
