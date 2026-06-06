class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for(let i=0; i<strs.length; i++){
            const length= strs[i].length
            encoded = encoded+strs[i].length+"#"+strs[i]
        }

        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        const decoded =[];

        while(s.length > 0){

        const index = s.indexOf('#');

        if(index=== -1) break;
        
        const length = Number(s.substring(0, index));

        const startAt = Number(index+1);

        const letterEnd = Number (startAt + length);

        decoded.push(s.substring(startAt, letterEnd))

        s = s.substring(letterEnd)
        }
        return decoded;
    }
}
