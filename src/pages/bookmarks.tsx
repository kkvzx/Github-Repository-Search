import Layout from '@/components/Layout';
import SingleRepository, {SingleRepositoryProps} from '@/components/SingleRepository';
import {nanoid} from 'nanoid';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
const PageWrapper = styled.article`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  color: #717780;
  @media screen and (max-width: 600px) {
    margin-bottom: 45px;
  }
`;
const StyledText = styled.p`
  text-align: center;
`;
const Bookmarks = () => {
  const [favorites, setFavorites] = useState<any>([]);
  // gets favorites from local storage
  const getArray = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('favorites') || '0');
  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);
  //saves favoritestes to local storage
  useEffect(() => {
    typeof window !== 'undefined' && localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  return (
    <Layout>
      <PageWrapper>
        {favorites.length > 0 ? (
          favorites.map((repo: SingleRepositoryProps) => (
            <SingleRepository
              key={nanoid()}
              repoName={repo.repoName}
              description={repo.description}
              author={repo.author}
              avatarUrl={repo.avatarUrl}
              sourceUrl={repo.sourceUrl}
              stargazerCount={repo.stargazerCount}
              url={repo.url}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))
        ) : (
          <StyledText>Nothing to be shown yet.</StyledText>
        )}
      </PageWrapper>
    </Layout>
  );
};

export default Bookmarks;
