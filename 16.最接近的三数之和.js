/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (41.67%)
 * Likes:    271
 * Dislikes: 0
 * Total Accepted:    46.9K
 * Total Submissions: 112.5K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let diff = Infinity
  let sums = undefined
  if (nums.length <= 3) return nums.reduce((a, b) => a + b, 0)
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    let start = i + 1
    let end = nums.length - 1
    while (start < end) {
      if (Math.abs(target - (nums[i] + nums[start] + nums[end])) < diff) {
         // 最接近的和
         sums = nums[i] + nums[start] + nums[end]
         // 当前最小的差值
         diff = Math.abs(target - (nums[i] + nums[start] + nums[end]))
      }
      if (nums[i] + nums[start] + nums[end] > target) {
          end -= 1
      } else if (nums[i] + nums[start] + nums[end] < target) {
          start += 1
      } else {
          return target
      }
    }
  }
  return sums
};
// @lc code=end

