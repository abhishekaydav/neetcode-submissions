class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const anaGropMap = {};
    for(let i =0; i < strs.length; i++ ){
        const sortedStr = strs[i].split("").sort().join("");
        if(anaGropMap[sortedStr] == undefined){
            anaGropMap[sortedStr] = [];
        }   
        anaGropMap[sortedStr].push(strs[i])
        }
    return Object.values(anaGropMap);
    }
}
