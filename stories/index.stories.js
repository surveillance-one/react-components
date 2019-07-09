import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import {
	withKnobs, text, select, boolean, number, radio, radios
} from "@storybook/addon-knobs";

import {
	Button, ButtonGroup, Card, CardGroup, Tabs
} from "components/index.js";
import { Welcome } from "@storybook/react/demo";
import styled from "styled-components";

import buttonMarkdown from "markdown/button.md";


const Flex = styled.div`
	display: flex;
	align-items: flex-start; /** prevents equal heights */
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
	& > * { /** changes only the direct children */
		margin: 0.3em;
	}
`;

const Container = styled.div`
	width: 90%;
`;

storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("Button")} />);

storiesOf("Button", module)
	.addDecorator(withKnobs)
	.add("Types", () => (
		<Container>
			<h3> All Button Types: </h3>
			<div>
				<h4>Default:</h4>
				<Flex sp="flexstart">
					<Button onClick={linkTo("Button", "Default")}>Hello Button</Button>
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
	.add("Default", () => (
		<Button
			nClick={action("clicked")}
			disabled={boolean("Disabled")}
			primary={boolean("Primary")}
			secondary={boolean("Secondary")}
			rounded={boolean("Rounded")}
			squared={boolean("Squared (only icons)")}
			circle={boolean("Circle")}
			iconName={text("Icon Name (Font Awesome)")}
			iconPosition={text("Icon Position (left or right)")}
		>
			{text("Button Label", "Hello Button")}</Button>
	)
	);


storiesOf("Card", module)
	.addDecorator(withKnobs)
	.add("Types", () => (
		<Container>
			<h3> All Card Types: </h3>
			<div>
				<h4>Default:</h4>
				<Flex>
					<Card
						title="Markus Hudobnik"
						meta="IT Support"
						footer="Surveillance One 💻"
						img="https://via.placeholder.com/250">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</Card>
					<Card
						title="Markus Hudobnik"
						meta="IT Support"
						footer="Surveillance One 💻"
						mini="https://via.placeholder.com/250">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</Card>
					<Card
						footer="Surveillance One 💻"
						mini="https://via.placeholder.com/250">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</Card>
					<Card>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</Card>
				</Flex>
			</div>
		</Container>
	))
	.add("Default", () => (
		<Card
			img={text("Header Picture (link only)", "https://via.placeholder.com/250")}
			mini={text("Mini Icon Picture (link only)", "https://via.placeholder.com/50")}
			title={text("Title", "Title Text")}
			meta={text("Sub-Title/meta", "Meta Text")}
			footer={text("Footer", "Footer Text")}
			// eslint-disable-next-line object-curly-newline
			width={number("Width (in em)", 20, { range: true, min: 0, max: 100, step: 1 })}>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		</Card>
	));

storiesOf("Tabs", module)
	.addDecorator(withKnobs)
	.add("Types", () => (
		<Container>
			<Tabs>
				<Tabs.Tab iconName="check" iconPosition="left" label="Super long label">
					<p>Hello</p>
					<p>hi</p>
				</Tabs.Tab>
				<Tabs.Tab iconName="camera" label="Camera" showIconOnlyOnActive>2 content</Tabs.Tab>
				<Tabs.Tab label="Hello">Hello</Tabs.Tab>
			</Tabs>
		</Container>
	));
