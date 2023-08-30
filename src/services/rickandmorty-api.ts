import axios from 'axios'

import { API_URL } from '../shared/constants'
import { DataList } from '../shared/types'

interface Params {
  page: number
  name?: string
}

class RickAndMortyApi {
  async getCharacters({ page = 1, name = '' }): Promise<DataList> {
    const params: Params = {
      page,
    }
    if (name !== '') {
      params.name = name
    }
    const { data } = await axios.get(`${API_URL}/character/`, { params })
    return { data: data.results, pages: data.info.pages }
  }
}

export default new RickAndMortyApi()
