import { expect, test } from '@jest/globals'

function sum(number: number, number2: number) {
    return number + number2
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})
