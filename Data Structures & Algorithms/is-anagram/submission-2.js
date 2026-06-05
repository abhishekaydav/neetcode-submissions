class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const strHasmap = {}

        for(let i = 0; i< s.length; i++){
            if(strHasmap[s[i]] !== undefined){
                strHasmap[s[i]] = strHasmap[s[i]] +1
            } else {
                strHasmap[s[i]] = 1
            }

            if(strHasmap[t[i]] !== undefined){
                strHasmap[t[i]] =strHasmap[t[i]] -1
            } else {
                strHasmap[t[i]] = -1
            }

        
        }

        for (const str in strHasmap){
            if(strHasmap[str] !== 0){
                return false
            }
        }

        return true
    }
}
