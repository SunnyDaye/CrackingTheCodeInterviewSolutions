//Question: Implement an algorithm to determine if a string has all unique caracters. What if you cannot use additional data structures?
export const allUniqueCharacters = (word:string): boolean => {
    let map : {[index: string]: number} = {}; //must have an index signature if using variable to index object
    for(let char of word.toLocaleLowerCase()){
        if(map[char]) return false;
        map[char] = 1;
    }
    return true;
}

const result:boolean = allUniqueCharacters('Suncy');

console.log(result);