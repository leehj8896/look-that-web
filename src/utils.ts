import { constants } from "@/constants"
import { HTTP_METHOD } from "./types";

export const fetchData = async (params: {
  path: string,
  method?: HTTP_METHOD,
  body?: BodyInit,
}) => {
  console.log('fetchData', 'params', params)
  const { path, method, body } = params

  const response = await fetch(`${constants.API_URL}${path}`, {
    method: method || HTTP_METHOD.GET,
    body: body || null,
  })
  const jsonData = await response.json()
  console.log('response', jsonData)
  return jsonData
}
