const TechnologyCard = ({ title }: { title: string }) => {
  return (
    <div className="rounded-[5px] bg-purple px-2 py-2 shadow-lg">
      <span className="text-[12px] text-yellowishWhite mobile-lg:text-[16px] sm:text-[18px]">
        {title}
      </span>
    </div>
  );
};

export default TechnologyCard;
