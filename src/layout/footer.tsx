import { GithubIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col items-center gap-12 overflow-hidden px-5 py-12 sm:px-10 md:px-16">
      {/* Contact section */}
      <section className="group relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#101014] px-6 py-12 text-white shadow-2xl sm:px-12 sm:py-16 md:px-16 md:py-20">
        {/* Animated background glow */}
        <div className="bg-red-500/15 pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[100px] transition-all duration-700 group-hover:bg-red-500/25" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] transition-all duration-700 group-hover:bg-blue-500/20" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Get in touch
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Have an idea?
            <span className="mt-2 block bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
              Let&apos;s talk.
            </span>
          </h2>

          <p className="text-white/55 mt-5 max-w-lg text-sm leading-7 sm:text-base">
            Have a project in mind, want to collaborate, or just want to say
            hello? My inbox is always open.
          </p>

          {/* Animated email card */}
          <a
            href="mailto:sahiljogi2066@gmail.com"
            className="group/email mt-10 flex w-full max-w-xl items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-left shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09] hover:shadow-[0_15px_60px_rgba(239,68,68,0.12)] sm:gap-5 sm:p-5"
            aria-label="Email Sahil at sahiljogi2066@gmail.com"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-md transition-transform duration-300 group-hover/email:rotate-[-5deg] group-hover/email:scale-105 sm:h-14 sm:w-14">
              <svg
                viewBox="0 0 48 48"
                className="h-8 w-8 sm:h-9 sm:w-9"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M6 14.5V35a4 4 0 0 0 4 4h5V18.5L6 14.5Z"
                />
                <path fill="#34A853" d="M33 39h5a4 4 0 0 0 4-4V14.5l-9 4V39Z" />
                <path
                  fill="#EA4335"
                  d="M6 14.5 24 28 42 14.5V13a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v1.5Z"
                />
                <path fill="#C5221F" d="M6 14.5v1.8l9 6.8v-4.6l-9-4Z" />
                <path fill="#FBBC04" d="M33 18.5v4.6l9-6.8v-1.8l-9 4Z" />
                <path fill="#EA4335" d="M15 18.5v20.5h18V18.5L24 25l-9-6.5Z" />
              </svg>
            </span>

            <span className="min-w-0 flex-1">
              <span className="text-white/45 block text-xs font-medium uppercase tracking-wider">
                Email me at
              </span>
              <span className="mt-1 block break-all text-sm font-semibold text-white transition-colors duration-300 group-hover/email:text-red-200 sm:text-lg">
                sahiljogi2066@gmail.com
              </span>
            </span>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 group-hover/email:translate-x-1 group-hover/email:border-white/30 group-hover/email:text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17 17 7M7 7h10v10"
                />
              </svg>
            </span>
          </a>

          <p className="text-white/35 mt-4 text-xs">
            Opens your default email app
          </p>
        </div>
      </section>

      {/* Footer */}
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-foreground/60">
          © 2026{" "}
          <span className="font-semibold text-foreground">Sahil Yogee</span>.
          All rights reserved.
        </p>

        <a
          href="https://github.com/ItzSahil101"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Sahil's GitHub profile"
          className="group/github inline-flex items-center gap-3 rounded-full border border-foreground/10 px-4 py-2.5 text-sm text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:text-foreground"
        >
          <GithubIcon className="h-5 w-5 transition-transform duration-300 group-hover/github:rotate-[-8deg] group-hover/github:scale-110" />
          <span>Find me on GitHub</span>
          <span className="transition-transform duration-300 group-hover/github:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </footer>
  );
}
