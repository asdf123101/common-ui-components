import styled from 'styled-components';

const Button = styled.button`
	height: 104px;
	float: left;
`;

const SingleSlide = styled.div`
	width: 10vw;
	height: 100px;
	border: 2px solid black;
	text-align: center;
	float: left;
	background-color: #fff;
  ${props => {
    if (props.index === 2) {
      return `background-color: #666`;
    } else if (props.index === 0 || props.index === 4) {
      return `position: relative;
             z-index: -1;`;
    }
  }};
  z-index: ${props => props.zIndex}
`;

export { Button, SingleSlide };
