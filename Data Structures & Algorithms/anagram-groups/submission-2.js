class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    
    const annaGram ={}

    for(let i =0; i<strs.length; i++){
        const anStr = strs[i].split("").sort().join("")

        if(annaGram[anStr] == undefined){
            annaGram[anStr] = []
        }
        annaGram[anStr].push(strs[i])
    }

    return Object.values(annaGram)

    }
}
