import styled from "styled-components";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// 3D Tilt Card Component - from old portfolio
const TiltCard = ({ children, $initialRotate = 0, style, ...props }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        rotate: $initialRotate,
        transformStyle: "preserve-3d",
        ...style,
      }}
      whileHover={{ scale: 1.05, zIndex: 20 }}
      {...props}
    >
      <TiltInner>{children}</TiltInner>
    </motion.div>
  );
};

// Animation variants - from old portfolio
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <Section id="home" aria-label="Introduction">
      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Greeting as={motion.p} variants={itemVariants}>
          Hi there, I'm
        </Greeting>

        <Name as={motion.h1} variants={itemVariants}>
          Mohammad Alqabalany
        </Name>

        <ImagesWrapper as={motion.div} variants={itemVariants}>
          <ImageContainer>
            <TiltCard $initialRotate={-6} style={{ position: "absolute", left: "10%", zIndex: 1 }}>
              <SideImage
                style={{ backgroundImage: "url('/images/hero-left.png')" }}
                aria-hidden="true"
              />
            </TiltCard>

            <TiltCard $initialRotate={6} style={{ position: "absolute", right: "10%", zIndex: 1 }}>
              <SideImage
                style={{ backgroundImage: "url('/images/hero-right.png')" }}
                aria-hidden="true"
              />
            </TiltCard>

            <TiltCard $initialRotate={0} style={{ position: "relative", zIndex: 10 }}>
              <MainImage
                style={{ backgroundImage: "url('/images/hero-main.png')" }}
                role="img"
                aria-label="Portrait of Mohammad Alqabalany"
              />
            </TiltCard>
          </ImageContainer>
        </ImagesWrapper>

        <Subtitle as={motion.p} variants={itemVariants}>
          MERN Stack Web Developer
        </Subtitle>

        <Bio as={motion.p} variants={itemVariants}>
          I'm a MERN Stack Web Developer with a finance background, currently
          transitioning into Web3, blockchain, and AI-driven automation. I love
          building modern web applications with JavaScript, React, and TypeScript,
          and I'm expanding into backend development with Node.js, Express, and MongoDB.
        </Bio>
      </Container>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 16px 48px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.secondary};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 100px 24px 64px;
  }
`;

const Container = styled.div`
  max-width: 1314px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

const Greeting = styled.p`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.875rem;
  }
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.hero.mobile};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.heading};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.hero.tablet};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 100px;
  }
`;

const ImagesWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 280px;
  margin: 32px 0;
  perspective: 1000px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TiltInner = styled.div`
  transform: translateZ(50px);
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
`;

const SideImage = styled.div`
  width: 180px;
  height: 160px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  @media (min-width: 480px) {
    width: 220px;
    height: 190px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 280px;
    height: 240px;
  }
`;

const MainImage = styled.div`
  width: 200px;
  height: 180px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media (min-width: 480px) {
    width: 240px;
    height: 220px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 288px;
    height: 260px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  max-width: 782px;
  padding: 0 16px;

  @media (min-width: 480px) {
    font-size: 1.25rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.875rem;
  }
`;

const Bio = styled.p`
  font-size: 1rem;
  line-height: ${({ theme }) => theme.lineHeights.body};
  max-width: 782px;
  padding: 0 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.125rem;
  }
`;

export default HeroSection;
