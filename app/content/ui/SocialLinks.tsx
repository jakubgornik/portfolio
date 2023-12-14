import LinkedIn from "@/app/components/svg/LinkedIn";
import GitHub from "@/app/components/svg/GitHub";

const SocialLinks = () => {
  return (
    <div className="hidden sm:block">
      <GitHub />
      <LinkedIn />
      <div className="fixed bottom-0 left-8 h-[45px] w-[1px] bg-lightPink"></div>
    </div>
  );
};

export default SocialLinks;
