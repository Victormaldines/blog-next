import { Date } from '../Date';
import { Container } from './styled';

export type PostDetailsProps = {
  author: string;
  category: string;
  date: string;
};

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por <b>{author}</b> | {category}
    </Container>
  );
};
