"use client";

import { Fragment, type CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import { useSectionInView } from "../hooks/use-section-in-view";
import { SectionName } from "../utils/data";
import { Container } from "@/app/components/container";

export const HomeSection = () => {
  const { ref } = useSectionInView(SectionName.Home);
  const { t } = useTranslation("translation", {
    keyPrefix: "sections.home",
  });

  return (
    <Container>
      <section
        id="home"
        ref={ref}
        aria-labelledby="hero-name"
        className="flex items-center pb-28 pt-36 md:pb-44 md:pt-64"
      >
        <div className="flex min-w-0 flex-col items-start">
          <p className="hero-greeting text-lightGray">{t("greeting")}</p>
          <h1
            id="hero-name"
            className="hero-name font-semibold leading-none text-yellowishWhite"
          >
            {t("fullName")
              .split(" ")
              .map((word, index) => (
                <Fragment key={index}>
                  {index > 0 ? " " : null}
                  <span className="hero-name-mask">
                    <span
                      className="hero-name-word"
                      style={{ "--word-index": index } as CSSProperties}
                    >
                      {word}
                    </span>
                  </span>
                </Fragment>
              ))}
          </h1>
          <p className="hero-role text-lightGray">{t("occupation")}</p>
        </div>
      </section>
    </Container>
  );
};
