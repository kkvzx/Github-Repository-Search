import React, {useCallback, useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import SingleRepository from './SingleRepository';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

const StyledExploreWrapper = styled.article`
  border-top: 1px solid #26313e;
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
const Explore = ({amountOfResponses, reposData, currentPage, pageToggle}: ExploreProps) => {
  const totalNumberOfPages = Math.ceil(amountOfResponses / 30);
  return (
    <>
      <SingleTitleLine>
        <SegmentTitle>
          Ex<span>p</span>lore<span>.</span>
        </SegmentTitle>
        <StyledCount>{amountOfResponses} results</StyledCount>
      </SingleTitleLine>
      <StyledExploreWrapper>
        {reposData.map((singleRepo: any) => (
          <SingleRepository
            repoName={singleRepo.name}
            description={singleRepo.description}
            author={singleRepo.owner.login}
            authorUrl={singleRepo.owner.url}
            avatarUrl={singleRepo.owner.avatar_url}
            key={singleRepo.node_id}
            stargazerCount={singleRepo.stargazers_count}
          />
        ))}
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
  pageToggle: (direction: string) => void;
}

export default Explore;
