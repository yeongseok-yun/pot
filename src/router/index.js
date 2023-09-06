import {createRouter , createWebHistory} from 'vue-router';
import Home from '../pages/loginPage.vue'
import Main from '../pages/subMenu/mainIndex.vue'


const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'Home',
            component: Home
        },
        {
            path : '/main',
            name : 'Main',
            component: Main
        },
        
        
    ]
})

export default router;