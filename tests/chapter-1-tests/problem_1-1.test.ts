import { allUniqueCharacters } from "./../../src/chapter-1-arrays-strings/problem_1-1";
import { expect } from 'chai';

describe('Problem 1.1 tests', () => { // the tests container
    it('Checking if test works', () => { // the single test
        expect(allUniqueCharacters("love")).to.be.true;
    });
});
