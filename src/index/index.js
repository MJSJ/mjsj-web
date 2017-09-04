import Vue from 'vue'
import App from './app.vue'

import './index.less';
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

new Vue({
	el: '#app',
	render: h => h(App)
})


var escapeHtml = require('escape-html');
var html = escapeHtml('<div>daa</div>');
console.log(html)