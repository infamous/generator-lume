# <%= packageName %>

Description of the package. TODO automate this.

## Contributing

First install dependencies:

```sh
npm install
```

### Code

Code files can be written in either JavaScript or TypeScript, and end in
either `.js` or `.ts` respectively.

Please make sure your editor obeys the rules in `.editorconfig`. There are
editorconfig plugins for just about every text editor out there. Please
install it and make sure code follows the formatting rules. For more info,
see https://editorconfig.org.

### Development build mode

Run the package in dev mode (it will rebuild when files change):

```sh
npm run dev
```

This watches files and automatically incrementally rebuilds the project when
any files in `src/` have changed.

### Production build

To build the package for production, run

```sh
npm run build
```

### Testing

Any files ending with `.test.js` or `.test.ts` anywhere in the `tests/` or
`src/` folders are test files that will be ran by Karma, the test runner.

To run tests:

```sh
npm test
```

To debug tests, we can open a visible [Electron](https://electronjs.org)
window in which Karma is running tests, and use Chrome's devtools for
debugging (f.e. stepping through the test code). To do so, run:

```sh
npm run test-debug
```

### Publishing a new version

When ready to publish a new version, run one of the following depending on
which part of the version number you want to increment (see
[SemVer](https://semver.org/) for conventions around version numbers).

```sh
npm run realease:patch
npm run realease:minor
npm run realease:major
```

Any of the three `release:*` scripts will:

-   clean the project of any previous build output
-   stash any changes in the repo
-   build the project in production mode
-   run the project's tests
-   increment the version number (according to SemVer rules depending on if you
    choose patch, minor, or major)
-   create a new commit containing the version number in the form "v1.2.3" as
    the message
-   tag that commit with a git tag of the same name as the commit message
-   publish the new version to NPM
-   push the commit and the tag to GitHub
-   and finally unstash any changes if there were any

If something goes wrong (f.e. an error during the build or test process),
fear not, the package will not be published. Fix the failing tests, and
try again. Note, after a failure, changes that were stashed will remain
stashed.
