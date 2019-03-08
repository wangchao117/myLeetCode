/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.17%)
 * Total Accepted:    55.6K
 * Total Submissions: 172.8K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 用于放数组公共部分
    let res = ''
    // 循环找出长度最短的字符串，作为接下来循环比较的参照
    let short = strs[0]
    for (let i=0; i<strs.length - 1; i++) {
        if (strs[i].length < short) {
            short = strs[i]
        }
    } 
    if(!strs.length){
        return res;
    }

    for (let i=0; i<short.length; i++) {
        for (j=0; j<strs.length; j++) {
            if (short[i] !== strs[j][i]) {
                return res
            }
        }
        res += short[i]
    } 
    return res
};

