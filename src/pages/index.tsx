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

  const previewImage = `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`;

  return (
    <>
      <NextSeo
        title="Sahil Yogee | Full-Stack Developer"
        description={description}
        canonical={siteMetadata.siteUrl}
        openGraph={{
          type: "website",
          url: siteMetadata.siteUrl,
          title: "Sahil Yogee | Full-Stack Developer",
          description,
          siteName: siteMetadata.siteName,
          images: [
            {
              url: previewImage,
              width: 1200,
              height: 630,
              alt: "Sahil Yogee - Full-Stack Developer Portfolio",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Sahil Yogee, Full-Stack Developer, MERN Stack, JavaScript, TypeScript, React, Node.js, Python, C, Flutter, Cybersecurity, Robotics, IoT",
          },
          {
            property: "og:image:alt",
            content: "Sahil Yogee - Full-Stack Developer Portfolio",
          },
          {
            property: "og:image:secure_url",
            content: previewImage,
          },
          {
            name: "twitter:image",
            content: previewImage,
          },
          {
            name: "twitter:image:alt",
            content: "Sahil Yogee - Full-Stack Developer Portfolio",
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
