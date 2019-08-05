import {Foo} from './Foo'

describe('Foo class', () => {
	it('test() method returns true', () => {
		const foo = new Foo()
		expect(foo.test()).toBe(true)
	})
})
