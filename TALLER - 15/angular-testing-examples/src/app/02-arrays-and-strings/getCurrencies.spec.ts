import { getCurrencies } from './getCurrencies';

describe('getCurrencies function', () => {
	it('should return an array of currencies', () => {
	  const currencies = getCurrencies();
	  expect(currencies).toBeDefined(); // Verifica si el resultado está definido
	  expect(currencies.length).toBeGreaterThan(0); // Verifica si el array tiene elementos
	  expect(currencies).toEqual(['USD', 'AUD', 'EUR']); // Verifica si el resultado coincide con lo esperado
	});
  
	it('should contain specific currencies', () => {
	  const currencies = getCurrencies();
	  expect(currencies).toContain('USD'); // Verifica si 'USD' está presente en el array
	  expect(currencies).toContain('AUD'); // Verifica si 'AUD' está presente en el array
	  expect(currencies).toContain('EUR'); // Verifica si 'EUR' está presente en el array
	});
  
	// Puedes agregar más pruebas según las necesidades de tu función
  });