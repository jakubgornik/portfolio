"use client";

import { TechnologyCategory, TechnologyFilterName } from "@/app/utils/data";
import { TechnologyFilterOption } from "../content/techstack-section";

interface TechnologyCategoryFilterProps {
  categories: TechnologyCategory[];
  active: TechnologyFilterOption;
  onChange: (value: TechnologyFilterOption) => void;
  labels?: Partial<Record<TechnologyFilterOption, string>>;
}

export const TechnologyCategoryFilter = ({
  categories,
  active,
  onChange,
  labels,
}: TechnologyCategoryFilterProps) => {
  const options: TechnologyFilterOption[] = [
    TechnologyFilterName.All,
    ...categories,
  ];

  const getLabel = (value: TechnologyFilterOption) => labels?.[value] ?? value;

  return (
    <>
      <div className="md:hidden">
        <div className="relative mx-auto w-[180px]">
          <select
            value={active}
            onChange={(e) => onChange(e.target.value as TechnologyFilterOption)}
            className="w-[180px] appearance-none rounded-[3px] border border-lightGray/30 bg-dark px-3 py-2 pr-9 text-sm font-semibold text-yellowishWhite shadow-lg outline-none transition-colors focus:border-lightGray/60"
          >
            {options.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-dark text-yellowishWhite"
              >
                {getLabel(option)}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-yellowishWhite/80"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.12l3.71-3.9a.75.75 0 111.08 1.04l-4.25 4.47a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="hidden flex-wrap justify-center gap-2 md:flex">
        {options.map((option) => {
          const isActive = active === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`rounded-[3px] border px-4 py-2 text-sm font-semibold shadow-lg ${
                isActive
                  ? "border-lightGray/60 bg-lightGray/20 text-yellowishWhite"
                  : "border-lightGray/25 bg-dark text-yellowishWhite/90 hover:bg-lightGray/10"
              }`}
            >
              {getLabel(option)}
            </button>
          );
        })}
      </div>
    </>
  );
};
