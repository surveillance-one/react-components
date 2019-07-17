import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import {
	withKnobs, text, boolean, number, optionsKnob
} from "@storybook/addon-knobs";

import {
	Button, ButtonGroup, Card, CardGroup, TabGroup, Tab, Dropdown, Item
} from "lib";
import { Welcome } from "@storybook/react/demo";
import styled from "styled-components";

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

const valArr = ["Label Only", "Label w icon", "Label w icon showOnly", "Label w icon left", "Label w icon left showOnly", "Rounded", "Primary", "Secondary"];

storiesOf("Tabs", module)
	.addDecorator(withKnobs)
	.add("Types", () => (
		<Container>
			{ valArr.map((x, i) => <div key={i}>
				<h4>{x}:</h4>
				<TabGroup active={i}>
					<Tab label="Label Only">
						<p>Hello</p>
						<p>hi</p>
					</Tab>
					<Tab label="Label w icon" underline iconName="camera">2 content</Tab>
					<Tab label="Label w icon showOnly" iconName="camera" showIconOnlyOnActive>2 content</Tab>
					<Tab label="Label w icon left" iconName="camera" iconPosition="left">2 content</Tab>
					<Tab label="Label w icon left showOnly" iconName="camera" iconPosition="left" showIconOnlyOnActive>2 content</Tab>
					<Tab label="Label rounded" rounded>2 content</Tab>
					<Tab label="Label primary" primary>2 content</Tab>
					<Tab label="Label secondary" secondary>2 content</Tab>
				</TabGroup>
			</div>)}
			<TabGroup underline>
				<Tab label="Label primary" secondary primary>2 content</Tab>
				<Tab label="Label primary" secondary primary>2 content</Tab>
				<Tab label="Label primary" secondary primary>2 content</Tab>
				<Tab label="Label primary" secondary primary>2 content</Tab>
				<Tab label="Label primary" secondary primary>2 content</Tab>
			</TabGroup>
		</Container>
	))
	.add("TabGroup", () => (
		<Container>
			<div>
				<h4>Primary</h4>
				<TabGroup primary>
					<Tab label="Label Only">
						<p>Hello</p>
						<p>hi</p>
					</Tab>
					<Tab label="Label w icon" iconName="camera">2 content</Tab>
					<Tab label="Label w icon showOnly" iconName="camera" showIconOnlyOnActive>2 content</Tab>
					<Tab label="Label w icon left" iconName="camera" iconPosition="left">2 content</Tab>
					<Tab label="Label w icon left showOnly" iconName="camera" iconPosition="left" showIconOnlyOnActive>2 content</Tab>
					<Tab label="Label primary" primary>2 content</Tab>
					<Tab label="Label secondary" secondary>2 content</Tab>
				</TabGroup>
			</div>
			<div>
				<h4>Secondary</h4>
				<TabGroup secondary>
					<Tab label="Label Only">
						<p>Hello</p>
						<p>hi</p>
					</Tab>
					<Tab label="Label w icon" iconName="camera">2 content</Tab>
					<Tab label="Label w icon showOnly" iconName="camera" showIconOnlyOnActive>2 content</Tab>
					<Tab label="Label w icon left" iconName="camera" iconPosition="left">2 content</Tab>
					<Tab label="Label w icon left showOnly" iconName="camera" iconPosition="left" showIconOnlyOnActive>2 content</Tab>
					<Tab label="Label primary" primary>2 content</Tab>
					<Tab label="Label secondary" secondary>2 content</Tab>
				</TabGroup>
			</div>
			<div>
				<h4>Rounded</h4>
				<TabGroup rounded>
					<Tab label="Label Only">
						<p>Hello</p>
						<p>hi</p>
					</Tab>
					<Tab label="Label w icon" iconName="camera">2 content</Tab>
					<Tab label="Label w icon showOnly" iconName="camera" showIconOnlyOnActive>2 content</Tab>
					<Tab label="Label w icon left" iconName="camera" iconPosition="left">2 content</Tab>
					<Tab label="Label w icon left showOnly" iconName="camera" iconPosition="left" showIconOnlyOnActive>2 content</Tab>
					<Tab label="Label primary" primary>2 content</Tab>
					<Tab label="Label secondary" secondary>2 content</Tab>
				</TabGroup>
			</div>
		</Container>
	))
	.add("Default", () => (
		<Container>
			<div>
				<h4>Default:</h4>
				<TabGroup
					rounded={boolean("Tab Group: Rounded")}
					primary={boolean("Tab Group: Primary")}
					secondary={boolean("Tab Group: Secondary")}
				>
					<Tab
						label={text("Label", "Test Label")}
						iconName={text("Icon", "check")}
						iconPosition={optionsKnob("Icon Position", { Left: "left", Right: "right" }, "right", { display: "inline-radio" })}
						showIconOnlyOnActive={boolean("Show icon only when Active")}
						rounded={boolean("Rounded Corners")}
						primary={boolean("Primary")}
						secondary={boolean("Secondary")}
					>
						<p>Hello</p>
						<p>hi</p>
					</Tab>
					<Tab label="test 2">test</Tab>
				</TabGroup>
			</div>
		</Container>
	));

storiesOf("Dropdown", module)
	.addDecorator(withKnobs)
	.add("Types", () => (
		<Container>
			<Dropdown title="hello">
				<Item>Number 1q</Item>
				<Item>Number 2</Item>
			</Dropdown>
		</Container>
	));
