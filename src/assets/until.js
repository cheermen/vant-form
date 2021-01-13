import { request } from "./api.js";
import lodash from "lodash";
export class baseUntils {
  constructor() {
    this.lodash = lodash;
  }

  isArray(obj) {
    return obj && typeof obj == "object" && obj.constructor == Array;
  }

  isString(str) {
    return str && typeof str == "string" && str.constructor == String;
  }
  // isNumber(obj) {
  //   return typeof obj == "number" && obj.constructor == Number;
  // }
  isDate(obj) {
    return obj && typeof obj == "object" && obj.constructor == Date;
  }
  isObject(obj) {
    return obj && typeof obj == "object" && obj.constructor == Object;
  }
  // 对象数组去重， arr 数组， key 关键字
  arrRemoveRepeat(arr, key) {
    //  方法2：利用reduce方法遍历数组,reduce第一个参数是遍历需要执行的函数，第二个参数是item的初始值
    var obj = {};
    arr = arr.reduce(function(item, next) {
      obj[next[key]] ? "" : (obj[next[key]] = true && item.push(next));
      return item;
    }, []);
    return arr;
  }

  // 获取数组中某一属性的集合
  arrGetfields(arr, key) {
    if (arr.map) {
      return arr.map(item => item[key]);
    } else {
      return [];
    }
  }
  isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  getEvent(event) {
    return event || window.event || arguments.callee.caller.arguments[0];
  }
  preventDefault(event) {
    let e = window.event || event;
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
    this.stopPropagation(e);
  }
  stopPropagation(event) {
    let e = window.event || event;
    if (e.stopPropagation) {
      //W3C阻止冒泡方法
      e.stopPropagation();
    } else {
      e.cancelBubble = true; //IE阻止冒泡方法
    }
  }
  // 获取指定祖先元素
  getParentDomWithClassName(dom, topNode, targetNode) {
    let resultDom = false;
    let _this = this;
    while (dom.className != topNode) {
      if (_this.hasClass(dom, targetNode)) {
        resultDom = true;
        break;
      }
      dom = dom.parentNode;
    }
    return resultDom;
  }
  // 判断元素 是否含有某个class, dom, class
  hasClass(ele, cls) {
    if (ele) {
      cls = cls || "";
      if (cls.replace(/\s/g, "").length == 0) return false; // 当cls没有参数时，返回false
      return new RegExp(" " + cls + " ").test(" " + ele.className + " ");
    }
  }
  trimNbsp(s) {
    let str = s.replace("&nbsp;", "");
    return this.trim(str);
  }
  trim(str) {
    // 删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
  }
  //   <!--限制文本框只能输入正数、小数、负数-->
  limitConst(str) {
    return str.replace(/[^\-?\d.%]/g, "");
  }
  // 匹配 +-×÷()/*
  limitSign(str) {
    let arr = str.split("");
    let newIndex, newStr;
    arr.forEach((text, index) => {
      if (this._singString.indexOf(text) != -1) newIndex = index;
    });
    if (arr[newIndex]) {
      newStr = arr[newIndex];
    } else {
      newStr = "";
    }
    newStr = newStr.replace("/", "÷");
    newStr = newStr.replace("*", "×");
    return newStr;
  }
  // 去除中文
  removeCinString(str) {
    let reg = /[^a-zA-Z]/g;
    return this.removeEinString(str.replace(reg, ""));
  }
  // 去除英文
  removeEinString(str) {
    let reg = /[u4E00-u9FA5]/g;
    return str.replace(reg, "");
  }
  // 判断是否中英文
  verifyCe(str) {
    let reg = /[^[\u4e00-\u9fa5_a-zA-Z]+$]/g;
    return reg.test(str);
  }
  //保留两位小数
  //功能：将浮点数四舍五入，取小数点后2位
  toDecimal(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
      return;
    }
    f = Math.round(x * 100) / 100;
    return f;
  }

  //制保留2位小数，如：2，会在2后面补上00.即2.00
  toDecimal2(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
      return false;
    }
    f = Math.round(x * 100) / 100;
    var s = f.toString();
    var rs = s.indexOf(".");
    if (rs < 0) {
      rs = s.length;
      s += ".";
    }
    while (s.length <= rs + 2) {
      s += "0";
    }
    return s;
  }

  fomatFloat(src, pos) {
    return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
  }
}

// 校验父类
export class ValiadUntils {
  validCommon(formItem, callback) {
    let type = formItem.attrbute.type;
    let text = formItem[formItem.key];
    if (type == "email") this.emailFormatCheck(text, callback);
    if (type == "phone") this.phoneFormatCheck(text, callback);
    if (type == "peopleCard") this.peopleCardFormatCheck(text, callback);
    if (type == "bankcard") this.checkYhk(text.replace(/\s*/g, ""), callback);
    if (type == "QQ") this.qqFormatCheck(text, callback);
  }

  checkYhk(content, callback) {
    var regExp = /^([1-9]{1})(\d{15}|\d{18})$/;
    if (regExp.test(content)) {
      callback();
    } else {
      callback("银行卡号格式错误", "error");
    }
    // var regex = /^(998801|998802|622525|622526|435744|435745|483536|528020|526855|622156|622155|356869|531659|622157|627066|627067|627068|627069)\d{10}$/;
    // if (regex.test(content)) {
    //   callback();
    // }
    // callback("你输入的格式不正确");
  }
  // 检查字符串是否为合法QQ号码
  qqFormatCheck(qq, callback) {
    // 1 首位不能是0 ^[1-9]
    // 2 必须是 [5, 11] 位的数字 \d{4, 9}
    let reg = /^[1-9][0-9]{4,9}$/gim;
    if (reg.test(qq)) {
      callback();
      return;
    } else {
      callback("请输入正确格式的QQ号码");
      return;
    }
  }
  /**
   * email格式校验
   * @param {Object} email 邮件地址内容
   */
  emailFormatCheck(email, callback) {
    if (email.length > 128 || email.length < 6) {
      callback("邮箱格式错误", "error");
      return;
    }
    var reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
    if (!reg.test(email)) {
      callback("邮箱格式错误", "error");
      return;
    }
    callback();
  }

  /**
   * phone格式校验
   * @param {Object} phone 手机号内容
   */
  phoneFormatCheck(phone, callback) {
    var format = /^(13[0-9]|14[01456789]|15[012356789]|16[2567]|17[01235678]|18[0-9]|19[012356789])[0-9]{8}$/;
    if (!format.test(phone)) {
      callback("请输入11位手机号", "error");
      return false;
    }
    callback();
  }

  /**
   * 身份证格式校验
   * @param {Object} card 身份证内容
   */
  peopleCardFormatCheck(card, callback) {
    // 15位和18位身份证号码的正则表达式
    var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    // 如果通过该验证，说明身份证格式正确，但准确性还需计算
    if (regIdCard.test(card)) {
      if (card.length == 18) {
        var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); // 将前17位加权因子保存在数组里
        var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
        var idCardWiSum = 0; // 用来保存前17位各自乖以加权因子后的总和
        for (var i = 0; i < 17; i++) {
          idCardWiSum += card.substring(i, i + 1) * idCardWi[i];
        }
        var idCardMod = idCardWiSum % 11; // 计算出校验码所在数组的位置
        var idCardLast = card.substring(17); // 得到最后一位身份证号码
        // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
        if (idCardMod == 2) {
          if (idCardLast == "X" || idCardLast == "x") {
            callback();
          } else {
            callback("请输入18位合法身份证号", "error");
          }
        } else {
          // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
          if (idCardLast == idCardY[idCardMod]) {
            callback();
          } else {
            callback("请输入18位合法身份证号", "error");
          }
        }
      }
    } else {
      callback("请输入18位合法身份证号", "error");
    }
  }
}

// 表单数据解析
export class parseFormUntils extends baseUntils {
  constructor(delegate = null) {
    super();
    this.delegate = delegate;
    this.templateForm = null;
    this.ruleForm = null;
  }
  // 设置已有表单数据的回显， 给form表单赋值
  setFormItemDataWithRuleForm(ruleForm, itemForm) {
    let _this = this;
    if (ruleForm) _this.ruleForm = ruleForm;
    if (itemForm) _this.templateForm = _this.lodash.cloneDeep(itemForm);
    for (let key in this.ruleForm) {
      _this.templateForm.forEach(item => {
        if (item.type != "col") {
          if (item.type == "inputgroup" || item.type == "group" || item.type == "busgroup") {
            item.children.forEach(groupItem => {
              if (groupItem.key == key) {
                groupItem[key] = _this.ruleForm[key];
              }
            });
          } else if (item.key == key) {
            if (item.type == "cascader" && _this.ruleForm[key] == "") {
              item[item.key] = [];
            } else {
              item[key] = _this.ruleForm[key];
            }
          }
        }
      });
    }
    return this.templateForm;
  }

  // 表单重置为空
  setFormItemDataWithKey(itemForm) {
    let _this = this;
    if (itemForm) _this.templateForm = itemForm;
    _this.templateForm.forEach(item => {
      if (item.type != "col") {
        if (item.type == "inputgroup" || item.type == "group" || item.type == "busgroup") {
          item.children.forEach(groupItem => {
            groupItem[groupItem.key] = "";
            groupItem.validateStatus = "";
            groupItem.helping = "";
          });
        } else if (item.type == "daterange" || item.type == "datepicker") {
          item[item.key] = null;
          item.validateStatus = "";
          item.helping = "";
        } else {
          item[item.key] = "";
          item.validateStatus = "";
          item.helping = "";
        }
      }
    });
    return this.templateForm;
  }

  // 生成表单需要返回的数据, data 是配置表单的json数据，返回一个form表单的全字段值的对象
  getFormDataWithFormItem(data) {
    let _this = this;
    let formData = {};
    if (!data) return {};
    data.forEach(formItem => {
      if (formItem.type != "col") {
        if (formItem.type == "inputgroup" || formItem.type == "group" || formItem.type == "busgroup") {
          formItem.children.forEach(groupItem => {
            formData[groupItem.key] = groupItem[groupItem.key];
          });
        } else {
          if (formItem.type == "cascader") {
            formData[formItem.key] = _this.isArray(formItem[formItem.key])
              ? formItem[formItem.key].length > 0
                ? formItem[formItem.key][formItem[formItem.key].length - 1]
                : null
              : formItem[formItem.key];
          } else formData[formItem.key] = formItem[formItem.key];
        }
      }
    });
    return formData;
  }

  // 判断表单数据是否全部校验通过
  allFormValiadPass(data) {
    let flag = true;
    let that = this;
    if (!data) return {};
    data.forEach(formItem => {
      if (formItem.type != "col" && formItem.isShow) {
        if (formItem.validateStatus == "error") {
          // formItem.helping = formItem.rules.message;
          flag = false;
        }
        if (formItem.rules && formItem.rules.require) {
          if (formItem.type == "inputgroup" || formItem.type == "group" || formItem.type == "busgroup") {
            formItem.children.forEach(itemC => {
              if (itemC.rules && itemC.rules.require) {
                if (!itemC[itemC.key] || itemC[itemC.key] == "" || itemC[itemC.key].length == 0) {
                  itemC.validateStatus = "error";
                  itemC.helping = itemC.rules.message;
                  flag = false;
                }
              }
            });
          } else {
            if (formItem.type == "range" || formItem.type == "daterange" || formItem.type == "presentdaterange") {
              if (formItem[formItem.key]) {
                if (that.isArray(formItem[formItem.key])) {
                  if (formItem[formItem.key][0] && formItem[formItem.key][1]) {
                    flag = true;
                  } else {
                    formItem.validateStatus = "error";
                    formItem.helping = formItem.rules.message;
                    flag = false;
                  }
                }
              }
            }
            if (!formItem[formItem.key] || formItem[formItem.key] == "" || formItem[formItem.key].length == 0) {
              formItem.validateStatus = "error";
              formItem.helping = formItem.rules.message;
              flag = false;
            }
          }
        }
      }
    });
    return flag;
  }
  // 判断表单数据是否全部校验通过 不设置状态
  allFormValiadPass2(data) {
    let flag = true;
    let that = this;
    if (!data) return {};
    data.forEach(formItem => {
      if (formItem.type != "col" && formItem.isShow) {
        if (formItem.validateStatus == "error") {
          flag = false;
        }
        if (formItem.rules && formItem.rules.require) {
          if (formItem.type == "inputgroup" || formItem.type == "group" || formItem.type == "busgroup") {
            formItem.children.forEach(itemC => {
              if (itemC.rules && itemC.rules.require) {
                if (!itemC[itemC.key] || itemC[itemC.key] == "" || itemC[itemC.key].length == 0) {
                  flag = false;
                }
              }
            });
          } else {
            if (formItem.type == "range" || formItem.type == "daterange" || formItem.type == "presentdaterange") {
              if (formItem[formItem.key]) {
                if (that.isArray(formItem[formItem.key])) {
                  flag = formItem[formItem.key][0] && formItem[formItem.key][1] ? true : false;
                }
              }
            }
            if (!formItem[formItem.key] || formItem[formItem.key] == "" || formItem[formItem.key].length == 0) {
              flag = false;
            }
          }
        }
      }
    });
    return flag;
  }

  /**
   * 判断必填项是否全部已填（对错不论）
   * @constructor
   */
  requireFormValiadPass(data) {
    let flag = true;
    if (!data) return {};
    data.forEach(formItem => {
      if (formItem.type != "col" && formItem.isShow) {
        if (formItem.rules && formItem.rules.require) {
          if (formItem.type == "inputgroup" || formItem.type == "group" || formItem.type == "busgroup") {
            formItem.children.forEach(itemC => {
              if (itemC.rules && itemC.rules.require) {
                if (!itemC[itemC.key] || itemC[itemC.key] == "" || itemC[itemC.key].length == 0) {
                  itemC.validateStatus = "error";
                  itemC.helping = itemC.rules.message;
                  flag = false;
                }
              }
            });
          } else {
            if (!formItem[formItem.key] || formItem[formItem.key] == "" || formItem[formItem.key].length == 0) {
              formItem.validateStatus = "error";
              formItem.helping = formItem.rules.message;
              flag = false;
            }
          }
        }
      }
    });
    return flag;
  }

  /**
   * 设置表单的状态
   * @constructor
   */
  setFormItemStatus(data, flag) {
    data.forEach(formItem => {
      if (formItem.type != "col") {
        if (formItem.type == "inputgroup" || formItem.type == "group" || formItem.type == "busgroup") {
          formItem.children.forEach(groupItem => {
            groupItem.readOnly = flag;
          });
        } else {
          formItem.readOnly = flag;
        }
      }
    });
    return data;
  }

  /**
   * 根据key返回对应的值
   * @constructor
   */
  getValueWithItemkey(key, data) {
    let flag = true;
    data.forEach(formItem => {
      if (formItem.type != "col") {
        if (formItem.type == "inputgroup" || formItem.type == "group" || formItem.type == "busgroup") {
          formItem.children.forEach(groupItem => {
            if (groupItem.key == key) {
              flag = groupItem[key];
            }
          });
        } else {
          if (formItem.key == key) {
            flag = formItem[key];
          }
        }
      }
    });
    return flag;
  }
  /**
   * 根据key 设置 value.
   * @constructor
   * @param {String} key - 关键字.
   * @param {String} value - 关键字对象对应的值.
   */
  setValueWithItemKey(key, value, data) {
    if (!data) return {};
    data.forEach(formItem => {
      if (formItem.type != "col") {
        if (formItem.type == "inputgroup" || formItem.type == "group" || formItem.type == "busgroup") {
          formItem.children.forEach(groupItem => {
            if (groupItem.key == key) {
              groupItem[key] = value;
            }
          });
        } else {
          if (formItem.key == key) {
            formItem[key] = value;
          }
        }
      }
    });
    return data;
  }
  /**
   * 获取需要翻译的码表数组.
   * @constructor
   * @param {Array} items - 表单项数组.
   * @param {Object} data - 表单数据对象.
   */
  getCodeFromItems(items, data) {
    let codeArr = [];
    let that = this;
    try {
      items.forEach(itemP => {
        if (itemP.type == "group" || itemP.type == "inputGroup" || itemP.type == "busgroup") {
          itemP.children.forEach(itemC => {
            let newObjC = {};
            if (itemC.codeData && itemC.codeData.code && data[itemC.key]) {
              newObjC.code = itemC.codeData.code;
              newObjC.field = itemC.key;
              // 不论value 是数组 或者 字符串
              if (that.isArray(data[itemC.key])) {
                if (itemC.type == "cascader") {
                  newObjC.value = data[itemC.key].length > 0 ? data[itemC.key][data[itemC.key].length - 1] : null;
                } else {
                  newObjC.value = data[itemC.key].join(",");
                }
              } else {
                newObjC.value = data[itemC.key];
              }
              codeArr.push(newObjC);
            }
          });
        } else {
          let newObjP = {};
          // data 不存在的不需要翻译
          if (itemP.codeData && itemP.codeData.code && data[itemP.key]) {
            newObjP.code = itemP.codeData.code;
            newObjP.field = itemP.key;
            // 不论value 是数组 或者 字符串
            if (that.isArray(data[itemP.key])) {
              if (itemP.type == "cascader") {
                newObjP.value = data[itemP.key].length > 0 ? data[itemP.key][data[itemP.key].length - 1] : null;
              } else {
                newObjP.value = data[itemP.key].join(",");
              }
            } else {
              newObjP.value = data[itemP.key];
            }
            codeArr.push(newObjP);
          }
        }
      });
      return codeArr;
    } catch (err) {
      return [];
    }
  }

  // 暂时没用
  getformItemReadOnlyText(formItem, data) {
    formItem.forEach(item => {
      item.readOnly = true;
      if (item.codeData && item.codeData.data) {
        let codedata = item.codeData.data;
        codedata.forEach(element => {
          let eleval = element[item.codeData.valueName];
          for (let objk in data) {
            if (data[objk] == eleval) {
              item[item.key + "_" + "name"] = element[item.codeData.labelName];
            }
          }
        });
      } else {
        for (let objk in data) {
          if (objk == item.key) {
            item[item.key + "_" + "name"] = data[objk];
          }
        }
      }
    });
    return formItem;
  }
  // 根据code 获取 显示字段
  getLabelWithgetCode(codes) {
    // code : {code: 码表名称， field：formItem唯一标识， value： 当前选中的code码值}
    return new Promise(resolve => {
      let par = {
        serviceName: "common",
        servicePath: "batchCodeInfo",
        codeList: codes
      };
      request(par).then(res => {
        resolve(res);
      });
    });
  }

  // 重置 formdata， 增加 回显字段
  resetFormDataAddkeyName(formData, codeLabel, data) {
    let _this = this;
    try {
      formData.forEach(itemP => {
        if (itemP.type == "group" || itemP.type == "inputGroup" || itemP.type == "busgroup") {
          itemP.children.forEach(itemC => {
            if (itemP.type == "busgroup") {
              itemC.readOnly = true;
            }
            if (itemC.codeData && itemC.codeData.code) {
              itemC[itemC.key + "_" + "name"] = _this.getCodeLabel(itemC.key, codeLabel, itemC);
            } else if (itemC.codeData && itemC.codeData.data) {
              itemC[itemC.key + "_" + "name"] = _this.getCodeDataLabel(
                itemC.key,
                data,
                itemC.codeData,
                itemC.codeData.data,
                itemC.type
              );
            } else {
              if (itemC.attrbute && (itemC.attrbute.type == "range" || itemC.attrbute.type == "daterange")) {
                let dateR = _this.getItemLabel(itemC.key, data);
                itemC[itemC.key + "_" + "name"] = dateR[0] + "～" + dateR[1];
              } else if (itemC.type == "range" || itemC.type == "daterange") {
                let dateR = _this.getItemLabel(itemC.key, data);
                itemC[itemC.key + "_" + "name"] = dateR[0] + "～" + dateR[1];
              } else if (itemC.type == "money") {
                itemC[itemC.key + "_" + "name"] = _this.getItemLabel(itemC.key, data) + _this.getUnitText(itemC);
              } else {
                itemC[itemC.key + "_" + "name"] = _this.getItemLabel(itemC.key, data)
                  ? _this.getItemLabel(itemC.key, data) + this.getAfterText(itemC)
                  : "";
              }
            }
          });
        } else {
          if (itemP.codeData && itemP.codeData.code) {
            itemP[itemP.key + "_" + "name"] = _this.getCodeLabel(itemP.key, codeLabel, itemP);
          } else if (itemP.codeData && itemP.codeData.data) {
            itemP[itemP.key + "_" + "name"] = _this.getCodeDataLabel(
              itemP.key,
              data,
              itemP.codeData,
              itemP.codeData.data,
              itemP.type
            );
          } else {
            if (itemP.attrbute && (itemP.attrbute.type == "range" || itemP.attrbute.type == "daterange")) {
              let dateR = _this.getItemLabel(itemP.key, data);
              itemP[itemP.key + "_" + "name"] = dateR[0] + "～" + dateR[1];
            } else if (itemP.type == "range" || itemP.type == "daterange") {
              let dateR = _this.getItemLabel(itemP.key, data);
              itemP[itemP.key + "_" + "name"] = dateR[0] + "～" + dateR[1];
            } else if (itemP.type == "presentdate") {
              let label = _this.getItemLabel(itemP.key, data);
              if (!label || label == "" || label.indexOf("9999") > -1) {
                // 至今
                itemP[itemP.key + "_" + "name"] = "至今";
              } else {
                itemP[itemP.key + "_" + "name"] = label;
              }
            } else if (itemP.type == "presentdaterange") {
              let range = _this.getItemLabel(itemP.key, data);
              if (range && range.length == 2 && range[0]) {
                if (range[1] && range[1].indexOf("9999") < 0) {
                  itemP[itemP.key + "_" + "name"] = range[0] + "～" + range[1];
                } else {
                  itemP[itemP.key + "_" + "name"] = range[0] + "～" + "至今";
                }
              } else {
                itemP[itemP.key + "_" + "name"] = "";
              }
            } else if (itemP.type == "money") {
              itemP[itemP.key + "_" + "name"] = _this.getItemLabel(itemP.key, data) + _this.getUnitText(itemP);
            } else {
              itemP[itemP.key + "_" + "name"] = _this.getItemLabel(itemP.key, data)
                ? _this.getItemLabel(itemP.key, data) + this.getAfterText(itemP)
                : "";
            }
          }
        }
      });
      return formData;
    } catch (err) {
      return formData;
    }
  }

  // 码表类型，
  // 参数 key： formItem 唯一标识， codelabel：{code: 码表名称， field：formItem唯一标识， value： 回显字段}
  getCodeLabel(key, codeLabel, itemP) {
    let name = "";
    if (codeLabel.length > 0) {
      codeLabel.forEach(item => {
        if (itemP.type == "selectRange") {
          if (item.field == key) {
            let rang = item.value.split(",");
            if (rang[0] == rang[1]) {
              name = rang[0];
            } else {
              let r1 = rang[0] ? rang[0] : "";
              let r2 = rang[1] ? rang[1] : "";
              name = r1 + "-" + r2;
            }
          }
        } else {
          if (item.field == key) {
            name = item.value;
          }
        }
      });
    }
    return name;
  }
  getAfterText(item) {
    if (item.attrbute) {
      if (item.attrbute.afterText) {
        return " " + item.attrbute.afterText;
      } else {
        return "";
      }
    } else return "";
  }
  // 获取后缀
  getUnitText(item) {
    if (item.attrbute) {
      if (item.attrbute.afterText == "01") {
        return "元";
      } else if (item.attrbute.afterText == "02") {
        return "美元";
      } else {
        return "元";
      }
    } else {
      return "元";
    }
  }
  // 有数据源的code
  // 参数 key： formItem 唯一标识， values：当前选中值， codeData： {data：数据源， code： 码表名称，valueName：value字段属性名称， labelName： 回显字段属性名称  }， data： 数据源
  getCodeDataLabel(key, values, codeData, data, type) {
    let val = "";
    for (let k in values) {
      if (k == key) {
        val = values[k];
      }
    }
    return this.getlabelWithValue(val, codeData, data, type);
  }

  getlabelWithValue(val, codeData, data, type) {
    let name = "";
    let _this = this;
    let rang_name = [];
    lodash.forEach(data, itemP => {
      let valP = itemP[codeData.valueName];
      if (type == "selectRange") {
        let rang = val.split(",");
        rang.forEach(r => {
          if (valP == r) rang_name.push(itemP[codeData.labelName]);
        });
        if (rang[0] == rang[1]) {
          name = rang_name[0];
        } else name = rang_name[0] + "-" + rang_name[1];
      } else if (valP == val) {
        name = itemP[codeData.labelName];
      }
      // 如果有值 直接跳出循环
      if (name) return false;
      if (itemP.children && itemP.children.length > 0) {
        name = _this.getlabelWithValue(val, codeData, itemP.children);
      }
      // 跳出foreach 循环
      return !name;
    });
    return name;
  }

  getItemLabel(key, data) {
    let val = "";
    for (let k in data) {
      if (k == key) {
        val = data[k];
      }
    }
    return val;
  }

  // 根据身份证获取出生日期
  birthDayByIdCard(idCard) {
    //通过身份证获取出生日期
    var year, month, day;
    if (idCard.length == 15) {
      year = idCard.substring(6, 8);
      month = idCard.substring(8, 10);
      day = idCard.substring(10, 12);
    } else {
      year = idCard.substring(6, 10);
      month = idCard.substring(10, 12);
      day = idCard.substring(12, 14);
    }
    return year + "-" + month + "-" + day;
  }

  //通过身份证判断是男是女
  maleOrFemalByIdCard(idCard) {
    if (idCard.length === 15) {
      if (idCard.substring(14, 15) % 2 === 0) {
        return "2";
      } else {
        return "1";
      }
    } else if (idCard.length == 18) {
      if (idCard.substring(14, 17) % 2 === 0) {
        return "2";
      } else {
        return "1";
      }
    } else {
      return null;
    }
  }
}

// table 工具类
export class tableUntils extends baseUntils {
  constructor(delegate = null) {
    super();
    this.delegate = delegate;
  }
}

// 条件类
export class conditionUtils extends baseUntils {
  constructor(delegate = null) {
    super();
    this.delegate = delegate;
  }

  editable(data) {
    data.forEach(ele => {
      if (ele.edit) {
        ele.edit = false;
      }
      if (ele.children) {
        this.editable(ele.children);
      }
    });
    return data;
  }

  /*
   * 将已有条件解析成字符串
   * @Method anlisysConditions
   */
  anlisysConditions(data) {
    let conLabel = [];
    data.forEach(ele => {
      let label = "";
      // let type = this.getTypeText(ele);
      if (ele.field.type == "func") {
        let params = "";
        if (ele.field.params) {
          ele.field.params.forEach((par, index) => {
            if (index != 0) {
              params += ", ";
            }
            params += par.name;
          });
        }
        label += "'" + ele.field.label + "(" + params + ")" + "'" + ele.cond.label + "'" + ele.value.label + "'";
      } else {
        label += "'" + ele.field.label + "'" + ele.cond.label + "'" + ele.value.label + "'";
      }
      if (label == "''''") label = "";
      conLabel.push(label);
    });
    return conLabel;
  }
  // 判断元素 是否含有某个class
  // hasClass(ele, cls) {
  //   if (ele) {
  //     cls = cls || "";
  //     if (cls.replace(/\s/g, "").length == 0) return false; // 当cls没有参数时，返回false
  //     return new RegExp(" " + cls + " ").test(" " + ele.className + " ");
  //   }
  // }
}

// 日期类
export class DateUntils {
  constructor() {}
  // 计算时差
  DateDiff(sDate1, sDate2) {
    //sDate1和sDate2是2002-12-18格式
    var aDate, oDate1, oDate2, iDays;
    aDate = sDate1.split("-");
    oDate1 = new Date(aDate[1] + "-" + aDate[2] + "-" + aDate[0]); //转换为12-18-2002格式
    aDate = sDate2.split("-");
    oDate2 = new Date(aDate[1] + "-" + aDate[2] + "-" + aDate[0]);
    iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
    return iDays;
  }
  // 计算时差
  DateDifference(faultDate, completeTime) {
    var stime = new Date(faultDate).getTime();
    var etime = new Date(completeTime).getTime();
    var usedTime = etime - stime; //两个时间戳相差的毫秒数
    var days = Math.floor(usedTime / (24 * 3600 * 1000));
    var time = days;
    return time;
  }
}

// 浏览器原生方法工具类
export class browserUtils extends baseUntils {
  constructor(delegate = null) {
    super();
    this.delegate = delegate;
  }

  /*
   * 根据事件获取当前事件dom
   * @Method getDomWithEventtarget
   */
  get getDomWithEventtarget() {
    return window.event.srcElement;
  }

  /*
   * 根据坐标获取当前事件dom
   * @Method getDomWithCursorPos
   */
  getDomWithCursorPos(x, y) {
    return document.elementFromPoint(x, y);
  }

  /*
   * 根据dom获取当前dom距离浏览器顶端的距离
   * @Method getTopWithDom
   */
  getTopWithDom(dom) {
    let scrollT = 0;
    let domT = dom.offsetTop;
    if (document.body) {
      scrollT = document.body.scrollTop;
    } else {
      scrollT = document.documentElement.scrollTop;
    }
    return domT - scrollT;
  }

  /*
   * 获取DOM元素到页面顶部的距离
   * @Method getTopWithDom
   */

  getElementToPageTop(el) {
    if (el.offsetParent) {
      return this.getElementToPageTop(el.offsetParent) + el.offsetTop;
    }
    return el.offsetTop;
  }
}
