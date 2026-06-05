class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedResult ="";

        for(let i = 0; i< strs.length; i++){
            encodedResult = encodedResult + strs[i].length + "#" + strs[i];
        }

        return encodedResult
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {

        const result =[];

        while (s.length > 0){
        const getIndex = s.indexOf("#")

        if(getIndex == -1) break

        const lengthStr = s.substring(0,getIndex);

        const length = Number(lengthStr)

        const wordStartIndex = getIndex +1;

        const endWordIndex = wordStartIndex + length

        let originalWord = s.substring(wordStartIndex, endWordIndex)

        result.push(originalWord)

        s = s.substring(endWordIndex)

    }

    return result

    }
}
