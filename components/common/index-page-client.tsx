"use client";

import Image from "next/image";
import Link from "next/link";

import BlogCard from "@/components/blogs/blog-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { featuredProjects } from "@/config/projects";
import { featuredSkills } from "@/config/skills";
import { useLanguage } from "@/providers/language-provider";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export function IndexPageClient({ featuredBlogs }: { featuredBlogs: any[] }) {
  const { t } = useLanguage();

  return (
    <ClientPageWrapper>
      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          <Image
            src={profileImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary"
            alt="Ousman Z Trawally - Full-Stack Developer Portfolio"
            priority
          />
          <AnimatedText as="h1" delay={0.2} className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Ousman Z Trawally
          </AnimatedText>
          <AnimatedText as="h3" delay={0.4} className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
            {t("Full-Stack Developer", "Pembangun Full-Stack")}
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              {t(
                "Computer Science student with a strong interest in web development, software engineering, and database systems.",
                "Pelajar Sains Komputer dengan minat yang kuat dalam pembangunan web, kejuruteraan perisian, dan sistem pangkalan data."
              )}
            </p>
          </div>
          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link href={"/resume"} target="_blank" className={cn(buttonVariants({ size: "lg" }))} aria-label="View resume">
                <Icons.post className="w-4 h-4 mr-2" />
                {t("Resume", "Resume")}
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link href={"/contact"} rel="noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }))} aria-label="Contact Ousman Z Trawally">
                <Icons.contact className="w-4 h-4 mr-2" />
                {t("Contact", "Hubungi")}
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-10" />
          </AnimatedText>
        </div>
      </section>

      <AnimatedSection direction="up" className="container space-y-6 bg-muted py-10 my-14" id="projects">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText as="h2" className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {t("Projects", "Projek")}
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {t("Showcasing impactful projects and technical achievements.", "Mempamerkan projek-projek berimpak dan pencapaian teknikal.")}
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
            {featuredProjects.map((exp, index) => (
              <AnimatedSection key={exp.id} delay={0.1 * (index + 1)} direction="up" className="h-full w-full min-w-0">
                <ProjectCard project={exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" />
              {t("View All", "Lihat Semua")}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection direction="up" className="container space-y-6 py-10 my-14" id="experience">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText as="h2" className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {t("Certifications", "Sijil")}
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {t("Professional certifications and continuous learning.", "Sijil profesional dan pembelajaran berterusan.")}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection key={experience.id} delay={0.1 * (index + 1)} direction="up">
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" />
              {t("View All", "Lihat Semua")}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection direction="up" className="container space-y-6 bg-muted py-10 my-14" id="blogs">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText as="h2" className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {t("Blogs", "Blog")}
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {t(
              "Thoughts on web development, software engineering, and learning in public.",
              "Pemikiran tentang pembangunan web, kejuruteraan perisian, dan pembelajaran secara terbuka."
            )}
          </AnimatedText>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
          {featuredBlogs.map((blog, index) => (
            <AnimatedSection key={blog.slug} delay={0.1 * (index + 1)} direction="up" className="h-full w-full min-w-0">
              <BlogCard blog={blog} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/blogs">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" />
              {t("View All", "Lihat Semua")}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection direction="up" className="container space-y-6 py-10 my-14" id="skills">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText as="h2" className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {t("Skills", "Kemahiran")}
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {t("Key skills that define my professional identity.", "Kemahiran utama yang mentakrifkan identiti profesional saya.")}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" />
              {t("View All", "Lihat Semua")}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}