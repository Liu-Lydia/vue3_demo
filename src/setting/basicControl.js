import { getCurrentInstance } from 'vue'

/**
 * 基本控制功能
 * @returns {Object}
 *  {Function} $emitter - mitt
 */
const basicControl = () => {
  // 工具
  const { appContext } = getCurrentInstance()
  const $emitter = appContext.config.globalProperties.$emitter

  return {
    $emitter,
  }
}

export default basicControl
