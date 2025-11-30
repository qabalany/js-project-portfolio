import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "./Button";
import Tag from "./Tag";

const ProjectCard = ({ project, index = 0 }) => {
  const { name, description, image, tags, position, netlify, github } = project;
  const reversed = position === "right";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: index * 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: reversed ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: reversed ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Card
      as={motion.article}
      $reversed={reversed}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <ImageWrapper as={motion.div} variants={imageVariants}>
        <img src={image} alt={`Screenshot of ${name} project`} loading="lazy" />
      </ImageWrapper>

      <Content as={motion.div} variants={contentVariants}>
        <TagsWrapper>
          {tags.map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
        </TagsWrapper>

        <Title>{name}</Title>
        <Description>{description}</Description>

        <ButtonsWrapper>
          <Button
            href={netlify}
            icon={<WebIcon />}
            ariaLabel={`View live demo of ${name}`}
          >
            Live demo
          </Button>
          <Button
            href={github}
            icon={<GitHubIcon />}
            ariaLabel={`View source code of ${name} on GitHub`}
          >
            View Code
          </Button>
        </ButtonsWrapper>
      </Content>
    </Card>
  );
};

// Icons
const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// Styled Components
const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: ${({ $reversed }) => ($reversed ? "row-reverse" : "row")};
    align-items: center;
    gap: 64px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray};

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex: 0 0 400px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.875rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: ${({ theme }) => theme.lineHeights.body};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.125rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 16px;
  }
`;

export default ProjectCard;
