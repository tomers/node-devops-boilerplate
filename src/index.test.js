import { expect } from 'chai';
import people from './index';

describe('people', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(people.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(item => (typeof item === 'string'));
      }
    });

    it('should contain `Tali`', () => {
      expect(people.all).to.include('Tali');
    });
  });

  describe('random', () => {
    it('should return a random item from the people.all', () => {
      const randomItem = people.random();
      expect(people.all).to.include(randomItem);
    });
  });
});
