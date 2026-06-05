class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(!Array.isArray(nums) || nums.length === 0) return false

        return new Set(nums).size !== nums.length;
    }
}
