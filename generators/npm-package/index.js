// TypeScript support
require('ts-node').register({
	typeCheck: false,
	transpileOnly: true,
	files: true,

	compilerOptions: {
		...require('../../tsconfig.json').compilerOptions,
		allowJs: true,
		checkJs: false,
	},
})

module.exports = require('./index.ts')
