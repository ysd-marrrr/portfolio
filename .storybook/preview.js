// Global SCSS
import 'bulma/css/bulma.css'
import '@/assets/scss/global.scss'

// Storybook Vue
import { configure } from '@storybook/vue';
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
configure(require.context('../components', true, /\.stories\.js$/), module);