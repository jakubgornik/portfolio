import MailIcon from "@/app/components/svg/MailIcon";

const ButtonContact = () => {
  return (
    <a
      className="flex cursor-pointer items-center justify-center gap-3 self-center rounded-[5px] bg-yellowishWhite px-6 py-2 font-medium shadow-lg duration-300 hover:bg-lightPink"
      href="mailto:jakub.gornikk@outlook.com"
    >
      Send email
      <MailIcon />
    </a>
  );
};

export default ButtonContact;
