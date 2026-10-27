import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.png";
import DuotoneImage from "./duotone-image";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex w-full max-w-7xl flex-col items-center gap-6 overflow-hidden px-5 pt-24 text-center sm:px-10 md:mt-12 md:px-14 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:px-8 lg:pt-24 lg:text-left">
      {/* Large portrait positioned toward the left */}
      <div className="relative flex w-full items-center justify-center sm:w-4/5 md:w-3/4 lg:-ml-12 lg:w-[58%] lg:shrink-0">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.8}>
            <div className="relative mx-auto w-full max-w-[680px] lg:-ml-6 lg:scale-110 xl:scale-[1.15]">
              <DuotoneImage
                src={heroProfileImg}
                width={900}
                height={1100}
                className="h-auto w-full object-contain mix-blend-screen transition-transform duration-700 hover:scale-[1.04]"
                alt="Stylized portrait of Sahil Yogee"
                lightColor="#E0FFFF"
                darkColor="#004D4D"
                unoptimized
              />
            </div>
          </FadeUp>
        </AnimatePresence>
      </div>

      {/* Text aligned to the right */}
      <div className="mt-2 w-full min-w-0 lg:w-[42%] lg:flex-1 lg:pl-5">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-4xl font-bold leading-tight text-accent sm:text-5xl md:text-6xl xl:text-7xl">
              Hi, I&apos;m
              <span className="mt-1 block">Sahil Yogee</span>
            </h1>
          </FadeUp>

          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-6 text-base font-medium leading-8 text-zinc-900 dark:text-zinc-300 sm:text-lg">
              I&apos;m a developer who enjoys turning ideas into working
              products. I build full-stack web applications and mobile
              experiences, focusing on practical features, clean code, and
              solving real problems.
            </p>
          </FadeUp>

          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-6 text-base font-medium leading-8 text-zinc-900 dark:text-zinc-300 sm:text-lg">
              My work includes <span className="text-accent">LovyDate</span> and{" "}
              <span className="text-accent">CafeMate</span>. I work with
              JavaScript, React, Node.js, Python, C, and Flutter, while
              continuing to learn ethical hacking, networking, AI/ML, robotics,
              and IoT. Explore my{" "}
              <Link
                href="/projects"
                className="text-accent underline underline-offset-4 transition-opacity hover:opacity-75"
              >
                projects
              </Link>
              .
            </p>
          </FadeUp>

          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.6}
            className="mr-0 mt-8 flex items-center justify-center gap-3 lg:justify-end"
          >
            <Image
              className="h-auto w-12 rounded-sm"
              alt="Nepal flag"
              src="https://flagcdn.com/np.svg"
              width={48}
              height={32}
            />
            <span className="text-lg font-medium text-foreground">Nepal</span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
