/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.34%)
 * Likes:    1851
 * Dislikes: 0
 * Total Accepted:    128.2K
 * Total Submissions: 433.7K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0
    if (s.length === 1) return 1
    let maxLen = 0
    for1: for (let i = 0; i < s.length; i++) {
        let str = s[i]
        for (let j = i + 1; j < s.length; j++) {
            maxLen = Math.max(maxLen, str.length)
            if (str.indexOf(s[j]) < 0) {
                str += s[j]
                maxLen = Math.max(maxLen, str.length)
            } else {
                continue for1
            }
        }
    }
    return maxLen
};
// @lc code=end

