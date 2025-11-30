import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import theme from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles";
import HeroSection from "./sections/HeroSection";
import TechSection from "./sections/TechSection";
import ProjectSection from "./sections/ProjectSection";
import SkillsSection from "./sections/SkillsSection";
import ArticleSection from "./sections/ArticleSection";
import ContactSection from "./sections/ContactSection";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Mohammad Alqabalany | MERN Stack Developer</title>
        <meta
          name="description"
          content="MERN Stack Web Developer with a finance background, expanding into Web3, blockchain, and AI automation."
        />
      </Helmet>

      <GlobalStyles />

      {/* Skip to main content - Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main id="main-content">
        <HeroSection />
        <TechSection />
        <ProjectSection />
        <SkillsSection />
        <ArticleSection />
        <ContactSection />
      </main>
    </ThemeProvider>
  );
};

export default App;
