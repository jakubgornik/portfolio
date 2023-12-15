import ButtonContact from "./ButtonContact";
import ButtonSubmit from "./ButtonSubmit";

const ContactForm = () => {
  return (
    <div className="bg-purple flex w-full flex-col items-center rounded-[5px] py-12 shadow-lg sm:w-1/2">
      <p className="pb-2 text-[22px] text-yellowishWhite sm:text-[32px]">
        Contact form
      </p>
      <form
        action="submit"
        className="mobile-lg:text-base flex w-full flex-col items-center gap-5 text-[12px]"
      >
        <div className="flex w-[80%] flex-col gap-1 px-4">
          <label
            className="pointer-events-none text-yellowishWhite"
            htmlFor="name"
          >
            Your full name
          </label>
          <input
            className="text-darkerPurple h-[30px] w-full rounded-[5px] bg-yellowishWhite px-2 font-semibold focus-within:outline-none"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="flex w-[80%] flex-col gap-1 px-4">
          <label
            className="pointer-events-none text-yellowishWhite"
            htmlFor="email"
          >
            Your email addres
          </label>
          <input
            className="text-darkerPurple h-[30px] w-full rounded-[5px] bg-yellowishWhite px-2 font-semibold focus-within:outline-none"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex w-[80%] flex-col gap-1 px-4">
          <label
            className="pointer-events-none text-yellowishWhite"
            htmlFor="subject"
          >
            Message subject
          </label>
          <input
            className="text-darkerPurple h-[30px] w-full rounded-[5px] bg-yellowishWhite px-2 font-semibold focus-within:outline-none"
            type="text"
            name="subject"
            id="subject"
          />
        </div>
        <div className="flex w-[80%] flex-col gap-2 px-4">
          <label
            className="pointer-events-none text-yellowishWhite"
            htmlFor="message"
          >
            Your message
          </label>
          <textarea
            className="text-darkerPurple mb-4 max-h-[120px] rounded-[5px] bg-yellowishWhite px-2 py-1 font-semibold focus-within:outline-none"
            name="message"
            id="message"
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ButtonSubmit />
          <span className="text-[14px] text-yellowishWhite">or</span>
          <ButtonContact />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
