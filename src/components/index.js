import VLeft from './Left'
import VRight from './Right'
import VSilderBar from './SilderBar'

const components = {
  VLeft,
  VRight,
  VSilderBar
}

const install = function (Vue, opt = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

export {
  install,
  VLeft,
  VRight,
  VSilderBar
}
