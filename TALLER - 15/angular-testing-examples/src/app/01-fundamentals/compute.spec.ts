import { compute } from './compute'; // Asegúrate de ajustar la ruta correcta

describe('compute function', () => {
  it('should return 0 if number is negative', () => {
    const result = compute(-5);
    expect(result).toEqual(0);
  });

  it('should increment the number by 1 if it is positive', () => {
    const result = compute(5);
    expect(result).toEqual(6);
  });

  it('should return 1 when 0 is provided', () => {
    const result = compute(0);
    expect(result).toEqual(1);
  });

  // Additional test cases can be added based on different scenarios
});