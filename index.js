import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import regexs from './rules';
const dict = {
  name: 'zh_CN',
  custom: {
    mobile: {
      required: '请填写手机号码'
    },
    mobileCode: {
      required: '请填写验证码'
    },
  },
  messages: {},
  attributes: {
    mobile: '手机号码',
    password: '密码',
    username: '账号名',
    mobileCode: '手机验证码'
  }
};

Validator.localize('zh_CN', dict);
Validator.localize('zh_CN', zh_CN);
const config = {
  locale: 'zh_CN',
  inject: false,
};

const rules = [
  {
    name: 'mobile',
    regex: regexs.mobile,
    msg: '请填写正确的手机号码',
  },
  {
    name: 'username',
    regex: regexs.username,
    msg: '请输入正确的用户名，以字母开头，6~16字符，比如：kyy123',
  },
  {
    name: 'nickname',
    regex: regexs.nickname,
    msg: '请输入正确的呢称(2-15字符，中英文、数字和下划线)'
  },
  {
    name: 'password',
    regex: regexs.password,
    msg: '密码格式错误(以字母开头，长度在6~18之间，只能包含字母、数字)'
  }
];
// 扩展
rules.forEach((item) => {
  let rule        = {};
  rule.get        = item.validate;
  rule.getMessage = (field, args, data) => {
    return (data && data.message) || field + '验证失败';
  };
  rule.validate   = (value, args) => {
    return new Promise(resolve => {
      resolve({
        valid: item.regex.test(value),
        data: {
          message: item.msg
        }
      });
    });
  };

  Validator.extend(item.name, rule);
});
Vue.use(VeeValidate, config);