import numFormatter from '../app/utils/num-formatter';

it('1,000 => 1k', () => {
  return expect(numFormatter(1000)).toBe('1k');
});

it('19,999 => 20k', () => {
  return expect(numFormatter(19999)).toBe('20k');
});

it('11,111 => 11.1k', () => {
  return expect(numFormatter(11111)).toBe('11.1k');
});

it('1,000,000 => 1m', () => {
  return expect(numFormatter(1000000)).toBe('1m');
});

it('1,999,999 => 2m', () => {
  return expect(numFormatter(1999999)).toBe('2m');
});

it('1,499,999 => 1.5', () => {
  return expect(numFormatter(1499999)).toBe('1.5m');
});
