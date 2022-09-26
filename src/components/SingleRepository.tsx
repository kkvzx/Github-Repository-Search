import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import styled from 'styled-components';
import {BsBookmarks, BsBookmarksFill} from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';
import {useEffect, useState} from 'react';
import {addToFavorites} from './addToFavorities';

const SingleRepoWrapper = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr 6rem;
  min-height: 5rem;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #26313e;
  @media screen and (max-width: 600px) {
    grid-template-columns: 0.1fr 0.8fr 0.1fr;
  }
`;
const StyledTitle = styled.p`
  font-size: 16px;
`;
const StyledDescription = styled.p`
  font-size: 14px;
  color: #717780;
`;
const AuthorWrapper = styled.section`
  /* min-width: 5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  overflow: hidden;
`;
const RepositoryInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`;
const AuthorName = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: #717780;
  &.title {
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const BookmarksWrapper = styled.div`
  /* background: green; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Bookmark = styled(BsBookmarks)`
  font-size: 1.4rem;
  cursor: pointer;
`;
const FilledBookmark = styled(BsBookmarksFill)`
  font-size: 1.4rem;
  cursor: pointer;
`;
const RepoHeader = styled.div`
  display: flex;
  align-items: center;
`;
const Star = styled(AiFillStar)`
  color: var(--secondary-color);
`;

const SingleRepository = ({
  repoName,
  description,
  author,
  avatarUrl,
  stargazerCount,
  url,
  sourceUrl,
  favorites,
  setFavorites,
}: SingleRepositoryProps) => {
  const data = {repoName, description, author, avatarUrl, stargazerCount, url, sourceUrl};

  return (
    <SingleRepoWrapper>
      <AuthorWrapper>
        <AuthorName href={`https://github.com/${author}`} target="_blank">
          <Image src={avatarUrl} alt={'owner avatar'} />
        </AuthorName>
        <AuthorName href={`https://github.com/${author}`} target="_blank">
          {author}
        </AuthorName>
      </AuthorWrapper>
      <RepositoryInfoWrapper>
        <RepoHeader>
          <AuthorName href={url} target="_blank" className="title">
            <StyledTitle>{repoName}</StyledTitle>
          </AuthorName>

          <StyledDescription>` {stargazerCount}`</StyledDescription>
          <Star />
        </RepoHeader>
        <StyledDescription>{description ? description : 'No description provided'}</StyledDescription>
      </RepositoryInfoWrapper>
      {favorites && (
        <BookmarksWrapper>
          {favorites.filter((fav: any) => fav.sourceUrl === data.sourceUrl).length > 0 ? (
            <FilledBookmark onClick={() => addToFavorites(data, favorites, setFavorites)} />
          ) : (
            <Bookmark onClick={() => addToFavorites(data, favorites, setFavorites)} />
          )}
        </BookmarksWrapper>
      )}
    </SingleRepoWrapper>
  );
};

export interface SingleRepositoryProps {
  repoName: string;
  description: string;
  author: string;
  avatarUrl: string;
  stargazerCount: number;
  url: string;
  sourceUrl: string;
  setFavorites?: any;
  favorites?: any;
}
export default SingleRepository;
