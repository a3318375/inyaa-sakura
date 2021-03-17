import { createRouter,createWebHashHistory} from "vue-router"
import home from '../page/home.vue'
import blog from '../page/blog.vue'
import shuoshuo from '../page/shuoshuo.vue'
import tools from '../page/tools.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog
  },
  {
    path: '/shuoshuo',
    name: 'shuoshuo',
    component: shuoshuo
  },
  {
    path: '/tools',
    name: 'tools',
    component: tools
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})