import React from "react";
import styled from "styled-components";

// Images
import startImage from "../images/start.png";
import randomImage from "../images/random.png";
import mainBackground from "../images/mainBackground.jpg";

const ContentContainer = styled.div`
	position: relative;
	top: 30px;
	display: block;
	width: 100%;
	max-width: 838px;
	margin: 0 auto;
	background: url(${mainBackground}) center center / cover no-repeat;
	z-index: 2;
	cursor: pointer;
`;

const RandomContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100px;
	max-width: 500px;
	margin: 0 auto;
	z-index: 3;
	cursor: pointer;
`;

function Content({ showModal, generateRandomBonus }) {
	return (
		<ContentContainer>
			<img
				src={startImage}
				alt="Start Build Your Bonus"
				onClick={showModal}
			/>
			<RandomContainer onClick={generateRandomBonus}>
				<img src={randomImage} alt="Generate a Random Bonus" />
			</RandomContainer>
		</ContentContainer>
	);
}

export default Content;
