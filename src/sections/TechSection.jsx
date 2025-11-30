import styled from "styled-components";
import { motion } from "framer-motion";
import HtmlLogo from "../assets/images/HTML_Logo.svg";
import CssLogo from "../assets/images/CSS_Logo.svg";
import JavascriptLogo from "../assets/images/Javascript_Logo.svg";
import TypescriptLogo from "../assets/images/Typescript_Logo.svg";
import ReactLogo from "../assets/images/React_Logo.svg";
import GitHubLogo from "../assets/images/Github_Logo.svg";
import N8NLogo from "../assets/images/n8n-logo.svg";
import FigmaLogo from "../assets/images/Figma_Logo.svg";
import MongoDBLogo from "../assets/images/mongodb-svgrepo-com.svg";
import NodeLogo from "../assets/images/Node.svg";
import NotionLogo from "../assets/images/Notion_Logo.svg";
import SlackLogo from "../assets/images/Slack_Logo.svg";
import ViteLogo from "../assets/images/vite.svg";

const TechSection = () => {
  return (
    <Section id="tech" aria-label="Technologies I use">
      <Container
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Heading>Tech</Heading>
        
        <IconGrid>
          <IconWrapper>
            <img src={HtmlLogo} alt="HTML5" />
          </IconWrapper>
          <IconWrapper>
            <img src={CssLogo} alt="CSS3" />
          </IconWrapper>
          <IconWrapper>
            <img src={JavascriptLogo} alt="JavaScript" />
          </IconWrapper>
          <IconWrapper>
            <img src={TypescriptLogo} alt="TypeScript" />
          </IconWrapper>
          <IconWrapper>
            <img src={ReactLogo} alt="React" />
          </IconWrapper>
          <IconWrapper>
            <img src={GitHubLogo} alt="GitHub" />
          </IconWrapper>
          <IconWrapper>
            <img src={N8NLogo} alt="n8n workflow automation" />
          </IconWrapper>
          <IconWrapper>
            <img src={FigmaLogo} alt="Figma" />
          </IconWrapper>
          <IconWrapper>
            <img src={MongoDBLogo} alt="MongoDB" />
          </IconWrapper>
          <IconWrapper>
            <img src={NodeLogo} alt="Node.js" />
          </IconWrapper>
          <IconWrapper>
            <img src={NotionLogo} alt="Notion" />
          </IconWrapper>
          <IconWrapper>
            <img src={SlackLogo} alt="Slack" />
          </IconWrapper>
          <IconWrapper>
            <img src={ViteLogo} alt="Vite" />
          </IconWrapper>
        </IconGrid>

        <TechList
          as={motion.p}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, 
          Node.js, MongoDB, Web Accessibility, APIs, mob-programming, 
          pair-programming, GitHub, TypeScript, n8n.
        </TechList>
      </Container>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
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
  gap: 24px;
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

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 16px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 24px;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 48px;
    height: 48px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 56px;
    height: 56px;
  }
`;

const TechList = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeights.body};
  max-width: 600px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.125rem;
  }
`;

export default TechSection;
