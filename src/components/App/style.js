import styled from 'styled-components';

const Header = styled.div`
  text-align: center;
  background-color: #da3f3d;
  height: 100px;
  color: white;
  flex: 0 1 100%;
  
  h2 {
    display: inline-block;
    margin: 0 10px;
}
`;

const Logo = styled.img`
  height: 100px;
  vertical-align: middle;
`;

export { Header, Logo };
