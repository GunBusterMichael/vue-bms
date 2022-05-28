import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from 'Login/Login.vue'
import Layout from 'Layout/index.vue'
import Home from '../views/Home/Home.vue'

/* 懒加载 */
const Goods = () => import('../views/Goods/Goods.vue')
const Params = () => import('../views/Params/Params.vue')
const Advert = () => import('../views/Advert/Advert.vue')
const Order = () => import('../views/Order/Order.vue')
const OrderList = () => import('../views/Order/components/OrderList/OrderList.vue')
const ReturnOrder = () => import('../views/Order/components/ReturnOrder/ReturnOrder.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',  // 当路径为空时（打开网页时）
    component: Layout,  // 显示 Layout 组件
    name: 'Layout',
    /* 配置二级路由 */
    children: [
      {
        path: '/',  // 显示 Layout 组件时，默认显示 Home 组件
        name: 'Home',
        component: Home
      },
      {
        path: 'goods',
        name: 'Goods',
        component: Goods
      },
      {
        path: 'params',
        name: 'Params',
        component: Params
      },
      {
        path: 'advert',
        name: 'Advert',
        component: Advert
      },
      {
        path: 'order',
        name: 'Order',
        component: Order,
        /* url 为 /order 时，重定向至 /order/order-list */
        redirect: '/order/order-list',
        /* 配置三级路由 */
        children: [
          {
            path: 'order-list',
            component: OrderList,
          },
          {
            path: 'return-order',
            component: ReturnOrder
          }
        ]
      }
    ]
  },
  {
    path: '/Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
