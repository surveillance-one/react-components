import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button } from "components/index.js";
import { Welcome } from "@storybook/react/demo";
import styled from "styled-components";


const Flex = styled.div`
	justify-content: ${props => (props.spacebetween ? "space-between" : "space-evenly")}
	button, div {
		margin: 0.3em;
	}
`;

const Container = styled.div`
	width: 90%;
`;

storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("Button")} />);

storiesOf("Button", module)
	.add("Types", () => (
		<Container>
			<h3> All Button Types: </h3>
			<div>
				<h4>Default:</h4>
				<Flex spacebetween>
					<Button onClick={action("clicked")}>Hello Button</Button>
					<Button onClick={action("clicked")} iconName="camera">Hello Button</Button>
					<Button onClick={action("clicked")} iconName="camera" iconPosition="left">Hello Button</Button>
					<Button onClick={action("clicked")} rounded>Hello Button</Button>
					<Button onClick={action("clicked")} circle iconName="camera">Hello Button</Button>
					<Button onClick={action("clicked")} rounded iconName="camera">Hello Button</Button>
					<Button onClick={action("clicked")} squared iconName="camera">Hello Button</Button>
				</Flex>
			</div>
			{/* <div>
				<h4>Primary:</h4>
				<Button onClick={action("clicked")} primary>Hello Button
				</Button>
			</div>
			<div>
				<h4>Secondary:</h4>
				<Button onClick={action("clicked")} secondary>Hello Button
				</Button>
			</div> */}

		</Container>
	))
	.add("with some emoji", () => (
		<Button onClick={action("clicked")}>
			<span role="img" aria-label="so cool">
        😀 😎 👍 💯
			</span>
		</Button>
	))
	.add("with icon", () => <Button onClick={action("clicked")} iconName="camera">Hello Button</Button>)

	.add("with icon", () => <Button onClick={action("clicked")} squared iconName="camera">Hello Button</Button>);
