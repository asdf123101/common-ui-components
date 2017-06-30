import styled from 'styled-components';

export const RefreshButton = styled.button`
  background-color: white;
  border: 2px solid #999;
  border-radius: 5px;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 90%;
  margin: 4px 10px;
  width: 100px;
  outline:none;
  &:hover {
    background-color: #70C1B3;
    color: white;
    border: 2px solid #70C1B3;
    transition: background-color 0.2s, color 0.2s;
  }
`;

export const SelectButton = RefreshButton.withComponent('select').extend`
  width: auto;
  margin-left: 0;
`;

export const PostItem = styled.li`
  margin: 10px;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 5px #ddd;
  padding: 10px;
  a {
    text-decoration: none;
    color: #2A5DB0 ;
  }

  a:hover {
    color: #da3f3d;
    text-decoration: auto;
    transition: color 0.2s;
  }
`;
