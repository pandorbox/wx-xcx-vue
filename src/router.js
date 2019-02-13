import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import User from './views/User'
import Addshop from './views/Addshop'
import Logoff from './views/Logoff'
import Rbanner from './views/Revisebanner'
import Rhot from './views/Revisehot'
import Rshop from './views/Reviseshop'
import Rnav from './views/Revisenav'


Vue.use(Router)

export default new Router({
   base:process.env.BASE_URL,
   routes:[
        {path:"/",component: Index},
        {path:"/user/",component:User,children:[
            {path:"",component:Addshop},
            {path:"addshop/",component:Addshop},
            {path:"rnav/",component:Rnav},
            {path:"rbanner/",component:Rbanner},
            {path:"rhot/",component:Rhot},
            {path:"rshop/",component:Rshop},

        ]},
        {path:"logoff/",component:Logoff}
       ]
})