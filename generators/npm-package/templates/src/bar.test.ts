import {bar} from './bar'

describe('bar function', () => {
	it('returns the boolean that you passed in', () => {
		expect(bar(true)).toBe(true)
	})
})
