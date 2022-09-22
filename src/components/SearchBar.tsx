import {GatsbyImage, StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.form`
  height: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3rem 3rem;
  grid-gap: 4px;
  border-radius: 10px;
`;
const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: var(--lighterBackground-color);
  border-radius: 40px;
  outline: none;
  color: white;
  padding: 10px 12px;
`;
const SearchBarSubmit = styled.button`
  height: 100%;
  width: 3rem;
  border: none;
  cursor: pointer;
  border-radius: 40px;
  background: var(--secondary-color);
  &.clear {
    background: var(--lighterBackground-color);
  }
`;
const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchBarInput type="text" required placeholder="Repository name" />
      <SearchBarSubmit>
        <StaticImage src="../assets/images/searchImage.png" placeholder="tracedSVG" alt="Search Button" />
      </SearchBarSubmit>
      <SearchBarSubmit className="clear">
        <StaticImage src="../assets/images/clearImage.png" placeholder="tracedSVG" alt="Search Button" />
      </SearchBarSubmit>
    </SearchBarWrapper>
  );
};

export default SearchBar;
