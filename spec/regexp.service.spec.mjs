import { RegExpService } from '../src/regExp.service';

const regExpService = new RegExpService();

describe('Test valid name input:', () => {
  const parameters = [
    {
      description: 'Should pass with 3 to 50 characters',
      input: 'Nya',
      output: true,
    },
    {
      description: 'Should fail with less then 3 characters',
      input: 'Ny',
      output: false,
    },
    {
      description: 'Should fail with numeric input',
      input: '1234',
      output: false,
    },
    {
      description: 'Should fail with empty string',
      input: '',
      output: false,
    },
    {
      description: 'Should fail with null value',
      input: '1234',
      output: false,
    },
  ];

  parameters.forEach(({ description, input, output }) => {
    it(description, () => {
      const result = regExpService.isValidName(input);
      expect(result).toBe(output);
    });
  });
});
