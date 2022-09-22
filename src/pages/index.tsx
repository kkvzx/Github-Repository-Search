import React from 'react';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar';

const PageWrapper = styled.article`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home: React.FC = () => {
  return (
    <Layout>
      <PageWrapper>
        {/* props should be passed */}
        <SearchBar />
      </PageWrapper>
    </Layout>
  );
};

export default Home;
