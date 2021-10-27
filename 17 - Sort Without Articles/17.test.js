/**
 * @jest-environment jsdom
 */

const thingsToExport = require('./17');

console.log(thingsToExport.bands);

describe('Band array', () => {
    it('is not null', () => {
        expect(thingsToExport.bands).not.toBe(null);
    })
});

describe('Strip function', () => {
    it('removes \'the\' from a string', () => {
        expect(thingsToExport.strip("The test")).toMatch("test");
    })
});

describe('Strip function', () => {
    it('removes \'a\' from a string', () => {
        expect(thingsToExport.strip("A test")).toMatch("test");
    })
});

describe('Strip function', () => {
    it('removes \'an\' from a string', () => {
        expect(thingsToExport.strip("An test")).toMatch("test");
    })
});

describe('Strip function', () => {
    it('removes \'the\' from a string when there are additional spaces', () => {
        expect(thingsToExport.strip(" The test")).toMatch("test");
    })
});