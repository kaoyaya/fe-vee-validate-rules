/**
 * User: LiuZiHao/951919064@qq.com
 * Date: 2017/7/11 12:46
 * Desc: 验证方法
 */


function checkFileds(validator, checkFields, vm) {
  return validator.validateAll(checkFields).then(res => {
    const items = validator.errors.items;
    for (let i = 0, len = items.length; i < len; i++) {
      let msg = items[i].msg;
      if (msg.length <= 15) {
        vm.$message.error({
          message: msg,
          showClose: true
        });
      } else {
        vm.$alert(msg, {
          confirmButtonText: '知道啦~',
        });
      }
      break;
    }
    return res;
  });
}

export { checkFileds };