
/**
 * element-ui 验证规则
 * @file: el-validator.js
 * @author: LiuZiHao/951919064@qq.com
 * Date: 18-1-19 上午10:07
 */
import rules from './rules';


const validateUsername = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入用户名'));
  } else {
    if(!rules.username.test(value)){
      callback(new Error('以字母开头，6~16字符'));
    }else{
      callback()
    }
  }
};
const validateMobile = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入手机号码'));
  } else {
    if(!rules.mobile.test(value)){
      callback(new Error('请输入正确的手机号码'));
    }else{
      callback()
    }
  }
};

const elValidators = {
  username:validateUsername,
  mobile:validateMobile,
}


export default elValidators