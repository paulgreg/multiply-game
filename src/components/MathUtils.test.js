import { getNumber, checkResult } from './MathUtils'

describe('MathUtils', () => {
    describe('getNumbers', () => {
        describe('by default', () => {
            test('should return a number > 2 and < 11', () => {
                const n = getNumber()
                expect(n).toBeGreaterThanOrEqual(2)
                expect(n).toBeLessThan(11)
            })
        })
        describe('with difficulty d1', () => {
            test('should return a number >= 2 and <= 10', () => {
                const n = getNumber({ difficulty: 'd1' })
                expect(n).toBeGreaterThanOrEqual(2)
                expect(n).toBeLessThanOrEqual(10)
            })
        })
        describe('with difficulty d2', () => {
            test('should return a number >= 2 and <= 100', () => {
                const n = getNumber({ difficulty: 'd2' })
                expect(n).toBeGreaterThanOrEqual(2)
                expect(n).toBeLessThanOrEqual(100)
            })
        })
        describe('with difficulty f1', () => {
            test('should return a number like 0.1, 0.01, etc', () => {
                const n = getNumber({ difficulty: 'f1' })
                expect(n).toBeLessThanOrEqual(1)
            })
        })
    })
    describe('check', () => {
        describe('for multiplication', () =>
            [
                { x: 2, y: 2, result: '4', expected: true },
                { x: 2, y: 2, result: '5', expected: false },
                { x: 2, y: 10, result: '20', expected: true },
                { x: 2, y: 10, result: '1', expected: false },
                { x: 3, y: 0.1, result: '0.3', expected: true },
                { x: 3, y: 0.01, result: '0.03', expected: true },
                { x: 3, y: 0.001, result: '0.003', expected: true },
                { x: 3, y: 0.0001, result: '0.0003', expected: true },
            ].forEach(({ x, y, result, expected }) =>
                test(`should return ${expected} for ${x} * ${y} === ${result}`, () =>
                    expect(checkResult(x, y, result)).toBe(expected))
            ))
    })
})