import Head from "next/head";
import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  const description =
    "Explore Sahil Yogee's portfolio featuring full-stack web development, Flutter, Python, C, cybersecurity, and emerging technologies.";

  return (
    <>
      <NextSeo
        title="Sahil Yogee | Full-Stack Developer"
        description={description}
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Sahil Yogee | Full-Stack Developer",
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
              "Sahil Yogee, Full-Stack Developer, MERN Stack, JavaScript, TypeScript, React, Node.js, Python, C, Flutter, Cybersecurity, Robotics, IoT",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>

      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
