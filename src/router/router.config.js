import About from "../views/about"
import Adress from "../views/adress"
import SVG from "../views/svg"

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