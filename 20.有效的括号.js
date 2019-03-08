/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.61%)
 * Total Accepted:    50.1K
 * Total Submissions: 136.7K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 思路：var一个空数组，将字符串进行循环，循环过程中，如果数组里没有与此时的字符相匹配的就放进数组，
    // 如果有，就把数组的字符去掉，循环完成，如果数组为空说明匹配
    let sArr = [];
    for (var i = 0; i < s.length; i++) {
        let flag = false
        if (sArr.length) {
            if (s[i] === '('||s[i] === '['||s[i] === '{') {
                sArr.push(s[i])
            } else {
                for(let j = 0; j < sArr.length; j++) {
                    if (s[i] === ')' && sArr[sArr.length-1] === '(') {
                        sArr.splice(sArr.length-1, 1)
                        flag = true
                        break
                    } else if (s[i] === '}' && sArr[sArr.length-1] === '{') {
                        sArr.splice(sArr.length-1, 1)
                        flag = true
                        break
                    } else if (s[i] === ']' && sArr[sArr.length-1] === '[') {
                        sArr.splice(sArr.length-1, 1)
                        flag = true
                        break
                    }
                }
                if (!flag) {
                    sArr.push(s[i])
                }
            }
        } else {
            sArr.push(s[i])
        }
        
    }
    console.log(sArr)
    if (sArr.length > 0) {
        return false;
    } else {
        return true
    }
};

