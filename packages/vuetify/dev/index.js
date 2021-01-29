import '@mdi/font/css/materialdesignicons.css'

import { createVuetify, VLigatureIcon, VClassIcon, VSvgIcon } from 'vuetify'
import { createApp, h, mergeProps } from 'vue'
import App from './App'
import { AbTesting } from 'mdue'

const app = createApp(App)
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases: {
      close: 'mdi-close',
      custom: AbTesting,
    },
    sets: {
      md: {
        component: props => h(VLigatureIcon, mergeProps(props, { class: 'material-icons' })),
      },
      mdi: {
        component: props => h(VClassIcon, mergeProps(props, { class: 'mdi' })),
      },
      'mdi-svg': {
        component: props => h(VSvgIcon, props),
      },
      fa5: {
        component: props => h(VClassIcon, props),
      },
    },
  },
})

app.use(vuetify)

app.mount('#app')
