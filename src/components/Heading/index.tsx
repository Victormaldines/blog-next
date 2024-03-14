import { Container } from './styled';

export type HeadingProps = {
  children: React.ReactNode;
  // Quando um componente recebe children: React.ReactNode significa
  // que ele vai ter coisas dentro dele (no nosso caso, um texto (poderia ser um outro componente))
};

export const Heading = ({ children }: HeadingProps) => {
  return <Container>{children}</Container>;
};
