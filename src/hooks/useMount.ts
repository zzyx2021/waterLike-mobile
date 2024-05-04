import { useEffect } from 'react'

/**
 *组件加载时运行
 * @param {() => void} fn
 */
const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useMount
