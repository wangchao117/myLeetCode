/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.78%)
 * Total Accepted:    88.8K
 * Total Submissions: 279.5K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 将数字转换为字符串
    var Arr = [];
    var Str = x.toString();
    // 再倒序遍历字符串将每一位push数组
    for(var i = Str.length-1;i > 0;i--){
        Arr.push(Str[i]);
    }
    // 是否存在符号‘-’，存在将数组最后一位‘-’放数组最前面
    if(Str[0] == "-"){
        Arr.unshift("-");
    }
    Arr.push(Str[0]);
    // 转换为NUM
    var resultNum = parseInt(Arr.join(""));
    // 是否再制定范围内
    if(resultNum <= Math.pow(-2,31) || resultNum >= Math.pow(2,31) - 1 ){
        return 0;
    }
   return resultNum;
};

