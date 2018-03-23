import Vue from 'vue'
import App from './App.vue'
//import VueRouter from 'vue-router'
import router from './router'

let firebase = require('firebase');
var config = {
    apiKey: "AIzaSyDuMlzhhz6sGi8nhzBmCVo5LdWTgN9B3jU",
    authDomain: "eckerd-housing.firebaseapp.com",
    databaseURL: "https://eckerd-housing.firebaseio.com",
    projectId: "eckerd-housing",
    storageBucket: "eckerd-housing.appspot.com",
    messagingSenderId: "617707430449"
  };
firebase.initializeApp(config);

Vue.config.productionTip = false
//Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
