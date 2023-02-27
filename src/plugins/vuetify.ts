// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Vuetify
import { createVuetify } from 'vuetify'
import { md2, md3 } from 'vuetify/blueprints'

export default createVuetify({
    //   blueprint: md3, //using blueprints https://next.vuetifyjs.com/en/features/blueprints
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
})
