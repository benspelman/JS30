/**
 * @jest-environment jsdom
 */

const arrayOfPlayers = require('./14');

describe('players array', () => {
    it('Is not null', () => {
        expect(arrayOfPlayers[0]).not.toBeNull();
    });

    it('Has the original elements and is not changed', () => {
        expect(arrayOfPlayers[0][3]).toBe('Poppy');
    });
    
    it('Has 4 elements in the array', () => {
        expect(arrayOfPlayers[0]).toHaveLength(4);
    });
});

describe('players2 array', () => {
    it('Is not null', () => {
        expect(arrayOfPlayers[1]).not.toBeNull();
    });

    it('Has the changed values', () => {
        expect(arrayOfPlayers[1][3]).toBe('Donald');
    });
    
    it('Has 4 elements in the array', () => {
        expect(arrayOfPlayers[1]).toHaveLength(4);
    });
});
