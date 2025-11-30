import styled from "styled-components";

const Tag = ({ children, variant = "light" }) => {
  return <TagStyled $variant={variant}>{children}</TagStyled>;
};

const TagStyled = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ $variant, theme }) =>
    $variant === "dark" ? theme.colors.primary : theme.colors.secondary};
  color: ${({ $variant, theme }) =>
    $variant === "dark" ? theme.colors.secondary : theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export default Tag;
