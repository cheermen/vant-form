/*
 * @Author: your name
 * @Date: 2021-01-07 16:28:20
 * @LastEditTime: 2021-01-07 16:52:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vant-mobile\src\plugins\api.js
 */
import Vue from "vue";
import { request, batchRequest } from "@/assets/api.js";

Vue.prototype.$request = request;
Vue.prototype.$batchRequest = batchRequest;
Vue.prototype.$insert = (entity, object) => request(`insert/${entity}`, object);
Vue.prototype.$update = (entity, object) => request(`update/${entity}`, object);
Vue.prototype.$query = query => request("query", query);
Vue.prototype.$batchQuery = function(querys) {
  const requestParams = Object.keys(querys).map(key => {
    return { entry: "query", params: querys[key], alias: key };
  });
  return batchRequest(requestParams);
};
