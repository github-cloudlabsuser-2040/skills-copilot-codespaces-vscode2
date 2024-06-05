const { calculate } = require('./test');

describe('calculate', () => {
    test('should add two numbers', () => {
        expect(calculate(10, '+', 5)).toBe(15);
    });

    test('should subtract two numbers', () => {
        expect(calculate(10, '-', 5)).toBe(5);
    });

    test('should multiply two numbers', () => {
        expect(calculate(10, '*', 5)).toBe(50);
    });

    test('should divide two numbers', () => {
        expect(calculate(10, '/', 5)).toBe(2);
    });

    test('should handle division by zero', () => {
        expect(calculate(10, '/', 0)).toBe('Error: Division by zero is not allowed');
    });

    test('should handle invalid operator', () => {
        expect(calculate(10, '%', 5)).toBe('Error: Invalid operator');
    });

    // Additional tests
    test('should handle negative numbers', () => {
        expect(calculate(-10, '+', 5)).toBe(-5);
    });

    test('should handle floating point numbers', () => {
        expect(calculate(10.5, '*', 2)).toBe(21);
    });

    test('should handle large numbers', () => {
        expect(calculate(999999999, '+', 1)).toBe(1000000000);
    });
});