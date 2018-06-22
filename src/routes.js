import Home from "./comps/Home"
import Menu from "./comps/Menu"
import Admin from "./comps/Admin"
import About from "./comps/about/About"
import Login from "./comps/Login"
import Register from "./comps/Register"

//二级路由
import Com from "./comps/about/Com"
import Deli from "./comps/about/Deli"
import Hist from "./comps/about/Hist"
import Order from "./comps/about/Order"
import { INSPECT_MAX_BYTES } from 'buffer';

export 
const routes = [
  {path:'/',name:'homeLink',components:{
    default:Home,
    'order':Order,
    'deli':Deli,
    'hist':Hist
  }},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/admin',name:'adminLink',component:Admin},
  {path:'/about',name:'aboutLink',component:About,children:[
    {path:'/com',name:'comLink',component:Com},
    {path:'/deli',name:'deliLink',component:Deli},
    {path:'/hist',name:'histLink',component:Hist},
    {path:'/order',name:'orderLink',component:Order},
  ]},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'/*',redirect:'/'},
]