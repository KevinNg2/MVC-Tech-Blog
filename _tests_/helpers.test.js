const {format_date} = require('../utils/helpers');

// creating test to that format_date() takes Date() objects and returns dates in MM/DD/YYYY
test('format_date() returns a date string', () => {
    const date = new Date('2022-13-10 16:12:03');
  
    expect(format_date(date)).toBe('10/13/2022');
  });

const {format_plural} = require('../utils/helpers')

// plural point and comments
test('format_plural() returns a pluralized word', () => {
      const plural = format_plural('turtle', 2);
      const single = format_plural('dog', 1);
      
      expect(plural).toBe('turtles');
      expect(single).toBe('dog');
});

const {format_url} = require('../utils/helpers');

// shortening URLS
test('format_url() returns a simplified url string', () => {
    const url1 = format_url('https://www.youtube.com/watch?v=XMVmQAW0CM8&list=RDXMVmQAW0CM8&start_radio=1');
    const url2 = format_url('https://www.espn.com/fantasy/');
    const url3 = format_url('https://www.google.com?q=coding');
  
    expect(url1).toBe('youtube.com');
    expect(url2).toBe('espn.com');
    expect(url3).toBe('google.com');
});