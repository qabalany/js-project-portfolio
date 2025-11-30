import styled from "styled-components";
import { motion } from "framer-motion";

const skills = {
  code: ["HTML5", "CSS3", "JavaScript ES6", "React", "TypeScript", "GitHub"],
  toolbox: ["Postman", "Jira", "VS Code", "Chrome DevTools", "Figma", "Slack"],
  upcoming: ["Node.js", "Express", "MongoDB"],
  more: [
    "Decentralized Finance",
    "Digital ownership",
    "Process Design",
    "Automation (n8n)",
    "Agile methodology",
  ],
};

const skillColumns = [
  { title: "Code", items: skills.code },
  { title: "Toolbox", items: skills.toolbox },
  { title: "Upcoming", items: skills.upcoming },
  { title: "More", items: skills.more },
];

const SkillColumn = ({ title, items, delay = 0 }) => {
  return (
    <Column
      as={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <CategoryTag>{title}</CategoryTag>
      <SkillList>
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + index * 0.05 }}
            viewport={{ once: true }}
          >
            {item}
          </motion.li>
        ))}
      </SkillList>
    </Column>
  );
};

const SkillsSection = () => {
  return (
    <Section id="skills" aria-label="My skills">
      <Container>
        <Heading
          as={motion.h2}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </Heading>

        <SkillsGrid>
          {skillColumns.map((column, index) => (
            <SkillColumn
              key={column.title}
              title={column.title}
              items={column.items}
              delay={index * 0.1}
            />
          ))}
        </SkillsGrid>
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
  max-width: 900px;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CategoryTag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
`;

const SkillList = styled.ul`
  font-size: 1rem;
  line-height: 1.8;

  li {
    margin-bottom: 4px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.125rem;
  }
`;

export default SkillsSection;
