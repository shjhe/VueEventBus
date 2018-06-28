import VLeft from './Left'
import VRight from './Right'

const components = {
  VLeft,
  VRight
}

const install = function (Vue, opt = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

export {
  install,
  VLeft,
  VRight
}
