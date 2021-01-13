// 导入单个组件
import VInput from "./components/VInput/index.js";
import VDate from "./components/VDate/index.js";
import VTime from "./components/VTime/index.js";
import VSelect from "./components/VSelect/index.js";
import VNumber from "./components/VNumber/index.js";
import VForm from "./components/VForm/index.js";

import { baseUntils, parseFormUntils, DateUntils } from "./assets/until";

let EgParseFormUtils = new parseFormUntils();
let EgDateUntils = new DateUntils();
let EgBaseUntils = new baseUntils();

// 保存 便于遍历 这里只放自定义的插件 (修改时间2019-8-23)
const components = [VInput, VDate, VTime, VSelect, VNumber, VForm];

const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;

  components.map(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$EgParseFormUtils = EgParseFormUtils;
  Vue.prototype.$EgDateUntils = EgDateUntils;
  Vue.prototype.$EgBaseUntils = EgBaseUntils;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { VInput, VDate, VTime, VSelect, VNumber, VForm, install };
export default { install };
