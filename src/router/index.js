import {createRouter , createWebHistory} from 'vue-router';
//import Home from '../pages/loginPage.vue'
import Main from '../pages/subMenu/mainIndex.vue'
import Login from '../pages/loginPage.vue'
import Test from '../pages/testDD.vue'


const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/main',
            name : 'Main',
            component: Main
        },
        {
            path : '/login',
            name : 'loginPage',
            component: Login
        },
        {
            path : '/test',
            name : 'Test',
            component: Test
        },
        
        
    ]
})

export default router;