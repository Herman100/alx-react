import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils.js', () => {
  test('getFullYear returns current year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });

  test('getFooterCopy returns correct string based on argument', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification returns correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
