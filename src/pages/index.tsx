import React, {useCallback, useEffect, useState} from 'react';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar';
import Explore from '@/components/Explore';
import axios from 'axios';
import {navigate} from 'gatsby';

const PageWrapper = styled.article`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  /* background: green; */
  text-align: center;
  color: #717780;
`;

const Home: React.FC = () => {
  const [repoInput, setRepoInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${repoInput}`);
  };
  const saveUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoInput(e.target.value);
  };
  const clearUserInput = (e: React.MouseEvent<HTMLElement>) => {
    setRepoInput('');
  };

  return (
    <Layout>
      <PageWrapper>
        <SearchBar
          searchRepo={repoInput}
          handleSubmit={handleSubmit}
          saveUserInput={saveUserInput}
          clearUserInput={clearUserInput}
        />
      </PageWrapper>
      <TextContainer>
        <h3>Welcome to my github repository search website</h3>
      </TextContainer>
      <br />
      <TextContainer>Website was made using Gatsby, Typescript, styled-components & Giithub api</TextContainer>
      <TextContainer>I also implemented sorting function</TextContainer>
    </Layout>
  );
};

export default Home;
