import Head from 'next/head';

import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { Footer } from '@/components/Footer';
import { PostData } from '@/domain/posts/post';
import { Container } from './styles';
import { PostCard } from '@/components/PostCard';
import { SITE_NAME } from '@/config/app-config';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta
          name="description"
          content="Este é meu blog de tecnologia. Projeto realizado a partir de um curso da Udemy."
        />
      </Head>
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
