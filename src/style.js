import styled from 'styled-components';

const Container = styled.div`
  display: flex;  
  flex-flow: row wrap;
  height: 100%;
`;

const ComponentWrapper = styled.div`
    width: 100%;
	padding: 20px;
@media screen and (min-width: 800px) {
    width: 70vw;
}
`;

export { Container, ComponentWrapper };
