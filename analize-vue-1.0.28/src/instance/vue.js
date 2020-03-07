import initMixin from './internal/init'
import stateMixin from './internal/state'
import eventsMixin from './internal/events'
import lifecycleMixin from './internal/lifecycle'
import miscMixin from './internal/misc'

import dataAPI from './api/data'
import domAPI from './api/dom'
import eventsAPI from './api/events'
import lifecycleAPI from './api/lifecycle'

/**
 * The exposed Vue constructor.
 *
 * API conventions:
 * - public API methods/properties are prefixed with `$`
 * - internal methods/properties are prefixed with `_`
 * - non-prefixed properties are assumed to be proxied user
 *   data.
 *
 * @constructor
 * @param {Object} [options]
 * @public
 */

function Vue (options) {
  console.log('options:', options)
  /**
   * 在_init调用$mount后执行一系列操作
   */
  this._init(options)
}

// install internals
/**
 * Vue.prototype._init
 * 把_init挂载到Vue的原型链上
 * 当组件 new Vue(options) 初始化的时候 把options挂到this.$options下
 */
initMixin(Vue)

stateMixin(Vue)

eventsMixin(Vue)

lifecycleMixin(Vue)
miscMixin(Vue)

// install instance APIs
dataAPI(Vue)
domAPI(Vue)
eventsAPI(Vue)

/**
 * Vue.prototype.$mount
 * Vue.prototype.$destroy
 * Vue.prototype.$compile
 * 挂载以上几个生命周期
 */
lifecycleAPI(Vue)

export default Vue
