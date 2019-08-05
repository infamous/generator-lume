# generator-lume

> Generate a lume application starter, and more.

This is a [Yeoman](https://yeoman.io) generator that makes it easy to scaffold new

-   LUME applications (WIP).
-   NPM packages.

## Installation

First, install [Yeoman](http://yeoman.io) and `generator-lume` using
[npm](https://www.npmjs.com/) (we assume you have pre-installed
[node.js](https://nodejs.org/)):

```bash
npm install -g yo
npm install -g "github:infamous/generator-lume"
```

## Scaffold LUME applications

This is incomplete; work in progress. But you can scaffold NPM packages; see
the next section.

```bash
yo lume ./application-folder
```

## Scaffold NPM packages

Creating new libraries and modules is often a repetitive task. This Yeoman
generator alleviates some of the hassle.

```sh
yo lume:npm-package
```

For help and available options, run

```sh
yo lume:npm-package --help
```

which will output something like:

```
Usage:
  yo lume:npm-package [<packageName>] [options]

Options:
  -h,   --help          # Print the generator's options and usage
        --skip-cache    # Do not remember prompt answers                     Default: false
        --skip-install  # Do not automatically install dependencies          Default: false
        --dir           # The output directory. Defaults to ./<packageName>

Arguments:
  packageName  # The name of the NPM package. Determines the output directory if the --dir option is not supplied.  Type: String  Required: false
```

For more information on what features a scaffolded NPM package has, see the
[README](./generators/npm-package/templates/README.md) template that is
outputted into a scaffolded NPM package.

## License

LGPL-3.0 © [Joe Pea](https://trusktr.io)
