class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let length = nums.length
        let result = new Array(length)

        result[0] = 1;
        for(let i = 1; i< length; i++){
            result[i] = result[i-1] * nums[i-1]
        }

        let rightHand = 1;

        for(let i = length -1; i >= 0; i--){
            result[i] = result[i] * rightHand 
            rightHand = rightHand * nums[i]
        }

        return result
    }
}
