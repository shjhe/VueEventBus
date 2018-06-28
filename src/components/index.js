import XLeft from './Left'
import XRight from './Right'

const components = {
  XLeft,
  XRight
}

const install = function (Vue, opt = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

export {
  install,
  XLeft,
  XRight
}
