import Layout from '@/components/Layout';
import SearchBar from '@/components/SearchBar';
import {navigate} from 'gatsby';
import React, {useState} from 'react';
import styled from 'styled-components';
import Home from '..';

const PageWrapper = styled.article`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Search = () => {
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
    </Layout>
  );
};

export default Search;
