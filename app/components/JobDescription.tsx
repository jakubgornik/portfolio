const JobDescription = ({
  ocupation,
  timeRange,
  company,
  jobDescription,
  hasSecondJobPeriod,
  secondJobPeriod,
}: {
  ocupation: string;
  company: string;
  timeRange: string;
  jobDescription: string[];
  hasSecondJobPeriod?: boolean;
  secondJobPeriod?: {
    ocupation: string;
    company: string;
    timeRange: string;
    jobDescription: string[];
  };
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex max-w-[20rem] flex-col gap-2 mobile-lg:max-w-[28rem] sm:max-w-[26rem] md:max-w-[19rem] lg:max-w-[28rem]">
        <span className="text-yellowishWhite mobile-lg:text-[16px] sm:text-[18px] xl:text-[20px]">
          {ocupation} at{" "}
          <span className="font-medium text-lightPink">{company}</span>
        </span>
        <p className="text-[13px] text-lightPink mobile-lg:text-[14px] sm:text-[16px] xl:text-[18px]">
          {timeRange}
        </p>
        <ul className="flex flex-col gap-5 text-yellowishWhite">
          {jobDescription.map((el, index) => (
            <li
              key={index}
              className="relative ml-[14px] text-[12px] mobile-lg:text-[14px] xl:text-[16px]"
            >
              <span className="absolute -left-3 top-2 h-[8px] w-[8px] rounded-r-xl bg-lightPink" />
              <p className="ml-1">{el}</p>
            </li>
          ))}
        </ul>
      </div>
      {hasSecondJobPeriod && secondJobPeriod && (
        <div className="mt-6 flex max-w-[20rem] flex-col gap-2 mobile-lg:max-w-[28rem] sm:max-w-[26rem] md:max-w-[19rem] lg:max-w-[28rem]">
          <span className="h-[1px] w-full bg-yellowishWhite"></span>
          <p className="text-[13px] text-lightPink mobile-lg:text-[14px] sm:text-[16px] xl:text-[18px]">
            {secondJobPeriod.timeRange}
          </p>
          <ul className="flex flex-col gap-5 text-yellowishWhite">
            {secondJobPeriod.jobDescription.map((el, index) => (
              <li
                key={index}
                className="relative ml-[14px] text-[12px] mobile-lg:text-[14px] xl:text-[16px]"
              >
                <span className="absolute -left-3 top-2 h-[8px] w-[8px] rounded-r-xl bg-lightPink" />
                <p className="ml-1">{el}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JobDescription;
