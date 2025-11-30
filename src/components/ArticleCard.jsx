import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "./Button";
import Tag from "./Tag";

const ArticleCard = ({ article, index = 0 }) => {
  const { date, title, description, image, link } = article;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: index * 0.15
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Card
      as={motion.article}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <ImageWrapper as={motion.div} variants={imageVariants}>
        <img src={image} alt={`Illustration for article: ${title}`} loading="lazy" />
      </ImageWrapper>

      <Content as={motion.div} variants={contentVariants}>
        <Tag>{date}</Tag>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <Button
          href={link}
          icon={<LinkIcon />}
          ariaLabel={`Read article: ${title}`}
        >
          Read article
        </Button>
      </Content>
    </Card>
  );
};

// Icon
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// Styled Components
const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
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
    aspect-ratio: 16/9;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex: 0 0 400px;

    img {
      aspect-ratio: 1;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 1.3;

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

export default ArticleCard;
