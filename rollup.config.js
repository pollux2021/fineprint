import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { eslint } from "rollup-plugin-eslint"
import { uglify } from "rollup-plugin-uglify"
import ts from "rollup-plugin-typescript2"
import babel from "rollup-plugin-babel"
import dts from "rollup-plugin-dts"
import pkg from "./package.json"

export default [
	// browser-friendly UMD build
	{
		input: "src/index.ts",
		output: [
			{
				name: "finePrint",
				file: pkg.browser,
				format: "umd",
			},
			{
				file: pkg.browserMin,
				format: "umd",
				name: pkg.name,
				plugins: [uglify()],
			},
		],
		plugins: [
			resolve(),
			commonjs(),
			eslint({
				include: ["src/**"],
				exclude: ["node_modules/**"],
			}),
			ts(),
			babel({
				exclude: "node_modules/**",
				runtimeHelpers: true,
				extensions: [".js", ".ts", "tsx"],
			}),
		],
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	{
		input: "src/index.ts",
		output: [
			{ file: pkg.main, format: "cjs" },
			{ file: pkg.module, format: "es" },
		],
		plugins: [ts()],
	},
]
