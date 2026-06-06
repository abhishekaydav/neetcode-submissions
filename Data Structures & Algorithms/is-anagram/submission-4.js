class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const wordHash = {};
        for(let i=0; i< s.length; i++){
            const currentWordS = s[i]
            const currentWordt = t[i]

            if(wordHash[currentWordS]){
                wordHash[currentWordS] += 1;
            } else {
                wordHash[currentWordS] = 1;
            }

            if(wordHash[currentWordt]){
                wordHash[currentWordt] -= 1;
            } else {
                wordHash[currentWordt] = -1
            }
        }

        for(let word in wordHash){
            if(wordHash[word] !== 0) return false
        }

        return true
    }
}
