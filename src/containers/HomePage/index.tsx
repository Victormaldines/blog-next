import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { Footer } from '@/components/Footer';
import { PostData } from '@/domain/posts/post';
import { Container } from './styles';

import { PostCard } from '@/components/PostCard';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <>
              {/* {console.log(post.attributes.cover.data.attributes)} */}
              <PostCard
                key={post.id}
                slug={post.attributes.slug}
                title={post.attributes.title}
                cover={
                  post.attributes.cover.data.attributes.formats.thumbnail.url
                }
              >
                <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
              </PostCard>
            </>
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
