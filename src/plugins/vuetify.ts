// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vuetify
import { createVuetify } from 'vuetify'
import { md2, md3 } from 'vuetify/blueprints'

export default createVuetify({
//   blueprint: md3, //using blueprints https://next.vuetifyjs.com/en/features/blueprints
  components,
  directives,
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})
