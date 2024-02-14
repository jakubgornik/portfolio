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
  description: ReactNode;
  githubUrl: string;
  siteUrl: string;
  img: StaticImageData;
  alt: string;
}) => {
  return (
    <li className="grid grid-cols-6">
      <Image
        src={img}
        alt={alt}
        className="col-[1/5] row-[1/2] rounded-[3px]"
      />
      <div className="col-[3/-1] row-[1/2] pt-8">
        {description}

        <div className="flex flex-col gap-3">
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
  );
};

export default ProjectPresentation;
