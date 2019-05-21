/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ret = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        ret = ret ^ element;
    }
    return ret;
};

