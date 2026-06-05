class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for(let i=0; i<strs.length; i++){
            encoded = encoded + strs[i].length+"#" +strs[i];
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        const result=[]

        while(s.length > 0){
            let firstHash = s.indexOf("#");
            if(firstHash === -1) break;
            const length = Number(s.substring(0, firstHash));
            
            const startIndex = firstHash +1;

            const lastIndex = startIndex + length;

            const word = s.substring(startIndex,lastIndex);

            result.push(word);

            s = s.substring(lastIndex);

        }

        return result;
    }
}
