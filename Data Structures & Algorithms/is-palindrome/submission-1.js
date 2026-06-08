class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaBet(str){
        if((str>="A" && str<="Z") || (str >= "a" && str <= "z") || (str>="0" && str <= "9") ){
            return true
        }
    }

    isPalindrome(s) {

        let dataString ="";

        for(let i=0; i<s.length; i++){
            if(this.isAlphaBet(s[i])){
                dataString += s[i].toLowerCase() 
            }
        }

        const reverse = dataString.split("").reverse().join("")

        return dataString === reverse
        
    }
}
