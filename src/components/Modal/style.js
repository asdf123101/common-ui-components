import styled from 'styled-components';

const ModalWrapper = styled.div`
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 10;
	background-color: rgba(0,0,0,0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalPara = styled.p`
	width: 90vw;
	background-color: #fff;
	padding: 10px;

  @media screen and (min-width: 600px) {
		width: 40vw;
	}
`;

const ModalButton = styled.button`
	position: fixed;
	right: 20px;
	top: 20px;
`;

export { ModalWrapper, ModalPara, ModalButton };
