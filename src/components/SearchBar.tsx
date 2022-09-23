import {GatsbyImage, StaticImage} from 'gatsby-plugin-image';
import React, {useState} from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.form`
  height: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3rem 3rem;
  grid-gap: 4px;
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
const SearchBar = ({searchRepo, handleSubmit, saveUserInput, clearUserInput}: SearchBarProps) => {
  return (
    <SearchBarWrapper onSubmit={handleSubmit}>
      <SearchBarInput
        type="text"
        value={searchRepo}
        onChange={(e) => saveUserInput(e)}
        placeholder="Repository name"></SearchBarInput>
      <SearchBarSubmit type="submit">
        <StaticImage src="../assets/images/searchImage.png" placeholder="tracedSVG" alt="Search Button" />
      </SearchBarSubmit>
      <SearchBarSubmit className="clear" onClick={(e) => clearUserInput(e)}>
        <StaticImage src="../assets/images/clearImage.png" placeholder="tracedSVG" alt="Search Button" />
      </SearchBarSubmit>
    </SearchBarWrapper>
  );
};
interface SearchBarProps {
  searchRepo: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  saveUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearUserInput: (e: React.MouseEvent<HTMLElement>) => void;
}

export default SearchBar;
