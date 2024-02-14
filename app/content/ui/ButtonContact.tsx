import MailIcon from "@/app/components/svg/MailIcon";

const ButtonContact = () => {
  return (
    <a
      className="mt-4 flex cursor-pointer items-center justify-center gap-3 self-start rounded-[3px] bg-lightPink px-6 py-2 text-[12px] font-medium shadow-lg duration-300 hover:bg-yellowishWhite mobile-lg:text-[16px]"
      href="mailto:jakub.gornikk@outlook.com"
    >
      Send email
      <MailIcon />
    </a>
  );
};

export default ButtonContact;
