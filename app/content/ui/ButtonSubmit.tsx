import SendIcon from "@/app/components/svg/SendIcon";

const ButtonSubmit = () => {
  return (
    <button
      type="submit"
      className="flex cursor-pointer items-center gap-3 rounded-[5px] bg-grayishWhite px-6 py-2 font-medium shadow-lg duration-300 hover:bg-lightPink"
    >
      Submit message
      <SendIcon />
    </button>
  );
};

export default ButtonSubmit;
