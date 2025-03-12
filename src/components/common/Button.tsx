import styled from "styled-components";
import { ButtonHTMLAttributes } from 'react';
import { ButtonScheme, ButtonSize } from "../../style/theme";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  size: ButtonSize,
  scheme: ButtonScheme,
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, size, scheme, disabled, isLoading, onClick }: Props) => {
  return (
    <ButtonStyle size={size} scheme={scheme} disabled={disabled} isLoading={isLoading} onClick={onClick}>{children}</ButtonStyle>
  );
};

const ButtonStyle = styled.button<Omit<Props, 'children'>>`
  font-size: ${({ theme, size }) => theme.button[size].fontsize};
  color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
  padding: ${({ theme, size }) => theme.button[size].padding};
  background-color: ${({ theme, scheme }) => theme.buttonScheme[scheme].backgroundColor};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  opacity: ${( { disabled }) => (disabled ? 0.1 : 1)};
  pointer-events: ${( { disabled }) => (disabled ? "none" : "auto")};
  cursor: ${( { disabled }) => (disabled ? "none" : "pointer")};
`

export default Button;
