class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length == 2){
            if(nums[0] + nums[1] == target){
                return [0,1]
            }
            return false
        }
        const hashMap = {}
        for(let i = 0; i< nums.length; i++){
            if(hashMap[target - nums[i]] !== undefined){
                return [i, hashMap[target - nums[i]]]
            }
            
            hashMap[nums[i]] = i
        }
        return false
    }
}
