import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, ButtonGroup } from "components/index.js";
import { Welcome } from "@storybook/react/demo";
import styled from "styled-components";


const Flex = styled.div`
	display: flex;
	justify-content: ${(p) => {
		switch (p.sp) {
			case "spacebetween":
				return "space-between";
			case "spaceevenly":
				return "space-evenly";
			case "flexstart":
				return "flex-start";
			default:
				return "flex-start";
		} }};
	> button, div {
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
				<Flex sp="flexstart">
					<Button onClick={action("clicked")}>Hello Button</Button>
					<Button onClick={action("clicked")} iconName="camera">Hello Button</Button>
					<Button onClick={action("clicked")} iconName="camera" iconPosition="left">Hello Button</Button>
					<Button onClick={action("clicked")} rounded>Hello Button</Button>
					<Button onClick={action("clicked")} circle iconName="camera">Hello Button</Button>
					<Button onClick={action("clicked")} rounded iconName="camera">Hello Button</Button>
					<Button onClick={action("clicked")} squared iconName="camera">Hello Button</Button>
				</Flex>
			</div>
			<div>
				<h4>Primary:</h4>
				<Flex sp="flexstart">
					<Button onClick={action("clicked")} primary>Hello Button</Button>
					<Button onClick={action("clicked")} primary iconName="camera">Hello Button</Button>
					<Button onClick={action("clicked")} primary iconName="camera" iconPosition="left">Hello Button</Button>
					<Button onClick={action("clicked")} primary rounded>Hello Button</Button>
					<Button onClick={action("clicked")} primary circle iconName="camera">Hello Button</Button>
					<Button onClick={action("clicked")} primary rounded iconName="camera">Hello Button</Button>
					<Button onClick={action("clicked")} primary squared iconName="camera">Hello Button</Button>
				</Flex>
			</div>
			<div>
				<h4>Secondary:</h4>
				<Flex sp="flexstart">
					<Button onClick={action("clicked")} secondary>Hello Button</Button>
					<Button onClick={action("clicked")} secondary iconName="camera">Hello Button</Button>
					<Button onClick={action("clicked")} secondary iconName="camera" iconPosition="left">Hello Button</Button>
					<Button onClick={action("clicked")} secondary rounded>Hello Button</Button>
					<Button onClick={action("clicked")} secondary circle iconName="camera">Hello Button</Button>
					<Button onClick={action("clicked")} secondary rounded iconName="camera">Hello Button</Button>
					<Button onClick={action("clicked")} secondary squared iconName="camera">Hello Button</Button>
				</Flex>
			</div>
			<div>
				<h4>Group:</h4>
				<Flex sp="flexstart">
					<ButtonGroup>
						<Button onClick={action("clicked")} secondary>Hello Button</Button>
						<Button onClick={action("clicked")} secondary>Hello Button</Button>
						<Button onClick={action("clicked")} secondary>Hello Button</Button>
					</ButtonGroup>
					<ButtonGroup primary>
						<Button onClick={action("clicked")}>Hello Button</Button>
						<Button onClick={action("clicked")}>Hello Button</Button>
						<Button onClick={action("clicked")}>Hello Button</Button>
						<Button onClick={action("clicked")}>Hello Button</Button>
					</ButtonGroup>
				</Flex>
			</div>

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
