class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded =""

        for(let word of strs){
            encoded = encoded + word.length+ '#'+ word
        }

        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {

        let decoded =[]

        while(s.length > 0){
            const start = s.indexOf("#")

            if(start === -1) break;

            const length = Number(s.substring(0,start))

            const wordEnd = start+1+length

            const word = s.substring(start+1, wordEnd)
            
            decoded.push(word)

            s=s.substring(wordEnd)
        }


        return decoded
       
    }
}
