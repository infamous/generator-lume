// You can also write tests with TypeScript.

import {Foo} from '../src'

describe('Foo class', () => {
	it('is a class', () => {
		expect(typeof Foo).toBe('function')
		expect(Foo.length).toBe(0)

		// classes can not be called without new
		expect(() => Foo()).toThrow()

		// it works with new
		expect(() => new Foo()).not.toThrow()
	})
})
