import { constants } from "@/constants"
import { HTTP_METHOD } from "./types";

export const fetchData = async (params: {
  path: string,
  method?: HTTP_METHOD,
  body?: BodyInit,
  query?: Record<string, any>
}) => {
  console.log('fetchData', 'params', params)
  let { path, method, body, query } = params

  let response
  let url = new URL(path, constants.API_URL)

  if (!method) method = HTTP_METHOD.GET
  switch (method) {
    case HTTP_METHOD.GET:
      url.search = new URLSearchParams(query).toString();
      response = await fetch(url, {
        method: HTTP_METHOD.GET,
      })
      break
    case HTTP_METHOD.POST:
      response = await fetch(url, {
        method: HTTP_METHOD.POST,
        body: body,
      })
      break
  }
  if (!response) return {}

  const jsonData = await response.json()
  console.log('response', jsonData)
  return jsonData
}
