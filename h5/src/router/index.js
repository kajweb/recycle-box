import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/HelloFromVux'

let Main = ()=>import ('@/Main.vue')
let index = ()=>import ('@/view/index.vue')
let add = ()=>import ('@/view/add.vue')
let success = ()=>import ('@/view/success.vue')
let info = ()=>import ('@/view/info.vue')
let article = ()=>import ('@/view/article.vue')
let load = ()=>import ('@/load.vue')

// let Main =  function(resolve) {
//         		require(['@/Main.vue'], resolve)
//       		}

Vue.use(Router)
export default new Router({
  routes: [{
        path: '/',
        redirect: '/load',
        component: Main,
        children:[{
	        path: '/index',
	        component: index,
        },
        {
	        path: '/add',
	        component: add,
        },
        {
	        path: '/success',
	        component: success,
        },
        {
	        path: '/info',
	        component: info,
        },
        {
	        path: '/article/:id',
	        component: article,
        }]
    },{
        path: '/load',
        component: load
    }]
})