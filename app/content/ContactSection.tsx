"use client";
import SectionHeader from "../components/SectionHeader";
import SectionDescription from "../components/SectionDescription";
import Container from "../components/Container";
import { useSectionInView } from "../hooks/useSectionInView";
import ButtonContact from "./ui/ButtonContact";
import { motion } from "framer-motion";
import useIsWindowWidthLowerThan from "../hooks/useIsWindowWidthLowerThan";

const ContactSection = () => {
  const { ref } = useSectionInView("Contact");
  const isWindowWidthLower = useIsWindowWidthLowerThan(520);

  return (
    <Container>
      <motion.div
        initial={{
          opacity: 0,
          x: isWindowWidthLower ? 0 : -20,
          y: isWindowWidthLower ? 20 : 0,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="contact"
        ref={ref}
        className="flex scroll-mt-6 flex-col gap-24 py-52 sm:flex-row sm:gap-6"
      >
        <div className="flex flex-col gap-3">
          <SectionHeader index="06" title="Contact" />
          <SectionDescription>
            Feel free to contacts me whether you are looking for a new promising
            developer for your team, want to stay in contact for future
            recruitments or just want to leave me a message.
          </SectionDescription>
          <SectionDescription>
            I`m currently looking for new opportunities so my inbox is always
            open. You can send me an email using button below
          </SectionDescription>
          <ButtonContact />
        </div>
      </motion.div>
    </Container>
  );
};

export default ContactSection;
