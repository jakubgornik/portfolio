const JobDescription = ({
  ocupation,
  timeRange,
  company,
  jobDescription,
}: {
  ocupation: string;
  company: string;
  timeRange: string;
  jobDescription: string[];
}) => {
  return (
    <div className="flex max-w-[18rem] flex-col gap-2 mobile-lg:max-w-[20rem] md:max-w-[22rem] lg:max-w-[28rem]">
      <span className="text-yellowishWhite mobile-lg:text-[16px] sm:text-[18px]">
        {ocupation} at{" "}
        <span className="font-medium text-lightPink">{company}</span>
      </span>
      <p className="text-[13px] text-lightPink mobile-lg:text-[14px] sm:text-[16px]">
        {timeRange}
      </p>
      <ul className="flex flex-col gap-5 text-yellowishWhite">
        {jobDescription.map((el, index) => (
          <li
            key={index}
            className="relative ml-[14px] text-[12px] mobile-lg:text-[16px]"
          >
            <span className="absolute -left-3 top-2 h-[8px] w-[8px] rounded-r-xl bg-lightPink" />
            <p className="ml-1">{el}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobDescription;
