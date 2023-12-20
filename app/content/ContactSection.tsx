"use client";
import SectionHeader from "../components/SectionHeader";
import SectionDescription from "../components/SectionDescription";
import Container from "../components/Container";
import ContactForm from "./ui/ContactForm";
import { useSectionInView } from "../hooks/useSectionInView";

const ContactSection = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <Container>
      <div
        id="contact"
        ref={ref}
        className="flex scroll-mt-6 flex-col gap-24 pb-12 pt-52 sm:flex-row sm:gap-6"
      >
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
        <ContactForm />
      </div>
    </Container>
  );
};

export default ContactSection;
