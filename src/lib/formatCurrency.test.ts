import { it, expect } from 'vitest';
import { formatCurrency } from './formatCurrency';

it('adds the $ before the given number', ()=>{
    const result = formatCurrency(1)
    expect(result).toBe('$1');

    const result2 = formatCurrency(42)
    expect(result2).toBe('$42')
})