import axios from 'axios'
import { initialSearchData } from '../atoms'
import { ResponseData, Response } from './types'

const apiKey = import.meta.env.VITE_APP_GIPHY_API_KEY
const limit = Number(import.meta.env.VITE_APP_SEARCH_LIMIT)

const api = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs'
})

export async function getSearch(
  search: string,
  offset: number
): Promise<ResponseData> {
  try {
    const response = await api.get(
      `/search?api_key=${apiKey}&q=${search}&limit=${limit}&offset=${
        offset * limit
      }&rating=g&lang=en`
    )
    const { data, statusText } = response

    return { responseObj: data as Response, error: false, message: statusText }
  } catch (e) {
    console.log(e)
    return { responseObj: initialSearchData, error: true, message: e }
  }
}
