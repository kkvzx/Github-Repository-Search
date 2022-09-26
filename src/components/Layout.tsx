import React from 'react';
import {Link} from 'gatsby';
import {GlobalStyle, styled} from '../styles/theme';

const StyledNav = styled.nav`
  height: 90px;
  background: var(--secondary-color);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0 20%;
  @media screen and (max-width: 600px) {
    height: 45px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0;
  }

  ul {
    width: 100%;
    list-style-type: none;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    @media screen and (max-width: 600px) {
      grid-gap: 0;
      width: 100%;
      border-top: 2px solid var(--secondary-color);
    }
  }

  li {
    display: flex;

    a {
      width: 100%;
      padding: 8px;
      text-align: center;
      border-radius: 10px 10px 0 0;
      color: var(--lightText-color);
      background: var(--unactive-color);
      text-decoration: none;
      font-size: 20px;
      &.active {
        background: var(--background-color);
        color: var(--activeText-color);
      }
      @media screen and (max-width: 600px) {
        border-radius: 0;
      }
    }
  }
`;
const StyledMain = styled.main`
  min-height: calc(100vh - 90px);
  width: 100%;
  padding: 0 20%;
  background: var(--background-color);
  border-radius: 50px 50px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    padding: 0 5%;
    border-radius: 0;
    min-height: calc(100vh - 45px);
  }
`;

interface Props {
  readonly children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => (
  <>
    <GlobalStyle />
    <StyledNav>
      <ul>
        {/* <li>
          <Link activeClassName="active" to={`/`}>
            Home
          </Link>
        </li> */}
        <li>
          <Link activeClassName="active" partiallyActive={true} to="/search">
            Search
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`/bookmarks`}>
            Bookmarks
          </Link>
        </li>
      </ul>
    </StyledNav>
    <StyledMain>{children}</StyledMain>
  </>
);

export default Layout;
