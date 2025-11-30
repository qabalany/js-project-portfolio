import styled from "styled-components";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/qablany/", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/qabalany", icon: "github" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const ContactSection = () => {
  return (
    <Section id="contact" aria-label="Contact information">
      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Heading
          as={motion.h2}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let's Talk
        </Heading>

        <ProfileImage
          as={motion.div}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/hero-main.png"
            alt="Portrait of Mohammad Alqabalany"
            width="200"
            height="200"
          />
        </ProfileImage>

        <ContactInfo as={motion.address} variants={containerVariants}>
          <motion.p variants={itemVariants}>
            <ContactName>Mohammad Alqabalany</ContactName>
          </motion.p>
          <ContactLink
            as={motion.a}
            href="tel:+46739752725"
            aria-label="Call Mohammad"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            +46(0)739752725
          </ContactLink>
          <ContactLink
            as={motion.a}
            href="mailto:qabalany@gmail.com"
            aria-label="Email Mohammad"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            qabalany@gmail.com
          </ContactLink>
        </ContactInfo>

        <SocialLinks as={motion.nav} aria-label="Social media links" variants={itemVariants}>
          {socialLinks.map((social) => (
            <SocialLink
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.name} profile`}
            >
              <SocialIcon icon={social.icon} />
            </SocialLink>
          ))}
        </SocialLinks>
      </Container>
    </Section>
  );
};

// Social Icon Component
const SocialIcon = ({ icon }) => {
  const icons = {
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    stackoverflow: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15 21H3V12h2v7h10V12h2v9zM5.5 7.5l1.4-1.4 5.5 5.5-1.4 1.4L5.5 7.5zm2.1-3.4l1-1.7 6.5 3.7-1 1.7-6.5-3.7zm3.4-3.1l.7-1.9 7 2.5-.7 1.9-7-2.5zM6 16v-2h8v2H6z"/>
      </svg>
    ),
  };

  return icons[icon] || null;
};

// Styled Components
const Section = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.section.mobile} 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.section.tablet} 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing.section.desktop} 24px;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.heading.mobile};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.heading.tablet};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.heading.desktop};
  }
`;

const ProfileImage = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 200px;
    height: 200px;
  }
`;

const ContactInfo = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-style: normal;
  text-align: center;
`;

const ContactName = styled.span`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.875rem;
  }
`;

const ContactLink = styled.a`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

const SocialLinks = styled.nav`
  display: flex;
  gap: 24px;
`;

const SocialLink = styled.a`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.secondary};
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    opacity: 0.8;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default ContactSection;
