import Vue from 'vue'
import App from './App.vue'
import './assets/scss/styles.scss'

Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
//
// Toast.add({
// 	text: 'Текст сообщения...',
// 	color: '#dc3545',
// 	autohide: false
// });
