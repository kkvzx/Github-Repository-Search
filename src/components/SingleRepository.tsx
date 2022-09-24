import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import styled from 'styled-components';
import {BsBookmarks, BsBookmarksFill} from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';
import {useEffect, useState} from 'react';

const SingleRepoWrapper = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr 6rem;
  min-height: 5rem;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #26313e;
`;
const StyledTitle = styled.p`
  font-size: 16px;
`;
const StyledDescription = styled.p`
  font-size: 14px;
  color: #717780;
`;
const AuthorWrapper = styled.section`
  min-width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
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
  addToFavorites,
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
      <BookmarksWrapper>
        {favorites.filter((fav: any) => fav.sourceUrl === data.sourceUrl).length > 0 ? (
          <FilledBookmark onClick={() => addToFavorites(data)} />
        ) : (
          <Bookmark onClick={() => addToFavorites(data)} />
        )}
      </BookmarksWrapper>
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
  addToFavorites: any;
  favorites: any;
}
export default SingleRepository;
