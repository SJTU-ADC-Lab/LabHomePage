import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import Members from "../components/Members/Members";
import Achievements from "../components/Achievements/Achievements";
import Events from "../components/Events/Events";
import Joinus from "../components/Joinus/Joinus";
import Friends from "../components/Friends/Friends";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/achievements',
      name: 'Achievements',
      component: Achievements
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/join',
      name: 'Joinus',
      component: Joinus
    },
    {
      path: '/friends',
      name: 'Firends',
      component: Friends
    }
  ],
  mode: 'history'
})
