import {createRouter, createWebHashHistory} from 'vue-router'
import Container from './components/Container.vue'
import CompilationsContainer from './components/CompilationsContainer.vue'
import WeightCoefficients from './components/WeightCoefficients.vue'

export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {path: '/Container', component:Container},
        {path: '/CompilationsContainer', component:CompilationsContainer, alias:'/'},
        {path: '/WeightCoefficients', component:WeightCoefficients}
    ]
})