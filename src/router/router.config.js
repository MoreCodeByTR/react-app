import About from "@/views/about"
import Adress from "@/views/adress"
import SVG from "@/views/svg"
import MobxDemo from "@/views/mobxdemo"
import AntdDemo from "@/views/AntdDemo"

const route=[
  {
    path:'/about',
    component:About,
  },
  {
    path:'/adress',
    component:Adress,
  },
  {
    path:'/svg',
    component:SVG,
  },
  {
    path:'/mobxdemo',
    component:MobxDemo,
  },
  {
    path:'/antd',
    component:AntdDemo,
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