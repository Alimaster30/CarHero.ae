import Link from "next/link";
import { footerLinks, payments, site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 pt-16 text-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          {/* Tagline + newsletter */}
          <div>
            <p className="max-w-[26ch] text-[19px] font-medium leading-snug sm:text-[21px]">
              Licensed roadside car help across Dubai, on one easy number.
            </p>

            <form
              className="mt-7 flex max-w-[360px] border border-hairline-dark"
              action={`mailto:${site.email}`}
              method="post"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                placeholder="Enter Your Email Address"
                className="h-11 min-w-0 flex-1 bg-white/6 px-4 text-[14px] text-white placeholder:text-white/40 focus:outline-2 focus:-outline-offset-2 focus:outline-brand"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-11 w-11 shrink-0 place-items-center bg-brand text-white transition-colors hover:bg-brand-600"
              >
                <Icon name="arrow-up-right" className="size-4" />
              </button>
            </form>
            <p className="mt-3 text-[13.5px] text-white/50">
              Stay tuned and subscribe to our newsletter.
            </p>

            <div className="mt-6 flex gap-2.5">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-full border border-hairline-dark text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon name={social.icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h2 className="eyebrow text-white/50">Quick Links</h2>
            <ul className="mt-5 space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] uppercase tracking-[0.05em] text-white/85 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="eyebrow text-white/50">Get In Touch</h2>
            <dl className="mt-5 space-y-4 text-[14px]">
              <div>
                <dt className="text-white/50">Hotline</dt>
                <dd>
                  <a href={site.hotlineHref} className="transition-colors hover:text-brand">
                    {site.hotlinePretty} ({site.hotlineDigits})
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-white/50">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="transition-colors hover:text-brand">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-white/50">Service Area</dt>
                <dd>{site.serviceArea}</dd>
              </div>
              <div>
                <dt className="text-white/50">Hours</dt>
                <dd>{site.hours}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Payment methods */}
        <ul className="mt-12 flex flex-wrap items-center gap-x-2.5 gap-y-2 border-t border-hairline-dark pt-8">
          <li className="mr-2 text-[12px] uppercase tracking-[0.1em] text-white/45">
            We accept
          </li>
          {payments.map((method) => (
            <li
              key={method}
              className="border border-hairline-dark px-3 py-1.5 text-[12px] text-white/75"
            >
              {method}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-hairline-dark py-7 text-[13.5px] text-white/45 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Licensed by the DED and RTA, Dubai, UAE.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>

      {/* Oversized ghost wordmark bleeding off the bottom edge */}
      <p
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap text-center font-medium leading-[0.78] tracking-[-0.04em]"
        style={{ fontSize: "clamp(4rem, 17vw, 15rem)" }}
      >
        <span className="text-white">Car</span>
        <span className="text-white/[0.055]">Hero</span>
      </p>
    </footer>
  );
}
