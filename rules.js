
/**
 * 验证规则
 * @file: rules.js
 * @author: LiuZiHao/951919064@qq.comX
 * Date: 18-1-19 上午10:11
 */

const regexs ={
  mobile:/^1[3|4|5|7|8][0-9]{9}$/,
  username:/^[a-zA-Z][a-zA-Z0-9_-]{5,15}$/,
  nickname:/^[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+$/,
  password:/^[a-zA-Z]+\w{5,17}$/,
  mobileCode:/\d{6}$/,
  qq:/^\d{5,}$/,
}

export default regexs