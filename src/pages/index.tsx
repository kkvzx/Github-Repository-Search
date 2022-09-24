import React, {useCallback, useEffect, useState} from 'react';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar';
import Explore from '@/components/Explore';
import axios from 'axios';

const PageWrapper = styled.article`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home: React.FC = () => {
  const [repoInput, setRepoInput] = useState('');
  const [reposData, setReposData] = useState<any>();
  const [amountOfResponses, setAmountOfResponses] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSort, setSelectedSort] = useState({sort: '', order: ''});
  if (selectedSort.sort) {
    console.log('NIE NO ŻART');
  }
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
  }, [currentPage, selectedSort]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };
  const saveUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoInput(e.target.value);
  };
  const clearUserInput = (e: React.MouseEvent<HTMLElement>) => {
    setRepoInput('');
  };
  const pageToggle = (direction: string) => {
    if (direction === 'next') setCurrentPage((prev) => prev + 1);
    else setCurrentPage((prev) => prev - 1);
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
        {reposData && (
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

export default Home;
