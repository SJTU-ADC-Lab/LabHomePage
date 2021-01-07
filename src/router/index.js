import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import Members from "../components/Members";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    }
  ]
})
