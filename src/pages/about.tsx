import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  const description =
    "Learn about Sahil Yogee, a developer focused on full-stack web and mobile development, with interests in cybersecurity, AI/ML, robotics, and IoT.";

  return (
    <>
      <NextSeo
        title="About Sahil Yogee | Developer"
        description={description}
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "About Sahil Yogee",
          description,
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Sahil Yogee developer portfolio",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{ cardType: "summary_large_image" }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Sahil Yogee, developer journey, MERN Stack, Flutter, Python, C, ethical hacking, networking, AI, robotics, IoT",
          },
        ]}
      />

      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
    </>
  );
}
