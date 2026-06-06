class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const record = {}

        for(let i =0; i< nums.length; i++){
            if(record[nums[i]]){
                record[nums[i]] = record[nums[i]] +1;
            } else {
                record[nums[i]] = 1;
            }
        }

        const keys = Object.keys(record).sort((a,b)=> record[b] - record[a])

        return keys.slice(0,k)

    }
}
