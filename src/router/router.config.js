import React from "react"
// import About from "@/views/about"
// import Adress from "@/views/adress"
import SVG from "@/views/svg"
import MobxDemo from "@/views/mobxdemo"

const route=[
  {
    path:'/about',
    //react 懒加载
    component:React.lazy(() => import('@/views/about')),
  },
  {
    path:'/adress',
    component:React.lazy(() => import('@/views/adress')),
  },
  {
    path:'/svg',
    component:SVG,
  },
  {
    path:'/mobxdemo',
    component:MobxDemo,
  },
]
 
//  const route=[
//   {
//     path:'/about',
//     component: () => import('../views/about'),
//   },
//   {
//     path:'/adress',
//     component: () => import('../views/adress'),
//   },
//   {
//     path:'/svg',
//     component: () => import('../views/svg'),
//   },
// ]

export default route