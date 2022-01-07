import { Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC, useMemo } from "react";

import { ProjectCard } from "./libs/ProjectCard";

export const Projects: FC = () => {
  const { t } = useTranslation("common");

  const projects = useMemo(
    () => [
      {
        title: "CodeWork",
        subtitle: t("projects.codework.subtitle"),
        description: t("projects.codework.description"),
        technologies: ["NextJs", "Postgres", "GraphQL", "Hasura"],
        externalLink: "https://beta.codework.codes/",
        githubLink: "https://github.com/deepak-negi-web/codepen-clone",
        imageLink: `/images/codework.png`,
      },
      {
        title: "CollegeHub",
        subtitle: t("projects.collegehub.subtitle"),
        description: t("projects.collegehub.description"),
        technologies: ["React", "Graphql", "Hasura"],
        externalLink: "https://collegehub.netlify.app/",
        githubLink: "https://github.com/deepak-negi-web/collegeHub",
        imageLink: `/images/collegehub.png`,
      },
      {
        title: "Nuskha",
        subtitle: t("projects.nuskha.subtitle"),
        description: t("projects.nuskha.description"),
        technologies: ["React", "MongoDb", "Firebase"],
        externalLink: "https://nuskha-your-own-recipe.web.app/",
        githubLink: "https://github.com/deepak-negi-web/next-recipe-app",
        imageLink: `/images/nuskha.png`,
      },
    ],
    [t]
  );

  return (
    <Section
      className="md:mt-20 mt-14"
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
        {projects.map((project, i) => (
          <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
        ))}
      </div>
    </Section>
  );
};
