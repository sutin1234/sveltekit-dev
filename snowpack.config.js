// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	plugins: [
		[
			'@snowpack/plugin-build-script',
			{
				cmd: "postcss",
				input: [".css", ".pcss"],
				output: [".css"],
			}
		],
	
		[
			'@snowpack/plugin-build-script',
			{
				cmd: "postcss",
				input: [".css", ".pcss"],
				output: [".css"],
			}
		],
	
		...require("@sveltejs/snowpack-config").plugins,
	
'@snowpack/plugin-typescript'
	
	],
	mount: {
		'src/components': '/_components'
	},
	alias: {
		'@': './src'
	}
};
