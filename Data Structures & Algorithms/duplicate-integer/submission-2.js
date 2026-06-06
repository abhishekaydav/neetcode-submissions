class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       const setMap = new Set(nums)

       if(setMap.size !== nums.length){
        return true
       } 
       return false
    }
}
