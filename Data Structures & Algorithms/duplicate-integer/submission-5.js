class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       const numHasMap = {};

       for(let i=0; i< nums.length; i++ ){
        const currentNum = nums[i];
        if(numHasMap[currentNum]){
            return true
        } else {
            numHasMap[currentNum] = 1;
        }
       }
       return false
    }
}
