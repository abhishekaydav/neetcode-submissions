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
            const index = s.indexOf("#")
            if(index === -1) break;
            const length = Number(s.substring(0,index))
            const startAt = index+1;
            const endAt = startAt + length

            const word = s.substring(startAt, endAt)

            decoded.push(word)

            s = s.substring(endAt)
        }
        return decoded;
    }
}
