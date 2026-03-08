export const SectionHeader = ({
  index,
  title,
}: {
  index: string;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap text-[22px] sm:text-[32px]">
      <span className="text-lightGray">{index}.</span>
      <h3 className="text-yellowishWhite">{title}</h3>
      <div className="h-[1px] w-[30px] bg-lightGray mobile-lg:w-[60px] sm:w-[80px] md:w-[90px]"></div>
    </div>
  );
};
