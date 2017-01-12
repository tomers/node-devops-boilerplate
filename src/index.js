import uniqueRandomArray from 'unique-random-array';
import people from './people.json';

module.exports = {
  all: people,
  random: uniqueRandomArray(people)
};
