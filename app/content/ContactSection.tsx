import SectionHeader from "../components/SectionHeader";
import SectionDescription from "../components/SectionDescription";
import Container from "../components/Container";
import ButtonSubmit from "./ui/ButtonSubmit";
import ButtonContact from "./ui/ButtonContact";

const ContactSection = () => {
  return (
    <Container>
      <div className="flex flex-col gap-24 pb-12 pt-36 sm:flex-row sm:gap-6">
        <div className="flex w-full flex-col gap-3 sm:w-1/2">
          <SectionHeader index="06" title="Contact" />
          <SectionDescription>
            Feel free to contacts me whether you are looking for a new promising
            developer for your team, want to stay in contact for future
            recruitments or just want to leave me a message.
          </SectionDescription>
          <SectionDescription>
            I`m currently looking for new opportunities so my inbox is always
            open. You can send me message with form or just leave an email.
          </SectionDescription>
          <SectionDescription>
            I hope you enjoyed browsing through this portfolio.
          </SectionDescription>
        </div>
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
                Your name
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
                Your email
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
                className="text-darkerPurple mb-4 rounded-[5px] bg-yellowishWhite px-2 py-1 font-semibold focus-within:outline-none"
                name="message"
                id="message"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ButtonSubmit />
              <span className="text-[14px] text-yellowishWhite"> or</span>
              <ButtonContact />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
