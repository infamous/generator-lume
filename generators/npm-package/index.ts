import Generator = require('yeoman-generator')
import chalk from 'chalk'
import yosay = require('yosay')
import * as path from 'path'
import atat from 'at-at'

export = class LumeGenerator extends Generator {
	nameWithoutScope: string
	folder: string
	pkg: {[k: string]: any}

	constructor(args: string | string[], options: {}) {
		super(args, options)

		this.argument('packageName', {
			description:
				'The name of the NPM package. Determines the output directory if the --dir option is not supplied.',
			type: String,
			default: '',
		})

		this.option('dir', {
			description: 'The output directory. Defaults to ./<packageName>',
			type: String,
			default: '',
		})
	}

	async prompting(): Promise<any> {
		this.log(yosay(`This is the ${chalk.red('lume')} NPM package generator.`))

		if (this.options.dir) {
			this.folder = path.resolve(this.options.dir)

			try {
				this.pkg = require(path.resolve(this.folder, './package.json'))
			} catch (e) {}

			this.options.packageName = this.options.packageName || (this.pkg && this.pkg.name)

			if (!this.options.packageName) {
				await this._promptPackageName(
					'You specified a package directory, but the location there does not have a name field in a package.json file.'
				)
			}

			this.nameWithoutScope = path.basename(this.options.packageName)
		} else {
			try {
				this.pkg = require(path.resolve(process.cwd(), 'package.json'))
			} catch (e) {}

			if (this.pkg) {
				this.options.packageName = this.options.packageName || (this.pkg && this.pkg.name)

				if (!this.options.packageName)
					await this._promptPackageName("There's a package.json in the current directory, but no name field.")

				this.nameWithoutScope = path.basename(this.options.packageName)
				this.folder = path.resolve(process.cwd())
			} else {
				if (!this.options.packageName) await this._promptPackageName("You didn't specify a package name.")

				this.nameWithoutScope = path.basename(this.options.packageName)
				this.folder = path.resolve(process.cwd(), this.nameWithoutScope)
			}
		}

		this._validatePackageName()

		this.destinationRoot(this.folder)
	}

	async _promptPackageName(reason: string) {
		const question = 'What would you like the name to be?'

		const packageNameMsg = `${reason} ${question}`

		const prompts = [
			{
				type: 'input',
				name: 'packageName',
				message: packageNameMsg,
				default: 'my-cool-package',
			},
		]

		await this.prompt(prompts).then(({packageName}) => {
			this.options.packageName = packageName
			this.nameWithoutScope = path.basename(this.options.packageName)
		})
	}

	_validatePackageName() {
		const packageNamePattern = /^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/

		if (!this.options.packageName.match(packageNamePattern)) {
			throw new TypeError(
				`The package name you provided, ${this.options.packageName}, does not match the pattern ${packageNamePattern}`
			)
		}
	}

	async writing() {
		return new Promise(resolve => {
			atat.walk(
				this.sourceRoot(),

				files => {
					for (const file of files) this._renderFile(file, this.options)
					resolve()
				},

				{relative: true}
			)
		})
	}

	_renderFile(file: string, templateVars: LumeGenerator['options']) {
		this.fs.copyTpl(this.templatePath(file), this.destinationPath(file), templateVars)
	}

	install() {
		// install dependencies of the project
		this.npmInstall()

		// initialize the project as a git repo, ready to go
		this.spawnCommandSync('git', ['init'])
		this.spawnCommandSync('git', ['add', '.'])
		this.spawnCommandSync('git', ['commit', '-m', 'The beginning!'])
	}
}
