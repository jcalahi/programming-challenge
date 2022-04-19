import styled from 'styled-components';

interface Props {
  children?: React.ReactNode
};

const Container = styled.div`
  margin: 100px auto;
  position: relative;
  width: 500px;
`;

const PageContainer: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default PageContainer;
