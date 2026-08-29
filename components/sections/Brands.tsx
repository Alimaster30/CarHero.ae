import Image from "next/image";
import { brands } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function Brands() {
  // Duplicated once so the -50% keyframe loops seamlessly.
  const track = [...brands, ...brands];

  return (
    <section className="bg-surface-muted py-14 lg:py-16" aria-label="Tyre brands we fit">
      <Reveal>
        <h2 className="text-center text-[19px] font-medium text-navy">
          Brands We Work With
        </h2>
      </Reveal>

      <div className="container-x marquee relative mt-9 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-14 lg:gap-20">
          {track.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="relative h-[38px] w-[128px] shrink-0 opacity-45 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 lg:w-[150px]"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                fill
                sizes="150px"
                className="object-contain"
                aria-hidden={i >= brands.length}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
