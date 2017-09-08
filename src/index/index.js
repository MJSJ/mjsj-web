import Vue from 'vue'
import App from './app.vue'

import './index.less';
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'vue-awesome/icons/bars'
import 'vue-awesome/icons/th-large'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

import { Cell } from 'mint-ui';
Vue.component(Cell.name, Cell);
import 'mint-ui/lib/style.css';

new Vue({
	el: '#app',
	render: h => h(App)
})
