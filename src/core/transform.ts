import { AxiosTransformer } from '../types'

/**
 * 转换函数
 * @param data
 * @param headers
 * @param fns
 */
export default function transform(
  data: any,
  headers: any,
  fns?: AxiosTransformer | AxiosTransformer[]
): any {
  if (!fns) return data

  if (!Array.isArray(fns)) {
    fns = [fns]
  }
  fns.forEach(fn => {
    data = fn(data, headers)
  })
  return data
}
