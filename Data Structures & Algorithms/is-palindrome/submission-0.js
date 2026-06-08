class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const word = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()

        const reverse = word.split("").reverse().join("")

        return word === reverse;
    }
}
