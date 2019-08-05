// The `describe()` and `it()` APIs are part of the Karma test runner library. See https://karma-runner.github.io
// The `expect()` API is part of the Jasmine assertion library. See https://jasmine.github.io

import {bar} from '../src'

describe('bar function', () => {
	it('exists', () => {
		expect(typeof bar).toBe('function')
		expect(bar.length).toBe(1)
	})
})
