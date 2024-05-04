import { useCallback, useState } from 'react'
import useMount from './useMount'

interface IOptions {
  params: Record<string, string>
  manual?: boolean
  onSuccess?: (res: unknown) => void
  onError?: (err: unknown) => void
}

/**
 *1 实现组件初始化,发送请求获取数据
 *2 手动触发请求
 * @param {(params: Record<string, string>) => Promise<unknown>} service
 * @param {Record<string, string>} params
 * @return {*}
 */
const useRequest = (
  service: (params: Record<string, string>) => Promise<unknown>,
  options: IOptions
) => {
  const [data, setData] = useState<unknown>()
  const [loading, setLoading] = useState(false)

  const init = useCallback(
    (curParams: Record<string, string>) => {
      setLoading(true)
      return service(curParams)
        .then((res) => {
          setData(res)
          setLoading(false)
          options.onSuccess && options.onSuccess(res)
        })
        .catch((error) => {
          setLoading(false)
          options.onError && options.onError(error)
        })
    },
    [options, service]
  )
  
  useMount(() => {
    if (!options.manual) {
      init(options.params)
    }
  })

  const run = (runParams: Record<string, string>) => init(runParams)
  return {loading, data, run}
}

export default useRequest

