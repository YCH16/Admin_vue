import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/CSS/global.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from "axios";
import VueAxios from 'vue-axios'
import XLSX from 'xlsx'

const app =createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(store).use(router).use(ElementPlus).use(VueAxios,axios).use(XLSX).mount('#app')