/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const visited = {} // 记录出现的数字， 空间复杂度N
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (visited[target - element]) {
            return [visited[target - element], index + 1]
        }
        visited[element] = index + 1;
    }
    return [];
};

