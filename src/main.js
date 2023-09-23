import './index.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {faTelegram, faSearchengin} from "@fortawesome/free-brands-svg-icons"
import {faBars, faXmark, faEnvelope, faCaretDown, faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons"

library.add(faBars, faXmark, faTelegram, faEnvelope, faCaretDown, faAngleRight, faAngleLeft)

const app = createApp(App)

app.use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

