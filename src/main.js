import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive'
import './assets/tailwind.css'
import VueTyper from 'vue-typer'

Vue.config.productionTip = false

Vue.use(VueTyper)
Vue.use(VueScrollactive)

new Vue({
	render: h => h(App),
}).$mount('#app')
