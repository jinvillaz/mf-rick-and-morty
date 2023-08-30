import axios from 'axios'

import DisneyApi from './rickandmorty-api'

jest.mock('axios')

describe('DisneyApi', () => {
  it('should fetch characters without a name', async () => {
    const responseData = {
      data: {
        results: [
          {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          },
        ],
        info: { pages: 1 },
      },
    };
    (axios.get as jest.Mock).mockResolvedValue(responseData)

    const result = await DisneyApi.getCharacters({ page: 1 })

    expect(result.data.length).toBe(1)
    expect(result.pages).toBe(1)
  })

  it('should fetch characters with a name', async () => {
    const responseData = {
      data: {
        results: [
          {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          },
        ],
        info: { pages: 1 },
      },
    };
    (axios.get as jest.Mock).mockResolvedValue(responseData)

    const result = await DisneyApi.getCharacters({ page: 1, name: 'rick' })

    expect(result.data.length).toBe(1)
    expect(result.pages).toBe(1)
  })
})
