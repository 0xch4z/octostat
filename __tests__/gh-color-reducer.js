import ghColorReducer from '../app/utils/gh-color-reducer';
import ghColors from '../app/utils/gh-colors.json';

test('Javascript GHColor => ', () => {
  return expect(ghColorReducer('JavaScript')).toBe('#f1e05a');
});

test('Brainfuck GHColor => ', () => {
  return expect(ghColorReducer('Brainfuck')).toBe('#2F2530');
});

test('Swift GHColor =>', () => {
  return expect(ghColorReducer('Swift')).toBe('#ffac45');
});
