import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transFormRequest } from './helpers/data'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transFormUrl(config)
  config.data = transFormRequestData(config)
}

function transFormUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transFormRequestData(config: AxiosRequestConfig): any {
  return transFormRequest(config.data)
}

export default axios
