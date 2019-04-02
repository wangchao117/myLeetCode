/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (57.97%)
 * Total Accepted:    32.2K
 * Total Submissions: 55.1K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var obj = {};
    var halfNum = nums.length / 2;
    var mode;
    if (nums.length === 1) return nums[0];
    for (let i = 0; i < nums.length; i++) {    //拆解数组中元素，赋值为对象的key
        if (obj[nums[i]]) {                //遍历，若已有该key，
            obj[nums[i]] += 1;             //对应的value+1
            if (obj[nums[i]] > halfNum) {    //若该key对应的value大于数组元素个数的半数
                mode = nums[i];
                return mode;            //返回该key值
            }
        } else {
            obj[nums[i]] = 1;              //若没有，加key，对应value赋值为1
        }
    }
};

