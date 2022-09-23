import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import styled from 'styled-components';
import {BsBookmarks} from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';

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
const RepoHeader = styled.div`
  display: flex;
  align-items: center;
`;
const Star = styled(AiFillStar)`
  color: var(--secondary-color);
`;

const SingleRepository = ({repoName, description, author, avatarUrl, authorUrl, stargazerCount}: Props) => {
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
          <StyledTitle>{repoName}</StyledTitle>
          <StyledDescription>` {stargazerCount}`</StyledDescription>
          <Star />
        </RepoHeader>
        <StyledDescription>{description ? description : 'No description provided'}</StyledDescription>
      </RepositoryInfoWrapper>
      <BookmarksWrapper>
        <Bookmark />
      </BookmarksWrapper>
    </SingleRepoWrapper>
  );
};

interface Props {
  repoName: string;
  description: string;
  author: string;
  avatarUrl: string;
  authorUrl: string;
  stargazerCount: number;
}
export default SingleRepository;
