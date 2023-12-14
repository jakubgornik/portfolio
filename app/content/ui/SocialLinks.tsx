import LinkedIn from "@/app/components/svg/LinkedIn";
import GitHub from "@/app/components/svg/GitHub";

const SocialLinks = () => {
  return (
    <>
      <GitHub />
      <LinkedIn />
      <div className="bg-lightPink fixed bottom-0 left-8 h-[45px] w-[1px]"></div>
    </>
  );
};

export default SocialLinks;
