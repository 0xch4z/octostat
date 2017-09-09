import numFormatter from '../app/utils/num-formatter';

it('1000 => 1k', () => {
  return expect(numFormatter(1000)).toBe('1k');
});

it('19999 => 20k', () => {
  return expect(numFormatter(19999)).toBe('20k');
});

it('11111 => 11k', () => {
  return expect(numFormatter(19999)).toBe('20k');
});
