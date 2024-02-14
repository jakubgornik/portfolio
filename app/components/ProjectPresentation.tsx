import Image from "next/image";
import TechnologyCard from "./TechnologyCard";
import Link from "next/link";
import GithubSecondaryIcon from "./svg/GithubSecondaryIcon";
import LinkIcon from "./svg/LinkIcon";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";

const ProjectPresentation = ({
  technologies,
  description,
  githubUrl,
  siteUrl,
  img,
  alt,
}: {
  technologies: string[];
  description: string[];
  githubUrl: string;
  siteUrl: string;
  img: StaticImageData;
  alt: string;
}) => {
  return (
    <>
      <li className="hidden grid-cols-6 md:grid">
        <Image
          src={img}
          alt={alt}
          className="col-[1/5] row-[1/2] rounded-[3px]"
        />
        <div className="col-[3/-1] row-[1/2] pt-8">
          <div className="flex flex-col rounded-[3px] bg-purple p-3 xl:p-6">
            <span className="text-[22px] text-lightPink xl:text-[26px]">
              {description[0]}
            </span>
            <span className="text-[18px] text-yellowishWhite xl:text-[22px]">
              {description[1]}
            </span>
            <div className="mt-1 text-[14px] text-yellowishWhite xl:text-[16px]">
              {description[2]}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="flex justify-end gap-2 pt-3 text-[14px]">
              {technologies.map((title, index) => (
                <TechnologyCard
                  key={index}
                  index={index}
                  title={title}
                  variant="project"
                />
              ))}
            </ul>
            <div className="flex justify-end gap-2">
              <Link target="_blank" href={githubUrl}>
                <GithubSecondaryIcon />
              </Link>
              <Link target="_blank" href={siteUrl}>
                <LinkIcon />
              </Link>
            </div>
          </div>
        </div>
      </li>

      <li className="relative flex md:hidden">
        <Image
          src={img}
          alt={alt}
          objectFit="cover"
          layout="fill"
          className="rounded-[3px]"
        />
        <div className="z-100 relative flex flex-col p-8">
          <span className="text-[22px] text-lightPink xl:text-[26px]">
            {description[0]}
          </span>
          <span className="text-[18px] text-yellowishWhite xl:text-[22px]">
            {description[1]}
          </span>
          <div className="mt-1 max-w-lg text-[14px] text-yellowishWhite xl:text-[16px]">
            {description[2]}
          </div>
          <div className="flex flex-col gap-4">
            <ul className="flex flex-wrap gap-2 pt-3 text-[14px]">
              {technologies.map((title, index) => (
                <TechnologyCard
                  key={index}
                  index={index}
                  title={title}
                  variant="project"
                />
              ))}
            </ul>
            <div className="flex gap-2">
              <Link target="_blank" href={githubUrl}>
                <GithubSecondaryIcon />
              </Link>
              <Link target="_blank" href={siteUrl}>
                <LinkIcon />
              </Link>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProjectPresentation;
