import React, {useCallback, useEffect, useState} from 'react';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar';
import Explore from '@/components/Explore';
import axios from 'axios';
import {navigate} from 'gatsby';
import {GlobalStyle} from '@/styles/theme';

const PageWrapper = styled.main`
  width: 100%;
  height: 100vh;
  padding: 0 20%;
  background: var(--background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 9500px) {
    padding: 0 5%;
  }
`;
const StyledTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #717780;
  @media screen and (max-width: 650px) {
    font-size: 1.1rem;
  }
`;
const TextContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: #717780;
  @media screen and (max-width: 650px) {
    font-size: 0.9rem;
  }
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
    <>
      <GlobalStyle />
      <PageWrapper>
        <StyledTitle>Welcome to Github Repository Search</StyledTitle>
        <SearchBar
          searchRepo={repoInput}
          handleSubmit={handleSubmit}
          saveUserInput={saveUserInput}
          clearUserInput={clearUserInput}
        />
        <TextContainer>Search for your repository to begin</TextContainer>
      </PageWrapper>
    </>
  );
};

export default Home;
