import '@mdi/font/css/materialdesignicons.css'

import { createVuetify, VLigatureIcon, VClassIcon, VSvgIcon } from 'vuetify'
import { createApp, h, mergeProps } from 'vue'
import App from './App'
import { AbTesting } from 'mdue'
// import { aliases, mdi } from 'vuetify/src/iconsets/mdi'
import { aliases, fa } from 'vuetify/src/iconsets/fa-svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas, faHome } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(fas)

app.component('FontAwesomeIcon', FontAwesomeIcon)

const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa5',
    // aliases: {
    //   close: 'mdi-close',
    //   custom: AbTesting,
    // },
    // sets: {
    //   md: {
    //     component: props => h(VLigatureIcon, mergeProps(props, { class: 'material-icons' })),
    //   },
    //   mdi: {
    //     component: props => h(VClassIcon, mergeProps(props, { class: 'mdi' })),
    //   },
    //   'mdi-svg': {
    //     component: props => h(VSvgIcon, props),
    //   },
    //   fa5: {
    //     component: props => h(VClassIcon, props),
    //   },
    // },
    aliases,
    sets: {
      // mdi,
      fa5: fa,
    },
  },
})

app.use(vuetify)

app.mount('#app')
