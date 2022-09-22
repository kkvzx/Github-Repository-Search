import Layout from '@/components/Layout';
import styled from 'styled-components';

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  align-items: center;
`;
const StyledText = styled.p`
  font-size: 2rem;
`;

export default function NotFound() {
  return (
    <Layout>
      <PageWrapper>
        <StyledText>404</StyledText>
        <p>Sorry, page not found!</p>
      </PageWrapper>
    </Layout>
  );
}
