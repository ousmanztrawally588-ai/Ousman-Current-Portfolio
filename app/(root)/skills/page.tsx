"use client";

import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { skills } from "@/config/skills";
import { useLanguage } from "@/providers/language-provider";

export default function SkillsPage() {
  const { t } = useLanguage();

  return (
    <PageContainer
      title={t("Skills", "Kemahiran")}
      description={t(
        "Key skills that define my professional identity.",
        "Kemahiran utama yang mentakrifkan identiti profesional saya."
      )}
    >
      <SkillsCard skills={skills} />
    </PageContainer>
  );
}