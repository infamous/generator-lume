import Generator = require('yeoman-generator')
import chalk from 'chalk'
import yosay = require('yosay')

class LumeGenerator extends Generator {
	props: any

	prompting() {
		// Have Yeoman greet the user.
		this.log(yosay(`Welcome to the ${chalk.red('lume')} application generator.`))

		const prompts = [
			{
				type: 'confirm',
				name: 'someAnswer',
				message: 'Would you like to enable this option?',
				default: true,
			},
		]

		return this.prompt(prompts).then(props => {
			// To access props later use this.props.someAnswer;
			this.props = props
		})
	}

	writing() {
		this.fs.copy(this.templatePath('dummyfile.txt'), this.destinationPath('dummyfile.txt'))
	}

	install() {
		this.npmInstall()
	}
}

module.exports = LumeGenerator
