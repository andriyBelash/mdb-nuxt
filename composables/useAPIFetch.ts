import type { AvailableRouterMethod, NitroFetchRequest } from 'nitropack'
import type { FetchError } from 'ofetch'
import type { AsyncData, FetchResult, UseFetchOptions } from 'nuxt/app'

type KeysOf<T> = Array<T extends T ? keyof T extends string ? keyof T : never : never>
type PickFrom<T, K extends Array<string>> = T extends Array<any> ? T : T extends Record<string, any> ? keyof T extends K[number] ? T : K[number] extends never ? T : Pick<T, K[number]> : T

export function useTheFetch<
  ResT = void,
  ErrorT = FetchError,
  ReqT extends NitroFetchRequest = NitroFetchRequest,
  Method extends AvailableRouterMethod<ReqT> = ResT extends void ? 'get' extends AvailableRouterMethod<ReqT> ? 'get' : AvailableRouterMethod<ReqT> : AvailableRouterMethod<ReqT>,
  _ResT = ResT extends void ? FetchResult<ReqT, Method> : ResT,
  DataT = _ResT,
  PickKeys extends KeysOf<DataT> = KeysOf<DataT>,
  DefaultT = null,
>(req: Ref<ReqT> | ReqT | (() => ReqT), options?: UseFetchOptions<_ResT, DataT, PickKeys, DefaultT, ReqT, Method>): AsyncData<PickFrom<DataT, PickKeys> | DefaultT, ErrorT | null> {
  return useFetch(req, {
    baseURL: useRuntimeConfig().public.baseURL,
    onRequest({ options }) {
        options.headers = options.headers || {};
       (options.headers as Record<string, string>).Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWYxNzliMDdjMDY2OTk5ZmIxNWFlYTRhMDM3N2NmYSIsInN1YiI6IjYzNGIwNTc0YzhhMmQ0MDA3YTJmZGY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.33M55WBIFE75LqZh_0jmFOiB0STSM8Y8NSFJuiWYUmA'
    },
    onResponse({ response }) {
      if (response._data.code === 401) {
        reloadNuxtApp()
      }
    },
    ...options,
  })
}
