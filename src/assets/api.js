/*
 * @Author: your name
 * @Date: 2021-01-07 16:28:07
 * @LastEditTime: 2021-01-07 17:02:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-mobile\src\commonJs\api.js
 */

import axios from "axios";
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Utf8.parse("rainbow platform");
const iv = CryptoJS.enc.Utf8.parse("ABCDEF1234123412");

const decrypt = function(content) {
  let decrypt = CryptoJS.AES.decrypt(content, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
};

export function selfDecrypt(content) {
  let data = decrypt(content);
  let newData = data;
  if (data) newData = JSON.parse(data);
  return newData;
}

const instance = axios.create({
  baseURL: "api/callService",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" }
});

// 请求一个信息
export function request(params) {
  return new Promise((resolve, reject) => {
    instance
      .post("", params)
      .then(response => {
        let result = response.data;
        if (result.needLogin) {
          reject();
          return;
        }
        if (result.status == "1") resolve(result);
        else {
          if (result.msgId == "403") {
            Toast.fail(result.msgInfo); //认证过期
          } else if (result.msgId == "000000") {
            reject();
            return;
          } else if (result.msgId == "000001") {
            sessionStorage.setItem("Authorization", this.result.msgDetail.Token);
          } else {
            Toast.fail(result.msgInfo);
          }
          resolve(result);
        }
      })
      .catch(response => {
        Toast.fail(response.msgInfo);
      });
  });
}

// 请求一组信息
export function batchRequest(requests) {
  return request({
    serviceName: "common",
    servicePath: "batch",
    params: requests
  });
}

//异步请求前在header里加入token
instance.interceptors.request.use(
  config => {
    if (sessionStorage.getItem("Authorization")) {
      config.headers["Authorization-Token"] = sessionStorage.getItem("Authorization");
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
//异步请求后，判断token是否过期
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          sessionStorage.removeItem("Authorization");
          this.$router.push("/");
      }
    }
  }
);
