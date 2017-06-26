import styled from 'styled-components';

const NavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  test-aligh: center;
  height: auto;
  
  @media (max-width: 800px) {
     display: flex;
     flex-wrap: wrap;
     height: auto;
  }
`;

const NavLi = styled.li`
  flex: 1;
  border-bottom: 1px solid grey;
  a {
    display: block;
    color: black;
    font-weight: bold;
    text-align: center;
    padding: 14px 10px;
    text-decoration: none;
    transition: background-color 0.2s, color 0.2s;
  }

  a:hover {
    background-color:  #da3f3d;
    color: white;
    transition: background-color 0.5s, color 0.5s;
  }

  @media (max-width: 800px) {
    float: left;
  }
`;

export { NavUl, NavLi };
