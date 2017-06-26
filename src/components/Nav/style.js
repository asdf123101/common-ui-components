import styled from 'styled-components';

const NavUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    height: auto;

@media  (max-width: 800px) {
        height: auto;
        width: 100vw;
}
`;

const NavLi = styled.li`
width: 100px;
a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

 a:hover {
    background-color: #111;
}

@media  (max-width: 800px) {
        float: left;
}
`;
export { NavUl, NavLi };
