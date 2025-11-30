import styled from "styled-components";
import { motion } from "framer-motion";
import ArticleCard from "../components/ArticleCard";
import articlesData from "../data/articles.json";

const ArticleSection = () => {
  const { articles } = articlesData;

  return (
    <Section id="articles" aria-label="My articles and thoughts">
      <Container>
        <Heading
          as={motion.h2}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Words
        </Heading>

        <ArticlesGrid>
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </ArticlesGrid>
      </Container>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section.mobile} 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.section.tablet} 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing.section.desktop} 24px;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 64px;
  }
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

const ArticlesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 64px;
  }
`;

export default ArticleSection;
