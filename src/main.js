import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive'
import './assets/tailwind.css'
import VueTyper from 'vue-typer'

Vue.config.productionTip = false

// Use Libraries
Vue.use(VueTyper)
Vue.use(VueScrollactive)

// Configure Global Variables
Vue.prototype.$name = 'Jamie Huang'

new Vue({
	render: h => h(App),
}).$mount('#app')
