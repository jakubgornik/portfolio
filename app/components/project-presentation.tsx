import Image from "next/image";
import Link from "next/link";
import GithubSecondaryIcon from "./svg/GithubSecondaryIcon";
import LinkIcon from "./svg/LinkIcon";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import TechnologyCard from "./technology-card";

interface ProjectPresentationProps {
  technologies?: string[];
  description?: string[];
  githubUrl: string;
  siteUrl: string;
  img: StaticImageData;
  alt: string;
}

export const ProjectPresentation = ({
  technologies,
  description,
  githubUrl,
  siteUrl,
  img,
  alt,
}: ProjectPresentationProps) => {
  return (
    <>
      <li className="hidden grid-cols-6 md:grid">
        <Image
          src={img}
          alt={alt}
          className="col-[1/5] row-[1/2] rounded-[3px]"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="col-[3/-1] row-[1/2] pt-8"
        >
          <div className="flex flex-col rounded-[3px] bg-dark p-3 shadow-lg xl:p-6">
            <span className="text-[22px] text-lightGray xl:text-[26px]">
              {description?.[0]}
            </span>
            <span className="text-[18px] text-yellowishWhite xl:text-[22px]">
              {description?.[1]}
            </span>
            <div className="mt-1 text-[14px] text-yellowishWhite xl:text-[16px]">
              {description?.[2]}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="flex justify-end gap-2 pt-3 text-[14px]">
              {technologies?.map((title, index) => (
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
        </motion.div>
      </li>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative flex md:hidden"
      >
        <Image
          src={img}
          alt={alt}
          objectFit="cover"
          layout="fill"
          className="rounded-[3px]"
        />
        <div className="relative z-10 flex w-full flex-col rounded-[3px] bg-dark/70 p-8 shadow-lg backdrop-blur-lg">
          <span className="text-[22px] font-bold text-lightGray xl:text-[26px]">
            {description?.[0]}
          </span>
          <span className="text-[18px] font-medium text-yellowishWhite xl:text-[22px]">
            {description?.[1]}
          </span>
          <div className="mt-2 max-w-lg text-[14px] text-yellowishWhite/90 xl:text-[16px]">
            {description?.[2]}
          </div>
          <div className="flex flex-col gap-4 pt-4">
            <ul className="flex flex-wrap gap-2 text-[14px]">
              {technologies?.map((title, index) => (
                <TechnologyCard
                  key={index}
                  index={index}
                  title={title}
                  variant="project"
                />
              ))}
            </ul>
            <div className="flex gap-2 pt-2">
              <Link
                target="_blank"
                href={githubUrl}
                className="transition-opacity hover:opacity-80"
              >
                <GithubSecondaryIcon />
              </Link>
              <Link
                target="_blank"
                href={siteUrl}
                className="transition-opacity hover:opacity-80"
              >
                <LinkIcon />
              </Link>
            </div>
          </div>
        </div>
      </motion.li>
    </>
  );
};
