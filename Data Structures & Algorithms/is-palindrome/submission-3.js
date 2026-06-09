class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */



    isPalindrome(s) {

        let str = s.replace(/[^A-Za-z0-9]/g,"").toLowerCase()

        let reverse = str.split("").reverse().join("")

        return str === reverse
        
        
    }
}
