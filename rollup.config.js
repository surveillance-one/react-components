import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

const baseConfig = {
	external: [
		"react",
		"styled-components"
	],
	plugins: [
		resolve(),
		babel({ exclude: "node_modules/**" })
	]
};

export default [
	{
		...baseConfig,
		input: "./src/lib/index.js",
		output: [
			{
				// exports: 'named',
				file: "components/dist/react-component-lib-components.cjs.js",
				format: "cjs"
			},
			{
				file: "components/dist/react-component-lib-components.esm.js",
				format: "esm",
			}
		]
	},
];
