import React, {useCallback, useEffect, useState} from 'react';
import Layout from '@/components/Layout';
import styled, {keyframes} from 'styled-components';
import SearchBar from '@/components/SearchBar';
import Explore from '@/components/Explore';
import axios from 'axios';
import {navigate} from 'gatsby';

const PageWrapper = styled.article`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const SpinnerWrapper = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid var(--background-color);
  background: transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Search: React.FC = ({params}: any) => {
  const repoName = params[`searchInput`];
  const [repoInput, setRepoInput] = useState<string>(repoName || '');
  const [reposData, setReposData] = useState<any>();
  const [amountOfResponses, setAmountOfResponses] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSort, setSelectedSort] = useState({sort: '', order: ''});
  const numberOfPages = Math.ceil(amountOfResponses / 30);
  const fetchData = async () => {
    if (repoInput) {
      const queryTerm = `q=${repoInput}`;
      const querySort = selectedSort.sort ? `&sort=${selectedSort.sort}` : '';
      const queryOrder = selectedSort.order ? `&order=${selectedSort.order}` : '';
      const queryPerPage = `&per_page=30`;
      const queryPage = `&page=${currentPage ? currentPage : 1}`;
      const queryString = queryTerm + querySort + queryOrder + queryPerPage + queryPage;
      let url = `https://api.github.com/search/repositories?${queryString}`;
      try {
        const result = await axios(url);
        setReposData(result.data.items);
        setAmountOfResponses(result.data.total_count);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchData();
    repoName && navigate(`/search/${repoInput}`);
  }, [currentPage, selectedSort]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${repoInput}`);
    fetchData();
  };
  const saveUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoInput(e.target.value);
  };
  const clearUserInput = (e: React.MouseEvent<HTMLElement>) => {
    setRepoInput('');
  };
  const pageToggle = (direction: string) => {
    if (direction === 'next' && currentPage < numberOfPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
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
        {!reposData ? (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        ) : (
          <Explore
            amountOfResponses={amountOfResponses}
            reposData={reposData}
            currentPage={currentPage}
            pageToggle={pageToggle}
            setSelectedSort={setSelectedSort}
          />
        )}
      </PageWrapper>
    </Layout>
  );
};

export default Search;
