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
  ul {
    width: 100%;
    list-style-type: none;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
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
    }
  }
`;
const StyledMain = styled.main`
  min-height: calc(100vh - 90px);
  width: 100%;
  padding: 0 20%;
  background: var(--background-color);
  border-radius: 50px 50px 0 0;
`;

interface Props {
  readonly children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => (
  <>
    <GlobalStyle />
    <StyledNav>
      <ul>
        <li>
          <Link activeClassName="active" to={`/`}>
            Home
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
