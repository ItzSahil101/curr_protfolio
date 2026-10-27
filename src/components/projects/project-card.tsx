import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const banner = props.imageUrl[0];

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        type: "spring",
        duration: 0.5,
      }}
      className="w-full overflow-hidden rounded-xl border border-accent/20 bg-background shadow-md transition-shadow duration-200 hover:shadow-lg hover:shadow-accent/20 dark:bg-zinc-800"
    >
      {/* Static project banner — no image slider */}
      <div className="relative aspect-[2.1/1] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        {banner && (
          <Image
            src={banner}
            alt={`${props.name} project banner`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-[1.03]"
          />
        )}
      </div>

      <div className="p-4 text-foreground sm:p-5">
        <div className="flex items-center gap-3">
          <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-md">
            <Image
              src={props.favicon}
              alt={`${props.name} icon`}
              fill
              sizes="24px"
              className="object-contain"
            />
          </span>

          <h3 className="text-sm font-semibold sm:text-base">{props.name}</h3>
        </div>

        <p className="min-h-12 mt-3 text-xs leading-relaxed text-foreground/80 md:text-sm">
          {props.description}
        </p>

        {props.liveWebsiteHref && (
          <div className="mt-5 flex justify-end">
            <a
              href={props.liveWebsiteHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${props.name} live demo`}
              className="inline-flex items-center gap-2 rounded-md border border-accent/30 px-3 py-2 text-xs font-medium transition-colors hover:bg-accent/10 md:text-sm"
            >
              <FiExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
