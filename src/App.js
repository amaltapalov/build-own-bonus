import React from "react";
import { Container, Row, Modal, Button } from "react-bootstrap";
import styled from "styled-components";

import TopBar from "./components/TopBar";
import Content from "./components/Content";
import Footer from "./components/Footer";

// Images
import headingImage from "./images/campaign-logo.png";
import button1 from "./images/buttons/button-1.png";
import button2 from "./images/buttons/button-2.png";

// Style
import "./index.scss";

const questions = [button1, button2];

const Heading = styled.div`
	max-width: 866px;
	margin: 0 auto;
`;

class App extends React.Component {
	state = {
		show: false,
		currentQuestion: questions[0]
	};

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};

	changeQuestion = i => {
		this.setState({ currentQuestion: questions[i] });
	};

	render() {
		return (
			<Container className="page homepage__content">
				<Row className="d-block" style={{ overflow: "hidden" }}>
					<TopBar />
					<Heading>
						<img src={headingImage} alt="Build Your own Bonus" />
					</Heading>
					<Content showModal={this.showModal} />
					<Footer />
				</Row>

				{/* Modal start */}
				<Modal show={this.state.show} onHide={this.hideModal}>
					<img src={this.state.currentQuestion} alt="" />
					<Button onClick={() => this.changeQuestion(1)}>
						Change question
					</Button>
					<Button variant="secondary" onClick={this.hideModal}>
						Close
					</Button>
				</Modal>
				{/* Modal end */}
			</Container>
		);
	}
}

export default App;
