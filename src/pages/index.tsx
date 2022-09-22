import React from 'react';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar';
import {GithubContext} from '@/conetxt/context';

const PageWrapper = styled.article`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home: React.FC = () => {
  const Dataf = () => {
    const data = React.useContext(GithubContext);
    console.log(data);
    return <div>{data[1].full_name}</div>;
  };

  return (
    <Layout>
      <PageWrapper>
        <Dataf />
        {/* props should be passed */}
        <SearchBar />
      </PageWrapper>
    </Layout>
  );
};

export default Home;
