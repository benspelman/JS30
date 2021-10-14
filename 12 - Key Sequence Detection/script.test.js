/**
 * @jest-environment jsdom
 */

const secretCode = require('./script')

test('secret code isn\'t null', () => {
    expect(secretCode).not.toBeNull();
});

test('secret code is the konami code', () => {
    expect(secretCode).toBe('arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba');
});