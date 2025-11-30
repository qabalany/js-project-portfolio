import styled from "styled-components";

const Button = ({ children, href, icon, variant = "primary", ariaLabel }) => {
  const ButtonComponent = variant === "primary" ? PrimaryButton : SecondaryButton;

  if (href) {
    return (
      <ButtonComponent
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel || children}
      >
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <span>{children}</span>
      </ButtonComponent>
    );
  }

  return (
    <ButtonComponent aria-label={ariaLabel || children}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <span>{children}</span>
    </ButtonComponent>
  );
};

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: all 0.3s ease;
  width: 100%;
  max-width: 280px;

  &:hover {
    transform: translateY(-2px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.125rem;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default Button;
