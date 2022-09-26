import React, {useCallback, useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import SingleRepository from './SingleRepository';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import Dropdown from './Dropdown';

const StyledExploreWrapper = styled.article`
  border-top: 1px solid #26313e;
  @media screen and (max-width: 600px) {
    margin-bottom: 45px;
  }
`;
const SingleTitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;
const SegmentTitle = styled.p`
  font-size: 20px;
  span {
    color: var(--secondary-color);
  }
`;
const StyledCount = styled.p`
  color: #717780;
  margin-left: auto;
  margin-right: 3rem;
`;
const ArrowsContainer = styled.div`
  /* background: green; */
  margin: 2rem 0 0 0;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  align-items: center;
  .left {
    cursor: pointer;
    margin-right: 8px;
  }
  .right {
    cursor: pointer;
    margin-left: 8px;
  }
`;
const Explore = ({amountOfResponses, reposData, currentPage, setSelectedSort, pageToggle}: ExploreProps) => {
  const totalNumberOfPages = Math.ceil(amountOfResponses / 30);
  const [favorites, setFavorites] = useState<any>([]);
  const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

  // Gets favorites from local storage
  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);

  //saves favorites to local storage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <SingleTitleLine>
        <SegmentTitle>
          Ex<span>p</span>lore<span>.</span>
        </SegmentTitle>
        <StyledCount>{amountOfResponses} results</StyledCount>
        <Dropdown setSelectedSort={setSelectedSort} />
      </SingleTitleLine>
      <StyledExploreWrapper>
        {amountOfResponses > 0 ? (
          reposData.map((singleRepo: any) => {
            return (
              <SingleRepository
                key={singleRepo.node_id}
                repoName={singleRepo.name}
                description={singleRepo.description}
                author={singleRepo.owner.login}
                avatarUrl={singleRepo.owner.avatar_url}
                stargazerCount={singleRepo.stargazers_count}
                url={singleRepo.html_url}
                sourceUrl={singleRepo.url}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            );
          })
        ) : (
          <p>There is no such repositories</p>
        )}
        <ArrowsContainer>
          <AiOutlineArrowLeft className="left" onClick={() => pageToggle('prev')} />
          <p>
            {currentPage}...{totalNumberOfPages}
          </p>
          <AiOutlineArrowRight className="right" onClick={() => pageToggle('next')} />
        </ArrowsContainer>
      </StyledExploreWrapper>
    </>
  );
};

interface ExploreProps {
  amountOfResponses: number;
  reposData: any;
  currentPage: number;
  setSelectedSort: React.Dispatch<
    React.SetStateAction<{
      sort: string;
      order: string;
    }>
  >;
  pageToggle: (direction: string) => void;
}

export default Explore;
