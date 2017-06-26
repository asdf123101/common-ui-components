import styled from 'styled-components';

const Container = styled.div`
  display: flex;  
  flex-flow: row wrap;
  height: 100%;
`;

const ComponentWrapper = styled.div`
  display: inline-block;
  margin: 0;
  padding: 20px;
  overflow: hidden;
  @media (min-width: 800px) {
    width: 70vw;
  }
`;

export { Container, ComponentWrapper };
