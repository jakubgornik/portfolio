const TechnologyTitle = ({ title }: { title: string }) => {
  return (
    <div className="bg-purple rounded-[5px] px-2 py-2 shadow-lg">
      <span className="mobile-lg:text-[16px] text-[12px] text-yellowishWhite sm:text-[18px]">
        {title}
      </span>
    </div>
  );
};

export default TechnologyTitle;
